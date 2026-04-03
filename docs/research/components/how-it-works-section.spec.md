# HowItWorksSection Specification

## Overview
- **Target file:** `src/components/HowItWorksSection.tsx`
- **Selector:** `[data-framer-name="How it works"]`
- **Interaction model:** click-driven tab switching with sticky container

## DOM Structure
```
section (bg: #F4F8FF, padding-top: 60px, flex col center)
  └── div.sticky-container (sticky, padding-top: 30px, flex col center, gap: 27px)
      ├── div.heading (maxWidth: 1150px, padding: 0 20px, flex col center, gap: 13px)
      │   └── h3: "Omni SDR prospects, personalizes, and books meetings—automatically."
      └── div.step-content (maxWidth: 1150px, flex col center, gap: 38px)
          ├── div.tab-switcher (white pill, borderRadius: 132.95px, padding: 0 20px, height: 62px)
          │   ├── div.active-indicator (blue, borderRadius: 140px, width: 98px, height: 42px)
          │   └── div.tab-row (borderRadius: 117.31px, padding: 10px, flex row)
          │       ├── "Prospect" (white text when active)
          │       ├── "Personalise" (dark text when inactive)
          │       └── "Book" (dark text when inactive)
          └── div.card (white bg, borderRadius: 20px, padding: 0 40px 24px, width: 350px)
              ├── div.icon-area (185px tall)
              ├── h5: "Find qualified leads"
              └── p: "AI pulls fresh contacts..."
```

## Computed Styles (exact values from getComputedStyle)

### Section
- backgroundColor: rgb(244, 248, 255)
- padding: 60px 0px 0px
- width: 1440px
- display: flex
- flexDirection: column
- justifyContent: flex-start
- alignItems: center

### Sticky Container
- position: sticky
- padding: 30px 0px 0px
- width: 1440px
- height: ~751px
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
- gap: 27px
- overflow: clip

### Heading
- fontSize: 32.6px
- fontWeight: 600
- color: rgb(12, 17, 29)
- lineHeight: 39.12px
- letterSpacing: -0.652px
- maxWidth: 600px

### Tab Switcher (Outer Pill)
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 132.95px
- padding: 0px 20px
- width: ~349px
- height: 62px

### Active Tab Indicator
- backgroundColor: rgb(21, 94, 239)
- borderRadius: 140px
- width: 98px
- height: 42px

### Tab Text (Active)
- fontSize: 16px
- fontWeight: 600
- color: rgb(255, 255, 255)
- lineHeight: 25.6px
- letterSpacing: -0.32px

### Tab Text (Inactive)
- fontSize: 16px
- fontWeight: 600
- color: rgb(25, 26, 28)
- lineHeight: 25.6px
- letterSpacing: -0.32px

### Step Card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 20px
- padding: 0px 40px 24px
- width: 350px
- height: ~333px

### Card Title
- fontSize: 22.6px
- fontWeight: 700
- color: rgb(12, 17, 29)
- lineHeight: 31.64px
- letterSpacing: -0.452px

### Card Description
- fontSize: 16px
- fontWeight: 500
- color: rgb(71, 84, 103)
- lineHeight: 25.6px
- letterSpacing: -0.32px

## Tab Content Data

### Prospect (Step 1)
- Title: "Find qualified leads"
- Description: "AI pulls fresh contacts that match your ICP and enriches them with live firmographic data."

### Personalise (Step 2)
- Title: "Craft tailored messages"
- Description: "Each touchpoint references the prospect's role, recent news, and tech stack—so it reads like a human wrote it."

### Book (Step 3)
- Title: "Auto-book meetings"
- Description: "Omni SDR handles objections, follows up at the perfect time, and drops confirmed calls straight into your calendar."

## States & Behaviors
- Click tab to switch step content
- Sticky container stays fixed while scrolling
- Blue indicator slides to active tab position
- Only one tab active at a time

## Assets
- Icon images for each step card (abstract illustrations)

## Responsive Behavior
- Desktop: centered layout, 350px card
- Mobile: full-width card, tabs shrink
