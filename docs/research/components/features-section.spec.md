# FeaturesSection Specification

## Overview
- **Target file:** `src/components/FeaturesSection.tsx`
- **Screenshot:** `docs/design-references/source-features-section-*.png`
- **Interaction model:** static

## DOM Structure
```
section (bg: #F4F8FF)
  └── div.container (maxWidth: 1150px, flex col, gap: 36px, padding: 25px 20px 50px)
      ├── div.header-row (flex row, gap: 47px, 1110px × 104px)
      │   ├── div.text-container (648px)
      │   │   ├── h2: "Built for enterprise scale and trust"
      │   │   └── p: subtitle
      │   └── div.button-container
      │       └── CTA "Get Started" (blue pill + white arrow)
      └── div.cards-grid (display: grid, 1110px × 933px, gap: 27px)
          ├── Card: "5X Meetings" (541.5px × 453px) — calendar booking mockup
          ├── Card: ">1M Scale" (541.5px × 453px) — network diagram
          ├── Card: "Integrations" (541.5px × 453px) — integration icons
          └── Card: "Enterprise-Grade" (541.5px × 453px) — gauge/speedometer
```

## Computed Styles (exact values from getComputedStyle)

### Section
- backgroundColor: rgb(244, 248, 255)

### Container
- maxWidth: 1150px
- width: 1150px
- display: flex
- flexDirection: column
- gap: 36px
- padding: 25px 20px 50px

### Header Row
- display: flex
- flexDirection: row
- gap: 47px
- width: 1110px

### Heading ("Built for enterprise scale and trust")
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(24, 34, 48)
- lineHeight: 45.12px
- letterSpacing: -0.752px

### Subtitle
- fontSize: 16px
- fontWeight: 500
- color: rgb(71, 84, 103)
- lineHeight: 25.6px
- letterSpacing: -0.32px

### CTA Button
- bg: rgb(21, 94, 239), borderRadius: 1000px, height: 36px
- Label: fontSize: 16px, fontWeight: 600, color: white
- Arrow circle: bg white, borderRadius: 50%

### Cards Grid
- display: grid
- gridTemplateColumns: repeat(2, 1fr) — 2 columns
- gap: 27px
- width: 1110px

### Each Card
- width: 541.5px
- height: 453px
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 20px
- padding: 0px 0px 30px
- boxShadow: rgba(157, 186, 227, 0.08) 0px 9px 12px 0px
- display: flex
- flexDirection: column
- gap: 16px

### Card Title Text
- fontSize: ~24px (need to verify per card)
- fontWeight: 600-700
- color: rgb(12, 17, 29)

### Card Body Text
- fontSize: 16px
- fontWeight: 500
- color: rgb(71, 84, 103)
- lineHeight: 25.6px

## Per-Card Content

### Card 1: "Calendar Booking on Autopilot" (top-left)
- Top area: "5x" stat with concentric circle animation + meeting cards mockup
  - "5x" text: large blue stat
  - Meeting mockup with "Discovery Call", "30 Min Meeting" tabs (Agenda/KPI/QnA)
  - Two meeting entries: Alec Whitten (9:30 am) and Lyle Kaufman (9:30 am)
- Bottom: heading "Calendar Booking on Autopilot"
- Body: "Schedules meetings the moment a lead qualifies—often while your team sleeps. Our AI books 5× more demos without human back-and-forth and drops them straight into your calendar."
- Images: avatar images for Alec/Lyle (reuse from `public/images/`)

### Card 2: ">1M Scale" (top-right)
- Top area: ">1M" large stat + network/connection diagram with avatar nodes
- Bottom: heading "Scale That Humans Can't Match"
- Body: "Omni SDR delivers over one million personalized touches each month, engaging prospects at machine speed. Your team can focus entirely on closing deals while outreach runs on autopilot."
- Images: avatar images orbiting in network diagram

### Card 3: "Integrations" (bottom-left)
- Top area: Integration icons grid image
- Bottom: heading "Integrations That Just Work"
- Body: "Seamlessly connect with the tools your team already relies on, without complicated setup or costly delays. Enjoy smooth workflows and instant compatibility from day one."
- Images: `public/images/integration-icons.png`

### Card 4: "Enterprise-Grade Performance" (bottom-right)
- Top area: Gauge/speedometer illustration
- Bottom: heading "Enterprise-Grade Performance"
- Body: "With millisecond-level API calls and elastic scaling, Omni SDR easily handles sudden traffic spikes. Your pipeline remains fast, stable, and reliable—even during peak launch days."
- Images: gauge image from source (check `public/images/`)

## States & Behaviors
- Static section — no animations
- All elements start at opacity: 1

## Assets
- Integration icons: `public/images/integration-icons.png`
- Avatar images: `public/images/avatar-*.png`
- Dashboard mockup: `public/images/dashboard-mockup.png`

## Text Content (verbatim)
Listed in Per-Card Content above.

## Responsive Behavior
- **Desktop (1440px):** 2×2 grid, cards 541.5px each, 27px gap
- **Tablet (768px):** Likely stacks to 1 column
- **Mobile (390px):** Single column, full-width cards
- **Breakpoint:** ~768px
