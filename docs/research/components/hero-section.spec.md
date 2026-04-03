# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/source-hero-section-*.png`
- **Interaction model:** static (no scroll-driven behavior within hero itself)

## DOM Structure
```
section.hero (bg: #F4F8FF, flex column center, position relative, z-index 2)
  └── div.content-wrapper (maxWidth: 1150px, padding: 152px 0 50px, flex col center)
      ├── div.hero-text (flex col center, gap: 16px, padding-bottom: 28px)
      │   ├── div.tagline-pill (bg: white, rounded-full, shadow, padding: 0 20px)
      │   │   └── text: "24/7 AI Sales Agent"
      │   └── div.title-subtitle (maxWidth: 730px, flex col center, gap: 6px)
      │       ├── h1.heading: "Sales Engine that Never [icon] Sleeps"
      │       └── p.subtitle: "Automate prospecting..."
      ├── a.cta-button (150.578px × 52px, blue bg with arrow circle)
      │   └── div.bg (#155EEF) + label "Get Started" + white arrow circle
      └── div.container (1150px × 508px, flex row)
          └── Hero Animation area (activity pills + avatar orbits + processing graphic)
  └── div.backgrounds (absolute, 1440px × 1059px, z-index 1)
      └── Watercolor/gradient background image
```

## Computed Styles (exact values from getComputedStyle)

### Section Container (.framer-1jk0h8b)
- backgroundColor: rgb(244, 248, 255)
- width: 1440px (full width)
- height: 1015.8px
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
- position: relative
- zIndex: 2

### Content Wrapper
- padding: 152px 0px 50px
- width: 1150px
- maxWidth: 1150px
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
- overflow: hidden
- zIndex: 3

### Tagline Pill ("24/7 AI Sales Agent")
- backgroundColor: rgb(255, 255, 255)
- padding: 0px 20px
- height: 34px
- borderRadius: 40px
- boxShadow: rgba(204, 219, 235, 0.11) 0px 0.602187px 0.602187px -0.833333px, rgba(204, 219, 235, 0.11) 0px 2.28853px 2.28853px -1.66667px, rgba(204, 219, 235, 0.11) 0px 10px 10px -2.5px
- display: flex
- alignItems: center
- justifyContent: center
- Text: fontSize: 14px, fontWeight: 600, color: rgb(24, 34, 48), fontFamily: Instrument Sans

### Heading ("Sales Engine that Never Sleeps")
- fontSize: 48px
- fontWeight: 600
- fontFamily: "Instrument Sans", sans-serif
- color: rgb(12, 17, 29)
- lineHeight: 67.2px (1.4)
- letterSpacing: -0.96px
- textAlign: center
- Note: "Never" is in blue (#155EEF) with a chain/link icon between "Never" and "Sleeps"

### Subtitle
- fontSize: 16px
- fontWeight: 500
- fontFamily: "Instrument Sans", sans-serif
- color: rgb(52, 64, 84)
- lineHeight: 22.4px (1.4)
- letterSpacing: -0.32px
- textAlign: center

### CTA Button ("Get Started")
- Width: 150.578px
- Height: 52px
- BG div: backgroundColor: rgb(21, 94, 239), borderRadius: 1000px
- Label: fontSize: 16px, fontWeight: 600, color: rgb(255, 255, 255), letterSpacing: -0.32px
- Arrow circle: backgroundColor: rgb(255, 255, 255), borderRadius: 50%, width: 12px (inner arrow icon)
- Padding: 12px 10px 12px 20px
- Structure: blue pill with text left + white circle arrow right

### Activity Feed Pills (below CTA)
- 4 pills in a row: "Qualified Leads", "Recovered orders", "Scheduled Callbacks", "Generic inquiry emails"
- Each pill: fontSize: 14px, fontWeight: 600, color: rgb(25, 26, 28)
- Green dot indicator before first 3 pills, red/strikethrough for last one ("Generic inquiry emails")
- Layout: flex row with gap

### Hero Animation Container
- Width: 1150px
- Height: 508px
- Contains: orbiting avatar images around a central "Processing" indicator
- 8 avatar images (139×139px circular) from framerusercontent.com (already downloaded as avatar-1..8.png)
- Center: circular processing graphic with concentric circles + "Processing" label
- Processing graphic: `/images/hero-circle-graphic.png` (1440×1440) + `/images/omni-icon-large.png`

### Backgrounds Layer (absolute positioned)
- Width: 1440px
- Height: 1059px
- Position: absolute
- Bottom: -43.2px
- zIndex: 1
- Contains: watercolor/gradient background image (blue wash effect)
- Image: `/images/hero-watercolor-bg.png` (already downloaded)

## States & Behaviors
- No scroll-driven animations within the hero
- All elements start at opacity: 1 (confirmed from BEHAVIORS.md)
- The avatar orbiting is a CSS/JS animation but can be static for the clone

## Assets
- Background watercolor: `public/images/hero-watercolor-bg.png`
- Processing circle: `public/images/hero-circle-graphic.png`
- Omni icon: `public/images/omni-icon-large.png`
- Avatars: `public/images/avatar-1.png` through `public/images/avatar-8.png` (139×139 each)
- Logo: `public/images/omni-logo.png`

## Text Content (verbatim)
- Tagline: "24/7 AI Sales Agent"
- Heading: "Sales Engine that Never Sleeps" (with "Never" in blue #155EEF)
- Subtitle: "Automate prospecting, personalize outreach, and book 5× more meetings—before your competition even logs in."
- CTA: "Get Started"
- Pills: "Qualified Leads", "Recovered orders", "Scheduled Callbacks", "Generic inquiry emails" (last one strikethrough)

## Responsive Behavior
- **Desktop (1440px):** Full width, maxWidth 1150px content, 48px heading
- **Tablet (768px):** Content narrows, heading likely scales down
- **Mobile (390px):** Single column, heading likely ~32px, pills stack
- **Breakpoint:** ~768px
