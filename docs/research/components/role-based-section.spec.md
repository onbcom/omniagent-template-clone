# RoleBasedSection Specification

## Overview
- **Target file:** `src/components/RoleBasedSection.tsx`
- **Selector:** `[data-framer-name="Role Based Outcomes"]`
- **Interaction model:** click-driven tab switching

## DOM Structure
```
section (bg: #101828, full-width, flex col center)
  └── div.inner (1200px, borderRadius: 40px, bg: #F4F8FF, flex row center, gap: 47px)
      └── div.content (bg: #101828, padding: 70px 20px, flex col center, gap: 47px)
          ├── div.header (maxWidth: 1150px, flex col, gap: 47px)
          │   ├── div.text-container (flex col, gap: 8px)
          │   │   ├── h2: "How Omni Agent drives growth for every role"
          │   │   └── div.tabs (flex row, gap: 0)
          │   │       ├── Tab: "Sales Development (SDRs)" — selected (blue bg)
          │   │       ├── Tab: "Founders & Startups" — unselected
          │   │       ├── Tab: "Account Executives" — unselected
          │   │       ├── Tab: "Marketing Teams" — unselected
          │   │       └── Tab: "RevOps" — unselected
          │   └── div.image-container (1100px × 579px, borderRadius: 20px)
          │       └── Composite mockup image
          └── div.text-content (flex col)
              ├── h3: "Stop hunting for leads. Start closing them."
              └── p: description text
```

## Computed Styles (exact values from getComputedStyle)

### Section Container
- backgroundColor: rgb(16, 24, 40)
- width: 1440px (full width)
- height: ~1116px
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
- overflow: clip
- position: relative

### Inner Rounded Container
- backgroundColor: rgb(244, 248, 255)
- width: 1200px
- maxWidth: 100%
- borderRadius: 40px
- display: flex
- flexDirection: row
- justifyContent: center
- alignItems: center
- gap: 47px
- overflow: clip

### Dark Content Area
- backgroundColor: rgb(16, 24, 40)
- padding: 70px 20px
- width: 1200px
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
- gap: 47px
- overflow: hidden

### Section Heading
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(255, 255, 255)
- lineHeight: 45.12px
- letterSpacing: -0.752px

### Tab (Selected)
- backgroundColor: rgb(21, 94, 239)
- borderRadius: 30px
- padding: 14px 20px
- height: 54px
- display: flex
- gap: 6px

### Tab (Unselected)
- backgroundColor: rgba(255, 255, 255, 0)
- borderRadius: 30px
- padding: 14px 20px
- height: 54px
- display: flex
- gap: 6px

### Tab Text
- fontSize: 20px
- fontWeight: 600
- color: rgb(255, 255, 255)
- lineHeight: 26px
- letterSpacing: -0.4px

### Image Area
- borderRadius: 20px
- width: 1100px
- height: 579px

### Right-Side Heading ("Stop hunting for leads...")
- fontSize: 32.6px
- fontWeight: 700
- color: rgb(255, 255, 255)
- lineHeight: 39.12px
- letterSpacing: -0.652px

### Right-Side Description
- fontSize: 16px
- fontWeight: 500
- color: rgb(255, 255, 255)
- lineHeight: 22.4px
- letterSpacing: -0.32px

## Tab Content Data (per tab)

### SDRs Tab (default)
- Heading: "Stop hunting for leads. Start closing them."
- Description: "Omni Agent automates the entire top-of-funnel by building verified lead lists matching your exact ICP in seconds, not hours. It then crafts personalized outreach at scale based on real-time prospect signals and manages multi-channel follow-ups, nurturing cold leads until they are ready to book a meeting."
- Mockup: "Automated Lead List Building" UI table with names (Edwin Adenike, David Oshodi, Scanning), signals, statuses

### Founders Tab
- Heading: "Scale outreach without scaling headcount."
- Description: Startup-focused text

### Account Executives Tab
- Heading: "Close more. Research less."
- Description: AE-focused text

### Marketing Teams Tab
- Heading: "Align outbound with inbound—automatically."
- Description: Marketing-focused text

### RevOps Tab
- Heading: "One dashboard. Full pipeline visibility."
- Description: RevOps-focused text

## Mockup UI Details (SDRs Tab)
- Table header: Name, Signals, Status
- Row 1: Edwin Adenike | Series A ($12M), Active Category, HubSpot (BuiltWith) | Engaged (green)
- Row 2: David Oshodi | Launch (Product Hunt), Hiring SDRs (LinkedIn) | Synced (blue)
- Row 3: Scanning | — | Pending Sync
- Stats: Opened 90.24%, Replied 32.80%
- Email preview: "Hi [Contact: First Name]..."

## States & Behaviors
- Click tab to switch content
- Only one tab active at a time
- Active tab: blue bg (#155EEF), white text
- Inactive tabs: transparent bg, white text

## Assets
- Use `public/images/dashboard-mockup.png` as fallback for mockup area
- Tab icons: small dot icons in tabs

## Responsive Behavior
- Desktop: full layout as described
- Mobile: tabs stack vertically, content narrows
