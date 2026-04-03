# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Selector:** `[data-framer-name="Footer 1"]`
- **Interaction model:** static (links, subscribe form)

## DOM Structure
```
footer (bg: #F4F8FF, maxWidth: 1150px)
  └── div.footer-inner (padding: 10px 0 20px, flex col)
      ├── div.top-row (flex row, gap between columns)
      │   ├── div.logo-column
      │   │   └── img: omni-logo.png (+ wordmark)
      │   ├── div.nav-column-1
      │   │   ├── p.label: "WHY OMNI AGENT" (uppercase)
      │   │   ├── a: "Pricing"
      │   │   ├── a: "Manual vs AI"
      │   │   └── a: "FAQs"
      │   ├── div.nav-column-2
      │   │   ├── p.label: "RESOURCES" (uppercase)
      │   │   ├── a: "Blog"
      │   │   ├── a: "Case Studies"
      │   │   └── a: "Contact Us"
      │   └── div.subscribe-column
      │       ├── p.label: "SUBSCRIBE FOR UPDATE" (uppercase)
      │       └── div.email-form (flex row)
      │           ├── input (email field)
      │           └── button: "Submit" (blue bg)
      ├── div.divider (border-top line)
      └── div.bottom-row (flex row, justify between)
          ├── p: "© Omni Agent 2025. All rights reserved."
          ├── div.legal-links
          │   ├── a: "Platform Terms"
          │   └── a: "Privacy"
          └── div.social-icons (flex row)
              ├── a.instagram (bg: white, 31×30px)
              ├── a.x (bg: white, 31×30px)
              ├── a.linkedin (bg: white, 31×30px)
              └── a.youtube (bg: white, 31×30px)
```

## Computed Styles (exact values from getComputedStyle)

### Footer Container
- width: 1150px
- height: ~454px
- display: block

### Footer Inner
- backgroundColor: rgb(244, 248, 255)
- padding: 10px 0px 20px
- width: 1150px
- display: flex
- flexDirection: column

### Column Label (WHY OMNI AGENT, RESOURCES, etc.)
- fontSize: 11px
- fontWeight: 600
- color: rgb(71, 84, 103)
- lineHeight: 17.6px
- textTransform: uppercase

### Nav Link Text
- fontSize: 16px
- fontWeight: 500
- color: rgb(24, 34, 48)
- lineHeight: 25.6px
- letterSpacing: -0.32px

### Submit Button
- backgroundColor: rgb(21, 94, 239)
- padding: 12px
- width: 88px
- height: 50px
- display: flex
- flexDirection: row
- text: fontSize 16px, fontWeight 500, color white

### Social Icon Container
- backgroundColor: rgb(255, 255, 255)
- width: 31px
- height: 30px
- display: flex
- flexDirection: row
- borderRadius: ~8px (implied)

### Copyright Text
- fontSize: 14px
- fontWeight: 500
- color: rgb(102, 112, 133)
- lineHeight: 20px

### Legal Link Text
- fontSize: 14px
- fontWeight: 500
- color: rgb(102, 112, 133)
- lineHeight: 20px

## Text Content (verbatim)

### Column 1: WHY OMNI AGENT
- Pricing
- Manual vs AI
- FAQs

### Column 2: RESOURCES
- Blog
- Case Studies
- Contact Us

### Subscribe
- Label: "SUBSCRIBE FOR UPDATE"
- Button: "Submit"

### Bottom Row
- "© Omni Agent 2025.  All rights reserved."
- "Platform Terms"
- "Privacy"

## Social Icons
- Instagram (icon in white circle)
- X / Twitter (icon in white circle)
- LinkedIn (icon in white circle)
- YouTube (icon in white circle)
- Icon sizes: ~15-16px within 31×30px containers

## States & Behaviors
- Static layout
- Links navigate to respective pages
- Subscribe form submits email
- Social icons link to external profiles

## Assets
- Logo: `public/images/omni-logo.png` or `public/images/omni-wordmark.png`
- Social icons: inline SVGs

## Responsive Behavior
- Desktop: 4-column layout
- Mobile: stacks to single column
