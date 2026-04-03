# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/source-desktop-full-*.png` (top area)
- **Interaction model:** scroll-driven (background changes on scroll)

## DOM Structure
```
nav (fixed, full-width)
  └── div.inner (max-width: 1200px, flex row, space-between)
      ├── a.logo (flex row, gap: 4px) → logo image
      ├── div.links (flex row, gap: 47px) → Home, Pricing, Our Why, Resources
      └── a.cta (flex row) → "Get started" button
```

## Computed Styles (exact values from getComputedStyle)

### Outer Container (.framer-1l1lotj-container)
- position: fixed
- top: 15px
- left: 52px
- right: 52px
- zIndex: 10
- height: 49px
- width: calc(100vw - 104px)

### Nav Inner (.framer-79x4ya)
- display: flex
- flexDirection: row
- justifyContent: space-between
- alignItems: center
- maxWidth: 1200px
- height: 53px
- padding: 10px 20px 10px 10px
- borderRadius: 13px
- overflow: hidden

### Nav Links Container (.framer-p38lyo)
- display: flex
- flexDirection: row
- justifyContent: center
- alignItems: center
- gap: 47px

### Nav Link Text
- fontSize: 14px
- fontWeight: 600
- fontFamily: "Instrument Sans", sans-serif
- color: rgb(52, 64, 84)
- letterSpacing: normal

### CTA Button ("Get started")
- backgroundColor: rgb(21, 94, 239)
- borderRadius: 52px
- padding: 8px 16px
- fontSize: 14px
- fontWeight: 500
- fontFamily: "Instrument Sans", sans-serif
- color: rgb(255, 255, 255)
- letterSpacing: -0.28px

### Logo
- Image: `/images/omni-logo.png` (existing asset)
- Width: ~154px container, logo image ~145px wide
- Height: 33px container

## States & Behaviors

### Scroll-triggered appearance
- **Trigger:** Scroll past hero section (~500-800px)
- **State A (top of page):** 
  - backgroundColor: rgba(255, 255, 255, 0) (transparent)
  - backdropFilter: blur(0px)
  - boxShadow: rgba(123, 130, 156, 0) 0px 4px 4px 0px (no shadow)
  - borderColor: rgba(218, 225, 232, 0) (transparent border)
- **State B (scrolled):** 
  - backgroundColor: rgba(255, 255, 255, 0.66)
  - backdropFilter: blur(26px)
  - boxShadow: rgba(123, 130, 156, 0.17) 0px 4px 4px 0px
  - borderColor: rgba(218, 225, 232, 1)
- **Transition:** CSS transition on all properties
- **Implementation:** useEffect with scroll listener, toggle state when scrollY > 500

### Hover states
- Nav links: N/A (no visible hover change extracted)
- CTA button: likely hover:bg-[#1249cc] (darker blue)

## Per-State Content
N/A — single state (no tab switching)

## Assets
- Logo: `public/images/omni-logo.png` (already downloaded)

## Text Content (verbatim)
- Logo link: goes to homepage
- Nav links: "Home" (#hero), "Pricing" (#pricing), "Our Why" (#ai-comparison), "Resources" (dropdown)
- CTA: "Get started" (links to LemonSqueezy checkout)

## Responsive Behavior
- **Desktop (1440px):** Full nav with links + CTA visible, max-width: 1200px centered
- **Tablet (768px):** Desktop nav hidden (class hidden-xcdfjb detected), mobile nav likely shown
- **Mobile (390px):** Desktop nav hidden, hamburger menu expected
- **Breakpoint:** ~768px
