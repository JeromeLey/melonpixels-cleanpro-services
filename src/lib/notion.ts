interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source?: string;
  submittedAt: string;
}

interface NotionConfig {
  apiKey: string;
  databaseId: string;
}

const getConfig = (): NotionConfig | null => {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_LEADS_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return null;
  }

  return { apiKey, databaseId };
};

export async function createLeadInNotion(lead: LeadData): Promise<{ success: boolean; id?: string; error?: string }> {
  const config = getConfig();

  if (!config) {
    console.warn("[Notion] Missing configuration: NOTION_API_KEY or NOTION_LEADS_DATABASE_ID not set");
    return { success: false, error: "Notion integration not configured" };
  }

  try {
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: config.databaseId },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: lead.name,
                },
              },
            ],
          },
          Email: {
            email: lead.email,
          },
          Phone: {
            phone_number: lead.phone || null,
          },
          Company: {
            rich_text: [
              {
                text: {
                  content: lead.company || "",
                },
              },
            ],
          },
          Message: {
            rich_text: [
              {
                text: {
                  content: lead.message,
                },
              },
            ],
          },
          Source: {
            select: {
              name: lead.source || "Website",
            },
          },
          "Submitted At": {
            date: {
              start: lead.submittedAt,
            },
          },
          Status: {
            select: {
              name: "New",
            },
          },
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("[Notion] Failed to create lead:", errorData);
      return { success: false, error: `Notion API error: ${response.status}` };
    }

    const data = await response.json();
    return { success: true, id: data.id };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[Notion] Exception creating lead:", message);
    return { success: false, error: message };
  }
}
