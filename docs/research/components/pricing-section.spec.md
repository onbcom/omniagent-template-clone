# PricingSection Specification

## Overview
- **Target file:** `src/components/PricingSection.tsx`
- **Selector:** `[data-framer-name="Pricing"]`
- **Interaction model:** Monthly/Yearly toggle (click-driven)

## DOM Structure
```
section (bg: #F4F8FF, flex row)
  └── div.pricing-container (maxWidth: 1150px, borderRadius: 50px, padding: 40px 0, flex col, gap: 43px)
      ├── div.heading: "Simple, Transparent Pricing You Can Trust"
      ├── div.toggle (bg: #D1E0FF, borderRadius: 50px, width: 275px, height: 62px, flex row)
      │   ├── div.monthly-tab (borderRadius: 30px, width: 129px, height: 51px)
      │   │   └── "Monthly"
      │   └── div.yearly-tab (borderRadius: 30px, width: 129px, height: 51px)
      │       └── "Yearly"
      └── div.cards-row (bg: #F4F8FF, borderRadius: 20px, padding: 20px, flex row, gap: 23px)
          ├── div.starter-card (bg: white, borderRadius: 20px, width: 543.5px)
          │   ├── h3: "Starter"
          │   ├── h2 + h6: "$199" + "/month"
          │   ├── div.features (flex col, gap: 13px)
          │   │   └── 5 feature rows (check icon + text)
          │   └── button: "Get Started" (light bg pill)
          └── div.professional-card (gradient bg, borderRadius: 20px, width: 543.5px)
              ├── h3: "Professional"
              ├── h2 + h6: "$299" + "/month"
              ├── div.features (flex col, gap: 13px)
              │   └── 5 feature rows (check icon + text)
              └── button: "Get Started" (blue pill, white text)
```

## Computed Styles (exact values from getComputedStyle)

### Section
- backgroundColor: rgb(244, 248, 255)
- width: 1440px

### Pricing Container
- borderRadius: 50px
- padding: 40px 0px
- width: 1150px
- display: flex
- flexDirection: column
- gap: 43px

### Heading "Simple, Transparent Pricing"
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(102, 112, 133)
- lineHeight: 45.12px
- letterSpacing: -0.752px

### Heading "You Can Trust"
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(0, 0, 0)
- lineHeight: 45.12px
- letterSpacing: -0.752px

### Toggle Container
- backgroundColor: rgb(209, 224, 255)
- borderRadius: 50px
- width: 275px
- height: 62px
- display: flex
- flexDirection: row

### Toggle Tab Text
- fontSize: 20px
- fontWeight: 700
- color: rgb(23, 23, 23)
- lineHeight: 28px
- letterSpacing: -0.4px

### Cards Row
- backgroundColor: rgb(244, 248, 255)
- borderRadius: 20px
- padding: 20px
- width: 1150px
- display: flex
- gap: 23px
- flexDirection: row

### Starter Card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 20px
- width: 543.5px
- height: 531.125px
- Inner padding: 60px top, 50px left
- Content gap: 33px between title/price area and features

### Starter Card Title
- fontSize: 32.6px
- fontWeight: 600
- color: rgb(24, 34, 48)
- lineHeight: 39.12px
- letterSpacing: -0.652px

### Starter Card Price
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(0, 0, 0)
- lineHeight: 45.12px
- letterSpacing: -0.752px

### Starter "/month"
- fontSize: 20px
- fontWeight: 700
- color: rgb(23, 23, 23)
- lineHeight: 28px

### Starter Features Text
- fontSize: 16px
- fontWeight: 500
- color: rgb(12, 17, 29)
- lineHeight: 25.6px
- letterSpacing: -0.32px

### Starter Button
- backgroundColor: rgb(244, 248, 255)
- borderRadius: 1000px
- height: 52px
- text color: rgb(16, 24, 40)
- fontSize: 16px, fontWeight: 600

### Professional Card
- background: linear-gradient(rgb(56, 62, 81) 0%, rgb(2, 12, 29) 100%)
- borderRadius: 20px
- width: 543.5px
- height: 531.125px

### Professional Card Title
- fontSize: 32.6px
- fontWeight: 600
- color: rgb(255, 255, 255)
- lineHeight: 39.12px

### Professional Card Price
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(255, 255, 255)
- lineHeight: 45.12px

### Professional Features Text
- fontSize: 16px
- fontWeight: 500
- color: rgb(223, 229, 240)
- lineHeight: 25.6px

### Professional Button
- backgroundColor: rgb(21, 94, 239)
- borderRadius: 1000px
- height: 52px
- text: white, fontSize: 16px, fontWeight: 600

## Feature Lists

### Starter
1. Engage up to 2,000 contacts per month using 1 agent
2. Email + SMS outreach
3. Core AI personalization & follow-ups
4. Team collaboration (2 seats)
5. Basic analytics dashboard

### Professional
1. Engage up to 2,000 contacts per month using 5 agent
2. Email + SMS outreach
3. Core AI personalization & follow-ups
4. Team collaboration (2 seats)
5. Basic analytics dashboard

## Check Icon
- width: 20px, height: 20px
- Inner icon: 13px × 9px
- Color: matches text color (dark for Starter, light for Professional)

## States & Behaviors
- Monthly/Yearly toggle switches pricing display
- Active toggle has highlight indicator
- Prices may change on yearly toggle

## Responsive Behavior
- Desktop: 2 cards side by side
- Mobile: stacked vertically
