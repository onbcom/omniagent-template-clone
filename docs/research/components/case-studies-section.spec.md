# CaseStudiesSection Specification

## Overview
- **Target file:** `src/components/CaseStudiesSection.tsx`
- **Selector:** `[data-framer-name="Case Studies"]` (1440px wide standalone section)
- **Interaction model:** horizontal carousel with navigation buttons

## DOM Structure
```
section (bg: #F4F8FF, padding: 70px 20px, flex col, gap: 47px)
  ├── div.header (maxWidth: 1150px, padding: 0 20px, flex row, gap: 47px)
  │   ├── div.text-container (flex col, gap: 8px)
  │   │   ├── h2: "Case Studies"
  │   │   └── p: "See how leading teams use Omni SDR..."
  │   └── button: "See all case studies" (blue pill)
  └── div.slideshow-container (maxWidth: 1150px, padding: 0 20px)
      └── div.slideshow (1110px, overflow visible)
          └── div.case-study-card (1110px, flex col, gap: 20px)
              ├── div.card (white bg, borderRadius: 20px, 1110px × ~443px, flex row)
              │   ├── div.image (404px × 443px, borderRadius: 20px)
              │   │   └── img (portrait photo)
              │   └── div.content (flex col)
              │       ├── div.person-info (name + role)
              │       ├── h4.quote (testimonial text)
              │       └── div.stats (2 stat blocks)
              └── div.buttons (flex row, gap: ~)
                  ├── button: "See Michael's Story" (light bg pill)
                  ├── button: "See Sarah's Story"
                  └── button: "See Lisa's Story"
```

## Computed Styles (exact values from getComputedStyle)

### Section
- backgroundColor: rgb(244, 248, 255)
- padding: 70px 20px
- width: 1440px
- display: flex
- flexDirection: column
- gap: 47px

### Section Heading
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(24, 34, 48)
- lineHeight: 45.12px

### Section Subtitle
- fontSize: 16px
- fontWeight: 500
- color: rgb(71, 84, 103)
- lineHeight: 25.6px

### "See all case studies" Button
- backgroundColor: rgb(21, 94, 239)
- borderRadius: 1000px
- height: 36px
- padding: 4px 4px 4px 12px
- text: fontSize 16px, fontWeight 600, color white

### Card Container
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 20px
- width: 1110px
- height: ~443px
- display: flex
- flexDirection: row
- overflow: hidden

### Portrait Image
- width: 404px
- height: ~443px
- borderRadius: 20px
- objectFit: cover

### Person Name
- fontSize: 20px
- fontWeight: 600
- color: rgb(255, 255, 255)
- lineHeight: 26px

### Person Role
- fontSize: 16px
- fontWeight: 500
- color: rgb(255, 255, 255)
- lineHeight: 22.4px

### Quote Text
- fontSize: 27.6px
- fontWeight: 500
- color: rgb(12, 17, 29)
- lineHeight: 38.64px

### Stat Number
- fontSize: 32.6px
- fontWeight: 600
- color: rgb(12, 17, 29)
- lineHeight: 39.12px

### Stat Label
- fontSize: 16px
- fontWeight: 500
- color: rgb(52, 64, 84)
- lineHeight: 25.6px

### "See [Name]'s Story" Button
- backgroundColor: rgb(244, 248, 255)
- borderRadius: 1000px
- height: 36px
- padding: 4px 4px 4px 16px
- text: fontSize 16px, fontWeight 600, color: rgb(24, 34, 48)

## Case Study Data

### Card 1: Michael Rodriguez
- Image: `public/images/flower-lilac.jpg` (portrait, left side with dark overlay for name)
- Name: "Michael Rodriguez"
- Role: "Head of Sales, FlowForge"
- Quote: "The SDR agent handled our outreach like a seasoned rep. The personalization was spot on—messages felt natural and tailored. Prospects actually replied thinking it was a real person."
- Stat 1: "3×" — "More meetings booked weekly"
- Stat 2: "75%" — "Reduction in manual outreach"
- Button: "See Michael's Story"

### Card 2: Sarah Davis
- Image: `public/images/flower-purple.jpg`
- Name: "Sarah Davis"
- Role: "Growth Lead, Beaconly"
- Quote: "We don't have a huge sales team, so Omni SDR was like hiring 3 reps overnight. It learns fast, personalizes well, and doesn't miss follow-ups. Our inbound and outbound are now in sync."
- Stat 1: "4×" — "Increase in Responses"
- Stat 2: "2 x" — "ROI-positive (2 Weeks)"
- Button: "See Sarah's Story"

### Card 3: Lisa Raymond
- Image: `public/images/flower-yellow.jpg`
- Name: "Lisa Raymond"
- Role: "Sales Director, NovaShift"
- Quote: "I was skeptical at first, but Omni SDR proved me wrong fast. We had cold leads turning warm in days, and our CRM stayed organized without any of us touching it. It just runs."
- Stat 1: "60%" — "Boost in cold lead conversions"
- Stat 2: "90" — "Hours saved every month"
- Button: "See Lisa's Story"

## States & Behaviors
- Horizontal carousel: one card visible at a time
- Navigation via prev/next arrows or story buttons
- Smooth horizontal scroll/transition between cards

## Assets
- `public/images/flower-lilac.jpg` (Michael)
- `public/images/flower-purple.jpg` (Sarah)
- `public/images/flower-yellow.jpg` (Lisa)

## Responsive Behavior
- Desktop: 1110px card width
- Mobile: stacks vertically, image on top
