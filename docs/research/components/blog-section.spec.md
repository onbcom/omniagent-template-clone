# BlogSection Specification

## Overview
- **Target file:** `src/components/BlogSection.tsx`
- **Selector:** `[data-framer-name="Blog"]`
- **Interaction model:** static

## DOM Structure
```
section (bg: #F4F8FF, padding: 70px 15px 0px, flex col)
  ├── div.header (flex row, gap)
  │   ├── div.text (flex col)
  │   │   ├── h2: "Blog"
  │   │   └── p: "Ideas, how-tos, and product updates"
  │   └── button: "Read the blog" (blue pill)
  └── div.cards-grid (2-column layout)
      ├── div.featured-card (large, spans left column)
      │   ├── div.image-area (blog-featured.png)
      │   │   └── span.read-time: "min read" (pill overlay)
      │   ├── span.category: "Agent Use Cases" (blue text)
      │   ├── h3: "How Customer Support Agents Can Cut Response Times by 60%"
      │   ├── p: description
      │   └── div.author
      │       ├── img.avatar (blog-author.jpg)
      │       ├── span.name: "Adam Guild"
      │       └── span.date: "Aug 9, 2025"
      └── div.small-cards (right column, 3 stacked)
          ├── SmallBlogCard 1
          ├── SmallBlogCard 2
          └── SmallBlogCard 3
```

### SmallBlogCard Structure
```
div.card (flex row)
  ├── div.image (thumbnail)
  │   └── span.read-time: "min read"
  ├── div.text
  │   ├── span.category (blue text)
  │   ├── h2.title
  │   └── span.date
```

## Computed Styles (exact values from getComputedStyle)

### Section
- backgroundColor: rgb(244, 248, 255)
- padding: 70px 15px 0px
- width: 1440px
- height: ~956px
- display: flex
- flexDirection: column

### Section Heading "Blog"
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(0, 0, 0)
- lineHeight: 45.12px
- letterSpacing: -0.752px

### Subtitle
- fontSize: 16px
- fontWeight: 500
- color: rgb(71, 84, 103)
- lineHeight: 25.6px
- letterSpacing: -0.32px

### "Read the blog" Button
- backgroundColor: rgb(21, 94, 239)
- borderRadius: 1000px
- height: 36px
- text: fontSize 16px, fontWeight 600, color white

### Category Tag
- fontSize: 11px
- fontWeight: 600
- color: rgb(21, 94, 239)
- lineHeight: 17.6px

### Featured Card Title
- fontSize: 32.6px
- fontWeight: 600
- color: rgb(25, 26, 28)
- lineHeight: 39.12px
- letterSpacing: -0.652px

### Featured Card Description
- fontSize: 16px
- fontWeight: 500
- color: rgb(24, 34, 48)
- lineHeight: 25.6px
- letterSpacing: -0.32px

### Author Name
- fontSize: 16px
- fontWeight: 500
- color: rgb(25, 26, 28)
- lineHeight: 25.6px

### Date
- fontSize: 16px (featured) / 13px (small cards)
- fontWeight: 500
- color: rgb(24, 34, 48) / rgb(71, 84, 103)
- lineHeight: 25.6px / 21.75px

### Small Card Title
- fontSize: 19px
- fontWeight: 600
- color: rgb(12, 17, 29)
- lineHeight: 24.4px
- letterSpacing: -0.4px

### "min read" Badge
- fontSize: 14px
- fontWeight: 500
- color: rgb(255, 255, 255)
- lineHeight: 20px
- positioned as overlay on image

## Blog Data

### Featured Article
- Image: `public/images/blog-featured.png`
- Category: "Agent Use Cases"
- Title: "How Customer Support Agents Can Cut Response Times by 60%"
- Description: "Discover how AI-powered customer support agents can automate ticket triage, provide instant answers, and dramatically reduce average handling times without compromising service quality."
- Author: "Adam Guild"
- Author Image: `public/images/blog-author.jpg`
- Date: "Aug 9, 2025"

### Small Card 1
- Image: `public/images/blog-thumb-1.jpg`
- Category: "Agent Use Cases"
- Title: "Using AI Sales Agents to Boost Lead Conversion Rates"
- Date: "Aug 9, 2025"

### Small Card 2
- Image: `public/images/blog-thumb-2.png`
- Category: "Automation Tips"
- Title: "5 Automation Workflows Every Business Should Implement in 2025"
- Date: "Aug 9, 2025"

### Small Card 3
- Image: `public/images/blog-thumb-3.jpg`
- Category: "Automation Tips"
- Title: "How to Integrate AI Agents with Your Existing Tools"
- Date: "Aug 7, 2025"

## States & Behaviors
- Static layout, no interaction
- Cards may link to individual blog post pages

## Assets
- `public/images/blog-featured.png`
- `public/images/blog-author.jpg`
- `public/images/blog-thumb-1.jpg`
- `public/images/blog-thumb-2.png`
- `public/images/blog-thumb-3.jpg`

## Responsive Behavior
- Desktop: 2-column layout, featured on left, 3 small on right
- Mobile: single column, all stacked
