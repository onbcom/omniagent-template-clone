# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Selector:** `[data-framer-name="Testimonials"]`
- **Interaction model:** static (no interaction, scrolling marquee optional)

## DOM Structure
```
section (bg: #F4F8FF, padding: 70px 20px 40px, flex col, gap: 47px)
  ├── div.header (flex row, gap: 47px)
  │   ├── div.text-container (flex col, gap: 8px)
  │   │   ├── h2: "Teams trust Omni SDR"
  │   │   └── p: subtitle
  │   └── button: "Get Started" (blue pill)
  └── div.cards-container (maxWidth: 1150px, padding: 0 5px, flex row, gap: 47px)
      ├── TestimonialCard 1 (363px × 652px)
      ├── TestimonialCard 2 (364px × 652px)
      └── TestimonialCard 3 (363px × 652px)
```

### TestimonialCard Structure
```
div.card (bg: white, borderRadius: 20px, padding: 10px, flex col, gap: 10px)
  ├── div.image-area (borderRadius: ~16px, overflow hidden)
  │   └── img (portrait photo, object-fit cover)
  ├── h5.quote (testimonial text)
  ├── div.person-info
  │   ├── h6.name
  │   └── p.role
  └── div.stars (5 star rating)
```

## Computed Styles (exact values from getComputedStyle)

### Section
- backgroundColor: rgb(244, 248, 255)
- padding: 70px 20px 40px
- width: 1440px
- height: ~963px
- display: flex
- flexDirection: column
- gap: 47px

### Section Heading
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(24, 34, 48)
- lineHeight: 45.12px
- letterSpacing: -0.752px

### Section Subtitle
- fontSize: 16px
- fontWeight: 500
- color: rgb(71, 84, 103)
- lineHeight: 25.6px
- letterSpacing: -0.32px
- Text: "Real results—from startups to enterprises—showing that smarter automation not only pays for itself but drives lasting growth."

### "Get Started" Button
- backgroundColor: rgb(21, 94, 239)
- borderRadius: 1000px
- height: 36px
- padding: 4px 4px 4px 12px
- text: fontSize 16px, fontWeight 600, color white

### Cards Container
- maxWidth: 1150px
- padding: 0px 5px
- display: flex
- gap: 47px
- flexDirection: row

### Testimonial Card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 20px
- padding: 10px
- width: ~363px
- height: 652px
- display: flex
- gap: 10px
- flexDirection: column

### Quote Text
- fontSize: 22.6px
- fontWeight: 500
- color: rgb(12, 17, 29)
- lineHeight: 31.64px
- letterSpacing: -0.452px

### Person Name
- fontSize: 20px
- fontWeight: 600
- color: rgb(12, 17, 29)
- lineHeight: 26px
- letterSpacing: -0.4px

### Person Role
- fontSize: 16px
- fontWeight: 500
- color: rgb(52, 64, 84)
- lineHeight: 25.6px
- letterSpacing: -0.32px

## Testimonial Data

### Card 1
- Image: `public/images/person-man-suit.jpg`
- Quote: "Switching from manual outreach to Omni SDR was like upgrading from a bicycle to a bullet train. My team now books meetings while we sleep!"
- Name: "James R."
- Role: "Founder of LeadFlow"

### Card 2
- Image: `public/images/person-woman-smiling.jpg`
- Quote: "What used to take me an entire week is now done before my coffee gets cold. Omni SDR is a no-brainer."
- Name: "Samantha K."
- Role: "Growth Lead at BrightWave"

### Card 3
- Image: `public/images/person-man-glasses.jpg`
- Quote: "Before Omni SDR, my inbox was chaos. Now, AI handles the follow-ups and I only talk to people ready to buy."
- Name: "Daniel Ming"
- Role: "Account Executive at FinEdge"

## States & Behaviors
- Static layout, no interaction within cards
- Light background, not dark

## Assets
- `public/images/person-man-suit.jpg`
- `public/images/person-woman-smiling.jpg`
- `public/images/person-man-glasses.jpg`

## Responsive Behavior
- Desktop: 3 cards side by side
- Mobile: stack vertically or horizontal scroll
