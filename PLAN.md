# PLAN: Lead Magnet - Free Website Requirements Checklist

## Objective
Create a working lead magnet system that captures email addresses and delivers the website checklist to Filipino SME owners.

## Scope Boundaries
- Email capture form with validation
- Client-side storage for email submissions
- Checklist delivery after email capture
- Success state showing the checklist content

## Out of Scope
- Email service provider integration (ConvertKit/Mailchimp) - would require API keys
- Actual PDF file generation - using HTML checklist instead
- Email newsletter automation - future enhancement

## Acceptance Criteria

### Given a visitor lands on the lead magnet page, When they submit their email, Then:
1. Email validation runs (must be valid email format)
2. Email is stored in localStorage
3. Success state displays with the checklist content
4. Checklist is viewable directly on the page

### Given a visitor submits an email, When the form is submitted, Then:
1. Loading state shows during submission
2. Error messages display if submission fails
3. Success shows checklist view

## Technical Approach

### Email Collection Strategy
- Client-side localStorage storage in browser
- Key: `melonpixels_subscribers`
- Validates email format before storing
- Handles duplicate emails gracefully

### PDF Checklist Delivery
- Convert HTML design (`docs/website-checklist-lead-magnet-v2.html`) into React component
- Display full checklist on success state
- Make sections expandable/collapsible for better UX

### File Structure
```
launch-site-starter/
├── src/app/
│   └── lead-magnet/
│       └── page.tsx              # Landing page with subscription state
├── src/components/lead-magnet/
│   ├── email-capture.tsx          # Email capture with localStorage
│   ├── checklist-display.tsx     # Full checklist component
│   ├── lead-magnet-hero.tsx      # Hero section (pre-existing)
│   ├── checklist-preview.tsx     # Preview section (pre-existing)
│   └── trust-badges.tsx          # Trust badges (pre-existing)
```

## Verification Approach
1. Build the Next.js app: `npm run build`
2. Static pages generated for `/lead-magnet`
3. TypeScript compilation successful
4. No console errors in source