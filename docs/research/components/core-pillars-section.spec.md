# CorePillarsSection Specification

## Overview
- **Target file:** `src/components/CorePillarsSection.tsx`
- **Source selector:** `[data-framer-name="Foundation Grid"]`
- **Interaction model:** static

## DOM Structure
```
section (bg: #F4F8FF, padding: 60px 0)
  └── div.grid-container (display: grid, gridTemplateColumns: repeat(3, 1fr), gap: 20px, maxWidth: 1150px, padding: 60px 20px 70px)
      ├── div.title-cell (1 cell in the 3-col grid)
      │   └── div.title (flex col, gap: 30px, padding: 10px 0 20px 2px)
      │       ├── CTA "Get Started" (white bg, borderRadius: 1000px)
      │       └── h2: "Core Pillars of Omni SDR"
      ├── Feature Card 1: "Instant Lead Routing"
      ├── Feature Card 2: "Automated Sequences"
      ├── Feature Card 3: "Real-Time Insights"
      ├── Feature Card 4: "Native Integrations"
      └── Feature Card 5: "Enterprise-Grade Security"
```

## Computed Styles (exact values from getComputedStyle)

### Section Container
- backgroundColor: rgb(244, 248, 255)
- width: 1440px
- height: 752px
- padding: 60px 0px
- display: flex
- flexDirection: column
- gap: 47px

### Grid Container
- display: grid
- gridTemplateColumns: 356.664px 356.664px 356.664px (3 equal columns)
- gap: 20px
- width: 1150px
- height: 632px
- padding: 60px 20px 70px

### Title Cell
- width: 356.664px
- height: 186.234px
- padding: 10px 0px 20px 2px
- display: flex
- flexDirection: column
- gap: 30px
- borderRadius: 20px

### CTA Button (white variant)
- width: 136.578px
- height: 36px
- BG: backgroundColor: rgb(255, 255, 255), borderRadius: 1000px
- Label: fontSize: 16px, fontWeight: 600, color: rgb(5, 5, 5), letterSpacing: -0.32px
- Arrow circle out: bg: rgb(21, 94, 239), borderRadius: 50%
- Arrow icon: blue arrow on white circle variant (inverted from other sections)

### Main Heading ("Core Pillars of Omni SDR")
- tag: H2
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(25, 26, 28)
- lineHeight: 45.12px
- letterSpacing: -0.752px

### Feature Card
- width: 356.664px
- height: 241px
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 20px
- padding: 20px 25px
- display: flex
- flexDirection: column

### Card Icon Container
- width: 53px
- height: 53px
- backgroundColor: rgb(244, 248, 255)
- borderRadius: 4px
- Contains SVG icon (20px × 20px, blue color)

### Card Text Container
- display: flex
- flexDirection: column
- gap: 10px

### Card Title
- tag: H6
- fontSize: 20px
- fontWeight: 600
- color: rgb(25, 26, 28)
- lineHeight: 26px
- letterSpacing: -0.4px

### Card Description
- fontSize: 14px
- fontWeight: 500
- color: rgb(71, 84, 103)
- lineHeight: 20px

## Text Content (verbatim)

### Header
- CTA: "Get Started"
- Heading: "Core Pillars of Omni SDR"

### Feature Cards (5 cards):
1. **Instant Lead Routing** — "Routes qualified leads to the right representative in seconds."
2. **Automated Sequences** — "Omnichannel workflows engage prospects 24/7 while reps close."
3. **Real-Time Insights** — "Live metrics show replies and bookings, driving quick optimization."
4. **Native Integrations** — "Bidirectional CRM and Slack sync keeps data clean, actionable."
5. **Enterprise-Grade Security** — "SOC 2-Type II, GDPR-ready—your data stays safe always."

## States & Behaviors
- Static section
- All elements at opacity: 1

## Assets
- Icons are inline SVGs (blue color on light blue bg)
- No external image assets

## Responsive Behavior
- **Desktop (1440px):** 3-column grid (title + 5 cards = 6 cells, 2 rows)
- **Tablet (768px):** 2-column grid
- **Mobile (390px):** Single column
