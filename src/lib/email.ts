interface EmailConfig {
  provider: "sendgrid" | "mailgun" | "console";
  apiKey?: string;
  fromEmail: string;
  fromName: string;
}

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

const getConfig = (): EmailConfig | null => {
  const provider = process.env.EMAIL_PROVIDER as EmailConfig["provider"] || "console";
  const apiKey = process.env.EMAIL_API_KEY;
  const fromEmail = process.env.EMAIL_FROM || "noreply@melonpixels.com";
  const fromName = process.env.EMAIL_FROM_NAME || "MelonPixels";

  if (provider === "console") {
    return { provider: "console", fromEmail, fromName };
  }

  if (!apiKey) {
    return null;
  }

  return { provider, apiKey, fromEmail, fromName };
};

async function sendConfirmationEmail(lead: LeadData): Promise<{ success: boolean; error?: string }> {
  const config = getConfig();

  if (!config) {
    console.warn("[Email] Missing configuration: EMAIL_PROVIDER or EMAIL_API_KEY not set");
    return { success: false, error: "Email integration not configured" };
  }

  const subject = "We received your inquiry - MelonPixels";
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
        .content { background: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
        .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none; }
        h1 { margin: 0; font-size: 24px; }
        p { margin: 16px 0; }
        .highlight { background: #fff7ed; padding: 16px; border-radius: 8px; margin: 16px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank you for reaching out!</h1>
        </div>
        <div class="content">
          <p>Hi ${lead.name},</p>
          <p>We&apos;ve received your inquiry and our team is excited to learn about your project. Here&apos;s what happens next:</p>
          <div class="highlight">
            <strong>What to expect:</strong>
            <ul style="margin: 8px 0 0 20px; padding: 0;">
              <li>We&apos;ll review your message within 24 hours</li>
              <li>A team member will reach out to schedule a discovery call</li>
              <li>We&apos;ll prepare a customized proposal based on your needs</li>
            </ul>
          </div>
          <p>In the meantime, feel free to explore our work:</p>
          <p><a href="https://melonpixels.com/portfolio" style="color: #f97316;">View our portfolio →</a></p>
        </div>
        <div class="footer">
          <p>MelonPixels - Web Agency Philippines</p>
          <p>Nuvali, Laguna | Manila, Philippines</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
Hi ${lead.name},

We've received your inquiry and our team is excited to learn about your project.

What to expect:
- We'll review your message within 24 hours
- A team member will reach out to schedule a discovery call
- We'll prepare a customized proposal based on your needs

In the meantime, feel free to explore our portfolio at https://melonpixels.com/portfolio

MelonPixels - Web Agency Philippines
Nuvali, Laguna | Manila, Philippines
  `;

  return sendEmail({
    to: lead.email,
    subject,
    html: htmlContent,
    text: textContent,
  });
}

async function sendNextStepsEmail(lead: LeadData): Promise<{ success: boolean; error?: string }> {
  const config = getConfig();

  if (!config) {
    console.warn("[Email] Missing configuration for next steps email");
    return { success: false, error: "Email integration not configured" };
  }

  const subject = "Your next steps with MelonPixels";
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
        .content { background: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
        .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none; }
        h1 { margin: 0; font-size: 24px; }
        h2 { color: #f97316; font-size: 18px; margin-top: 24px; }
        p { margin: 16px 0; }
        .step { display: flex; gap: 16px; margin: 20px 0; }
        .step-number { background: #fff7ed; color: #f97316; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Your Next Steps</h1>
        </div>
        <div class="content">
          <p>Hi ${lead.name},</p>
          <p>Thanks for your interest in working with MelonPixels! Here&apos;s how we&apos;ll move forward together:</p>
          
          <h2>The Process</h2>
          <div class="step">
            <div class="step-number">1</div>
            <div><strong>Discovery Call</strong> - We&apos;ll schedule a 30-minute call to understand your goals, audience, and timeline.</div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div><strong>Proposal</strong> - Within 3 business days, you&apos;ll receive a detailed proposal with pricing and timeline.</div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div><strong>Kickoff</strong> - Once approved, we&apos;ll start with a kickoff meeting and begin design within days.</div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div><strong>Delivery</strong> - Most landing pages ship within 2-3 weeks.</div>
          </div>
          
          <p>If you have any questions before our call, feel free to reply to this email.</p>
          <p>We look forward to working with you!</p>
        </div>
        <div class="footer">
          <p>MelonPixels - Web Agency Philippines</p>
          <p>Nuvali, Laguna | Manila, Philippines</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
Hi ${lead.name},

Thanks for your interest in working with MelonPixels! Here's how we'll move forward together:

The Process:
1. Discovery Call - We'll schedule a 30-minute call to understand your goals, audience, and timeline.
2. Proposal - Within 3 business days, you'll receive a detailed proposal with pricing and timeline.
3. Kickoff - Once approved, we'll start with a kickoff meeting and begin design within days.
4. Delivery - Most landing pages ship within 2-3 weeks.

If you have any questions before our call, feel free to reply to this email.

We look forward to working with you!

MelonPixels - Web Agency Philippines
Nuvali, Laguna | Manila, Philippines
  `;

  return sendEmail({
    to: lead.email,
    subject,
    html: htmlContent,
    text: textContent,
  });
}

async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
  text: string;
}): Promise<{ success: boolean; error?: string }> {
  const config = getConfig();

  if (!config) {
    console.warn("[Email] Cannot send email - not configured");
    return { success: false, error: "Email not configured" };
  }

  if (config.provider === "console") {
    console.log("[Email] Would send email:", {
      to: params.to,
      subject: params.subject,
    });
    return { success: true };
  }

  try {
    if (config.provider === "sendgrid" && config.apiKey) {
      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: params.to }] }],
          from: { email: config.fromEmail, name: config.fromName },
          subject: params.subject,
          content: [
            { type: "text/plain", value: params.text },
            { type: "text/html", value: params.html },
          ],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => "");
        console.error("[SendGrid] Error:", errorText);
        return { success: false, error: `SendGrid error: ${response.status}` };
      }

      return { success: true };
    }

    if (config.provider === "mailgun" && config.apiKey) {
      const domain = process.env.MAILGUN_DOMAIN;
      if (!domain) {
        return { success: false, error: "MAILGUN_DOMAIN not set" };
      }

      const formData = new FormData();
      formData.append("from", `${config.fromName} <${config.fromEmail}>`);
      formData.append("to", params.to);
      formData.append("subject", params.subject);
      formData.append("text", params.text);
      formData.append("html", params.html);

      const response = await fetch(
        `https://api.mailgun.net/v3/${domain}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(`api:${config.apiKey}`)}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("[Mailgun] Error:", errorData);
        return { success: false, error: `Mailgun error: ${response.status}` };
      }

      return { success: true };
    }

    return { success: false, error: "Unknown email provider" };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[Email] Exception:", message);
    return { success: false, error: message };
  }
}

export async function sendAutomatedEmails(
  lead: LeadData
): Promise<{
  confirmation: { success: boolean; error?: string };
  nextSteps: { success: boolean; error?: string };
}> {
  const [confirmation, nextSteps] = await Promise.all([
    sendConfirmationEmail(lead),
    sendNextStepsEmail(lead),
  ]);

  return { confirmation, nextSteps };
}
