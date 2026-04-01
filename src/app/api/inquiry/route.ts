import { NextRequest, NextResponse } from "next/server";
import { createLeadInNotion } from "@/lib/notion";
import { sendAutomatedEmails } from "@/lib/email";

interface InquiryData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

function validateInquiryData(data: unknown): { valid: true; lead: InquiryData } | { valid: false; error: string } {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const d = data as Record<string, unknown>;

  if (!d.name || typeof d.name !== "string" || !d.name.trim()) {
    return { valid: false, error: "Name is required" };
  }

  if (!d.email || typeof d.email !== "string" || !d.email.trim()) {
    return { valid: false, error: "Email is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(d.email)) {
    return { valid: false, error: "Invalid email format" };
  }

  if (!d.message || typeof d.message !== "string" || !d.message.trim()) {
    return { valid: false, error: "Message is required" };
  }

  return {
    valid: true,
    lead: {
      name: d.name.trim(),
      email: d.email.trim(),
      phone: typeof d.phone === "string" ? d.phone.trim() : undefined,
      company: typeof d.company === "string" ? d.company.trim() : undefined,
      message: d.message.trim(),
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = validateInquiryData(body);

    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const lead = validation.lead;
    const submittedAt = new Date().toISOString();

    const notionResult = await createLeadInNotion({
      ...lead,
      source: "Website Inquiry",
      submittedAt,
    });

    if (!notionResult.success) {
      console.warn("[Inquiry API] Notion lead creation failed:", notionResult.error);
    }

    const emailResults = await sendAutomatedEmails(lead);

    const hasErrors = !notionResult.success || !emailResults.confirmation.success || !emailResults.nextSteps.success;

    if (hasErrors) {
      console.warn("[Inquiry API] Some integrations failed:", {
        notion: notionResult,
        confirmationEmail: emailResults.confirmation,
        nextStepsEmail: emailResults.nextSteps,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
      leadId: notionResult.id,
    });
  } catch (error) {
    console.error("[Inquiry API] Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
