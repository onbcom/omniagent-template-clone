# CTASection Specification

## Overview
- **Target file:** `src/components/CTASection.tsx`
- **Selector:** `[data-framer-name="CTA"]`
- **Interaction model:** static

## DOM Structure
```
section (bg: #F4F8FF, padding: 10px 0 29px, flex row)
  └── div.container (bg: #155EEF, borderRadius: 20px, padding: 61px 40px, width: 1110px, position: relative)
      ├── div.content (width: 1030px, flex col)
      │   ├── div.text (flex col)
      │   │   └── h2: "Prospect Smarter. Book Faster."
      │   └── button: "Get Started" (white bg, dark text)
      └── div.image-container (absolute positioned, decorative images)
          └── Abstract decorative images on sides
```

## Computed Styles (exact values from getComputedStyle)

### Section
- backgroundColor: rgb(244, 248, 255)
- padding: 10px 0px 29px
- width: 1440px
- height: ~321px
- display: flex
- flexDirection: row

### Container (Blue Box)
- backgroundColor: rgb(21, 94, 239)
- borderRadius: 20px
- padding: 61px 40px
- width: 1110px
- height: ~282px
- position: relative
- overflow: hidden (implied by clip of decorative elements)

### Heading
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(255, 255, 255)
- lineHeight: 45.12px
- letterSpacing: -0.752px
- Text: "Prospect Smarter. Book Faster."

### "Get Started" Button
- Background: white (#FFFFFF)
- borderRadius: 1000px
- height: 36px
- padding: 4px 4px 4px 12px
- text: fontSize 16px, fontWeight 600, color: rgb(25, 26, 28)
- Width: ~136.578px
- Arrow circle: bg #155EEF (blue), borderRadius: 50%, 12px

### Content Area
- width: 1030px
- height: ~160px

### Image Container (Decorative)
- width: 621px
- height: ~282px
- Position: absolute (right side)

### Abstract Decoration
- width: ~820px
- height: ~874px
- Overflows container (clipped)

## States & Behaviors
- Static section
- No interaction beyond button click
- Decorative images positioned absolutely on sides

## Assets
- `public/images/cta-decoration-left.png`
- `public/images/cta-decoration-right.png`
- These are abstract/watercolor decorative images

## Responsive Behavior
- Desktop: full blue box with decorative side images
- Mobile: decorative images hidden, text centered
