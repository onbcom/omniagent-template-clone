# TrustedBySection Specification

## Overview
- **Target file:** `src/components/TrustedBySection.tsx`
- **Source selector:** `[data-framer-name="Trusted By"]`
- **Interaction model:** static (logo ticker is animated in source but rendered static here)

## DOM Structure
```
section (bg: #F4F8FF, padding: 31px 0 28px, flex row center)
  └── div.main-container (maxWidth: 1150px, padding: 0 20px, flex row center, gap: 45px)
      └── div.container (bg: white, borderRadius: 20px, padding: 20px 50px, flex row center, gap: 45px)
          ├── div.text-area (width: 344.25px)
          │   └── h5: "Fueling growth for innovative teams worldwide"
          ├── div.divider (width: 2px, height: 54px, bg: #F4F8FF, opacity: 0.38)
          └── div.logos-area (width: ~574px, height: 100px)
              └── Scrolling logo ticker / static logo bar image
```

## Computed Styles (exact values from getComputedStyle)

### Section Container
- backgroundColor: rgb(244, 248, 255)
- width: 1440px (full width)
- height: 199px
- padding: 31px 0px 28px
- display: flex
- flexDirection: row
- justifyContent: center
- alignItems: center
- gap: 47px
- overflow: hidden
- position: relative

### Main Container
- padding: 0px 20px
- width: 1150px
- maxWidth: 1150px
- display: flex
- flexDirection: row
- justifyContent: center
- alignItems: center
- gap: 47px

### White Card Container
- backgroundColor: rgb(255, 255, 255)
- padding: 20px 50px
- width: 1110px
- height: 140px
- display: flex
- flexDirection: row
- justifyContent: center
- alignItems: center
- gap: 45px
- borderRadius: 20px
- boxShadow: rgba(197, 204, 222, 0.12) 0px 0px 8px 0px
- overflow: hidden

### Heading Text ("Fueling growth for innovative teams worldwide")
- tag: H5
- fontSize: 20px
- fontWeight: 500
- fontFamily: "Instrument Sans", sans-serif
- color: rgb(24, 34, 48)
- lineHeight: 26px
- letterSpacing: -0.4px
- textAlign: start
- width: 344.25px

### Divider
- width: 2px
- height: 54px
- backgroundColor: rgb(244, 248, 255)
- opacity: 0.38

### Logos Area (Ticker/Brands section)
- width: 573.75px
- height: 100px
- Contains a scrolling ticker of brand logos (rendered as static image)

## Text Content (verbatim)
- Heading: "Fueling growth for innovative teams worldwide"

## Assets
- Logo ticker image: Source uses a Framer ticker component with brand logos
- Since we don't have individual brand logos, render as a placeholder logo bar with grayscale generic logos or use a static representation

## States & Behaviors
- Static section
- Logo ticker scrolls horizontally in source but can be static in clone
- All elements at opacity: 1 (except divider at 0.38)

## Responsive Behavior
- **Desktop (1440px):** Horizontal layout with text | divider | logos
- **Tablet/Mobile:** Likely stacks vertically, text above logos
