# AgentsPipelineSection Specification

## Overview
- **Target file:** `src/components/AgentsPipelineSection.tsx`
- **Source selector:** `[data-framer-name="Agent Suite"]`
- **Interaction model:** interactive (tab switching with "use client")

## DOM Structure
```
section (bg: #F4F8FF, flex row center)
  └── div.container (maxWidth: 1150px)
      ├── div.text-container (width: 1010px)
      │   ├── h2: "AI Agents that run your entire sales pipeline"
      │   └── p: subtitle
      ├── div.lead-research-agent (width: 1110px, height: 383px, flex row)
      │   ├── div.tabs (width: 292px, flex col)
      │   │   ├── Tab "Lead Research Agent" (selected, bg: white, borderRadius: 8px)
      │   │   ├── Tab "Outreach Agent"
      │   │   ├── Tab "Qualification Agent"
      │   │   ├── Tab "Meeting Agent"
      │   │   └── Tab "CRM & Insights Agent"
      │   ├── div.left-content (width: ~309px)
      │   │   ├── h5: "AI Lead Research Agent"
      │   │   ├── p: description
      │   │   └── CTA "Get Started" (blue pill + arrow)
      │   └── div.right-visual (width: ~422px)
      │       └── Lead cards with radar graphic
      │           ├── Katherine Harris card (intent: 92/100)
      │           ├── Lauren Bennett card (intent: 89/100)
      │           ├── Daniel Thompson card (intent: 72/100)
      │           └── Katherine Harris card (repeated, intent: 92/100)
      └── div.agent-types (5 collapsed/accordion rows, each 1110px × 220px)
          ├── Agent type 0
          ├── Agent type 1
          ├── Agent type 2
          ├── Agent type 3
          └── Agent type 4-5
```

## Computed Styles (exact values from getComputedStyle)

### Section Container
- backgroundColor: rgb(244, 248, 255)
- width: 1440px
- height: 2189.44px
- display: flex
- flexDirection: row
- gap: 47px

### Inner Container
- backgroundColor: rgb(244, 248, 255)
- width: 1150px

### Text Container (Header)
- width: 1010px
- height: 149.438px

### Main Heading ("AI Agents that run your entire sales pipeline")
- tag: H2
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(24, 34, 48)
- lineHeight: 45.12px
- letterSpacing: -0.752px
- maxWidth: 707px

### Subtitle
- fontSize: 16px
- fontWeight: 500
- color: rgb(71, 84, 103)
- lineHeight: 25.6px
- letterSpacing: -0.32px
- maxWidth: 707px

### Tabs Container
- width: 292.289px
- height: 249px
- display: flex (implied vertical)

### Tab Item (Selected)
- width: 292.289px
- height: 37px
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 8px

### Tab Item (Unselected)
- width: 292.289px
- height: 37px
- backgroundColor: transparent
- borderRadius: 8px

### Tab Text
- fontSize: 14px
- fontWeight: 600
- color: rgb(52, 64, 84)
- lineHeight: 17px

### Content Heading ("AI Lead Research Agent")
- tag: H5
- fontSize: 22.6px
- fontWeight: 700
- color: rgb(0, 0, 0)
- lineHeight: 31.64px
- letterSpacing: -0.452px

### Content Description
- fontSize: 14px
- fontWeight: 500
- color: rgb(71, 84, 103)
- lineHeight: 20px

### CTA Button
- width: 136.578px
- height: 36px
- BG: rgb(21, 94, 239), borderRadius: 1000px
- Label: fontSize: 16px, fontWeight: 600, color: white

### Lead Cards
- Katherine card: width: 231px, height: 91px, bg: white, borderRadius: 11.33px
- Lauren card: width: 216px, height: 86px, bg: white, borderRadius: 10.43px
- Daniel card: width: 228px, height: 90px, bg: white, borderRadius: 10.95px
- Placeholder cards: width: 206px, height: 82px, bg: white, borderRadius: 10.21px

### Lead Card Text
- Name: fontSize: 12px, fontWeight: 600, color: rgb(0, 0, 0)
- Role: fontSize: 9.8px, fontWeight: 500, color: rgb(152, 162, 179)
- Intent Score label: fontSize: 9px, fontWeight: 400, color: rgb(45, 54, 41)
- Intent Score value: fontSize: 9px, fontWeight: 400, color: rgb(45, 54, 41)
- "Added to CRM" badge: fontSize: 8px, fontWeight: 500, color: rgb(45, 54, 41)

### Radar/Logo Orb
- Logo Orb: width: 59px, height: 50px (contains omni icon)
- Radar: width: 288px, height: 307px

### Agent Type Rows (below tabs)
- width: 1110px
- height: 220px each
- 6 total rows

## Text Content (verbatim)

### Header
- Heading: "AI Agents that run your entire sales pipeline"
- Subtitle: "Omni Agent handles every part of the sales process — from finding prospects to closing deals — so you never lose a lead again."

### Tab Labels
1. "Lead Research Agent"
2. "Outreach Agent"
3. "Qualification Agent"
4. "Meeting Agent"
5. "CRM & Insights Agent"

### Lead Research Tab Content
- Heading: "AI Lead Research Agent"
- Description: "Discover new opportunities automatically. Omni Agent scans the web, funding databases, and job signals to find high-potential leads that match your ICP — before your competitors even notice."
- CTA: "Get Started"

### Lead Cards
1. Katherine Harris — VP of Growth at TechFlow — Intent Score: 92/100 — "Added to CRM"
2. Lauren Bennett — Director of Product at Nova Systems — Intent Score: 89/100 — "Added to CRM"
3. Daniel Thompson — Director of Product at Nova Systems — Intent Score: 72/100 — "Added to CRM"

## States & Behaviors
- Tab switching: Click on tab to show corresponding content
- Only Lead Research tab content is fully visible initially
- Other tabs expand to show their content on click

## Assets
- Omni icon: `public/images/omni-icon-small.png`
- Agent icons: `public/images/agent-icon-*.png` (7 icons)
- Person images for lead cards: `public/images/person-*.png`

## Responsive Behavior
- **Desktop (1440px):** Horizontal tabs left + content right
- **Tablet/Mobile:** Stacks to single column, tabs as horizontal scrollable
