# ROICalculatorSection Specification

## Overview
- **Target file:** `src/components/ROICalculatorSection.tsx`
- **Source selector:** `[data-framer-name="ROI Calculator"]`
- **Interaction model:** interactive (slider, toggle — "use client") but simplified static mockup

## DOM Structure
```
section (bg: #F4F8FF, padding: 60px 0 40px, flex col center)
  └── div.calculator-card (embedded Framer component)
      ├── div.header
      │   ├── div.toggle ("Per Rep" / "Team")
      │   └── h2: "Omni Agent — Prospecting & Outreach"
      ├── div.body (two-column)
      │   ├── div.left-inputs
      │   │   ├── label: "Weekly prospecting time (in hours)"
      │   │   ├── div.slider-row (−, value: 30, +)
      │   │   ├── div.result-card "Prospecting Automation"
      │   │   │   ├── description
      │   │   │   ├── value: "$115.9K"
      │   │   │   └── note: "≈ 120 days saved/yr"
      │   │   ├── div.result-card "Scheduling & Admin"
      │   │   │   ├── description
      │   │   │   ├── value: "$29.0K"
      │   │   │   └── note: "≈ 30 days saved/yr"
      │   │   └── link: "Advanced inputs"
      │   └── div.right-results
      │       ├── div.hero-stat
      │       │   ├── label: "Your team can save"
      │       │   ├── value: "$144.9K"
      │       │   └── label: "per year"
      │       ├── p: "In three years, for 5 SDRs and $35/hr wages,"
      │       ├── div.stats-grid
      │       │   ├── Payback period: "1.3 Months"
      │       │   ├── ROI: "900%"
      │       │   ├── Net Savings: "$215.5K"
      │       │   └── Tool Cost (yr): "$23.9K"
      │       └── button: "Download Report"
```

## Computed Styles (exact values from getComputedStyle)

### Section Container
- backgroundColor: rgb(244, 248, 255)
- width: 1440px
- height: 1185px
- padding: 60px 0px 40px
- display: flex
- flexDirection: column
- gap: 47px

### Calculator Card (embedded Framer component)
- This is an embedded interactive component from Framer
- Rendered as a simplified static mockup for the clone

### Header
- Toggle "Per Rep" / "Team": pill toggle buttons
- Title: "Omni Agent — Prospecting & Outreach"
  - fontSize: 32px
  - fontWeight: 600
  - color: rgb(15, 23, 42)
  - lineHeight: 32px
  - letterSpacing: -0.96px

### Input Label
- "Weekly prospecting time (in hours)"
  - fontSize: 15px
  - fontWeight: 500
  - color: rgb(15, 23, 42)
  - lineHeight: 19.5px
  - letterSpacing: -0.15px

### Slider Controls
- Minus button, value display (30), Plus button
- Horizontal slider track

### Result Cards
- "Prospecting Automation" — "$115.9K" — "≈ 120 days saved/yr"
- "Scheduling & Admin" — "$29.0K" — "≈ 30 days saved/yr"
- Description + info icon

### Right Panel Summary
- "Your team can save" heading
- "$144.9K" large value
- "per year" label
- "In three years, for 5 SDRs and $35/hr wages,"
  - fontSize: 15px, fontWeight: 500, color: rgb(15, 23, 42)

### Stats Grid
- Payback period: "1.3 Months"
- ROI: "900%"
- Net Savings: "$215.5K"
- Tool Cost (yr): "$23.9K"

### Download Button
- "Download Report" button

## Text Content (verbatim)
- Toggle options: "Per Rep", "Team"
- Title: "Omni Agent — Prospecting & Outreach"
- Input label: "Weekly prospecting time (in hours)"
- Slider value: 30
- Result 1: "Prospecting Automation" / "Reduced time researching leads and drafting personalized outreach." / "$115.9K" / "≈ 120 days saved/yr"
- Result 2: "Scheduling & Admin" / "Reduced time scheduling meetings, updating CRM, and follow-ups." / "$29.0K" / "≈ 30 days saved/yr"
- Link: "Advanced inputs"
- Summary: "Your team can save" / "$144.9K" / "per year"
- Context: "In three years, for 5 SDRs and $35/hr wages,"
- Stats: Payback period: "1.3 Months", ROI: "900%", Net Savings: "$215.5K", Tool Cost (yr): "$23.9K"
- CTA: "Download Report"

## States & Behaviors
- This is an embedded Framer component — built as simplified static mockup
- Toggle between "Per Rep" and "Team" views
- Slider adjusts hours value
- Results update based on inputs (in real version)
- For clone: render static default state with all values shown

## Assets
- ROI badge: `public/images/roi-badge.png`

## Responsive Behavior
- **Desktop (1440px):** Two-column layout (inputs left, results right)
- **Tablet/Mobile:** Stacks vertically
