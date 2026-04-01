# Client Intake Automation Setup Guide

This guide explains how to set up the automated client onboarding flow for the MelonPixels website.

## Overview

The client intake system provides:

1. **Inquiry Form** - Captures lead information (name, email, phone, company, message)
2. **Notion Integration** - Creates lead records in Notion for tracking
3. **Automated Emails** - Sends confirmation and next-steps emails to leads

## Setup Steps

### 1. Create a Notion Database for Leads

1. Go to [Notion](https://notion.so) and create a new database
2. Add these properties:

| Property | Type | Notes |
|----------|------|-------|
| Name | Title | Primary identifier |
| Email | Email | Lead's email |
| Phone | Phone | Optional |
| Company | Text | Optional |
| Message | Text | Lead's inquiry |
| Source | Select | Options: Website, Referral, Social, Other |
| Submitted At | Date | Auto-set |
| Status | Select | Options: New, Contacted, Qualified, Proposal, Won, Lost |

3. Copy the database ID from the URL:
   `notion.so/{workspace}/{DATABASE_ID}?v=...`

### 2. Create a Notion Integration

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it "MelonPixels Lead Tracker"
4. Select your workspace
5. Under "Capabilities", enable:
   - Read content
   - Insert content
6. Click "Submit"
7. Copy the "Internal Integration Token"

### 3. Connect Notion Integration to Database

1. Open your leads database in Notion
2. Click the "..." menu → "Add connections"
3. Find and select "MelonPixels Lead Tracker"
4. Click "Confirm"

### 4. Set Up Email Service (Optional)

The system works with email disabled (logs to console). To send real emails:

#### Option A: SendGrid

1. Create account at [SendGrid](https://sendgrid.com)
2. Go to Settings → API Keys
3. Create a new API key with "Full Access"
4. Copy the key

#### Option B: Mailgun

1. Create account at [Mailgun](https://www.mailgun.com)
2. Add and verify your domain
3. Go to Settings → API Keys
4. Copy the private API key

### 5. Configure Environment Variables

```bash
# Copy the example file
cp .env.example .env.local

# Edit with your values
nano .env.local
```

Required variables:

```env
# Notion
NOTION_API_KEY=your_integration_token
NOTION_LEADS_DATABASE_ID=database_id_from_url

# Email (use 'console' for testing)
EMAIL_PROVIDER=sendgrid
EMAIL_API_KEY=your_api_key
EMAIL_FROM=noreply@melonpixels.com
EMAIL_FROM_NAME=MelonPixels
```

### 6. Test the Integration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to a page with the inquiry form

3. Submit a test inquiry

4. Check:
   - Console for email logs (if EMAIL_PROVIDER=console)
   - Notion database for new lead
   - Email inbox for confirmation and next-steps emails

## Troubleshooting

### "Notion integration not configured"

- Verify NOTION_API_KEY is set in .env.local
- Verify NOTION_LEADS_DATABASE_ID is set
- Make sure the integration is connected to the database

### "Email integration not configured"

- Verify EMAIL_PROVIDER is set (not empty)
- If using console mode, this is expected behavior
- For real emails, set EMAIL_PROVIDER to sendgrid or mailgun

### Form submission fails

- Check browser console for errors
- Verify the API route is accessible at /api/inquiry
- Check server logs for detailed error messages

## Files Reference

| File | Purpose |
|------|---------|
| `src/components/inquiry/inquiry-form.tsx` | React form component |
| `src/app/api/inquiry/route.ts` | API route handler |
| `src/lib/notion.ts` | Notion API integration |
| `src/lib/email.ts` | Email automation |
| `.env.example` | Environment variable template |

## Security Notes

- Never commit `.env.local` to version control
- The API route validates all input before processing
- API keys are stored server-side only
- Email addresses are only used for lead communication
