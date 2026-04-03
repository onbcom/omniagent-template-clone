# Behaviors — Omni Agent

## Global Behaviors

### Lenis Smooth Scroll
- `.lenis` class detected on HTML element
- All scroll is intercepted by Lenis for smooth inertia scrolling
- Must install `lenis` package and initialize in layout

### No Section Fade-In Animations
- All 50 top-level `[data-framer-name]` elements start at opacity: 1
- Zero elements start at opacity: 0
- DO NOT add scroll-reveal/fade-up animations — they don't exist in the source

### Active Animations During Scroll
- 1-2 Web Animations API entries active at all times
- These are Lenis transform updates and possibly a testimonial marquee
- 154,003 style mutations during full-page scroll (from Lenis updating transforms)

## Navbar Behavior
- **Position:** fixed, starts off-screen (top: -65px)
- **Trigger:** Appears on scroll (likely after hero section)
- **Background:** Transparent initially, white with backdrop-blur on scroll
- **Border:** Gains border-bottom on scroll
- Must extract exact scroll trigger threshold

## Manual vs AI Section (Counter Animations)
- Counter elements animate from 0 to target number
- Must check for dual-element pattern (opacity:0 overlay + position:absolute number display)
- Triggered by IntersectionObserver when section enters viewport

## Agent Suite / Role-Based / Pricing (Tab Switching)
- Click-driven tab switching
- Content changes per active tab
- Must extract content for ALL tab states

## Case Studies (Carousel)
- Horizontal scroll/carousel with navigation arrows
- Multiple cards visible at once
- Click-driven navigation (prev/next buttons)

## FAQ (Accordion)
- Click to expand/collapse
- Only one item open at a time (or multiple — must verify)
- Animated height transition

## How It Works Section
- Contains a sticky container (position: sticky)
- Tab-driven content switching: Prospect, Personalize, Book
- Sticky sidebar with scrolling content panels (must verify scroll vs click model)
