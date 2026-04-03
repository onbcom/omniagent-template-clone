# SignalResponseSection Specification

## Overview
- **Target file:** `src/components/SignalResponseSection.tsx`
- **Source selector:** `[data-framer-name="Signal Response"]`
- **Interaction model:** static

## DOM Structure
```
section (bg: #F4F8FF, flex row center)
  └── div.container (maxWidth: 1150px, padding: 25px 20px 50px, flex col, gap: 36px)
      └── div.desktop-card (width: 1110px, height: 500px, bg: white, borderRadius: 20px, overflow: hidden, flex row)
          ├── div.left-column (width: 421px, flex col)
          │   ├── div.text-container (width: 421px, padding: ~40px)
          │   │   ├── h2: "Sees every signal. Responds in seconds."
          │   │   └── p: subtitle text
          │   └── div.button-container
          │       └── CTA "Get Started" (blue pill + white arrow circle)
          └── div.right-column (width: ~503px, position: relative)
              ├── div.background-image (man sitting at laptop, borderRadius: 20px)
              └── div.activity-card (absolute, overlapping)
                  ├── Header: "Omni Agent" + "Auto-Reply is On" toggle
                  ├── Activity feed items (scrolling list):
                  │   ├── "Meeting scheduled" / "3:00 PM Tomorrow"
                  │   ├── "Lead status updated" / "Marked as Contacted"
                  │   ├── "Follow-up email sent" / "Re: Project Proposal"
                  │   ├── "Task assigned" / "SDR notified for follow-up"
                  │   ├── "Content personalized" / "Proposal customized for Acme Inc."
                  │   └── "CRM sync complete" / "Data pushed to Salesforce"
                  └── div.rules-section
                      ├── "Rules" label
                      ├── "Only reply to ICP" (checked)
                      ├── "Office hours 9-5" (checked)
                      └── "Escalate if pricing asked" (unchecked)
```

## Computed Styles (exact values from getComputedStyle)

### Section Container
- backgroundColor: rgb(244, 248, 255)
- width: 1440px
- height: 575px
- display: flex
- flexDirection: row
- justifyContent: center
- alignItems: center
- overflow: hidden

### Inner Container
- backgroundColor: rgb(244, 248, 255)
- padding: 25px 20px 50px
- width: 1150px
- maxWidth: 1150px
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: flex-start
- gap: 36px

### Desktop Card
- width: 1110px
- height: 500px
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 20px
- display: flex
- position: relative
- overflow: hidden

### Left Column (Text + CTA)
- width: 421px
- Text Container: width: 421px, height: 175px

### Heading ("Sees every signal. Responds in seconds.")
- tag: H2
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(24, 34, 48)
- lineHeight: 45.12px
- letterSpacing: -0.752px

### Subtitle
- fontSize: 16px
- fontWeight: 500
- color: rgb(71, 84, 103)
- lineHeight: 25.6px
- letterSpacing: -0.32px

### CTA Button
- width: 136.578px
- height: 36px
- BG: backgroundColor: rgb(21, 94, 239), borderRadius: 1000px
- Label: fontSize: 16px, fontWeight: 600, color: white, letterSpacing: -0.32px
- Arrow circle: bg white, borderRadius: 50%, width: 28px, height: 28px

### Right Column
- width: ~503px
- height: 390px
- borderRadius: 20px
- position: relative

### Background Image (Man sitting at phone)
- width: 794px (overflows container, clipped)
- height: 363.375px
- position: absolute, left: -94px, top: -0.375px
- Source: person-man-glasses.jpg or person-man-suit.jpg from public/images/

### Activity Card Overlay (Variant 3)
- width: 310px
- height: 306px
- position: absolute, left: -48px, top: 116px

### Activity Feed Item Styles
- Title: fontSize: 12.4px, fontWeight: 600, color: rgb(25, 26, 28)
- Subtitle: fontSize: 12.4px, fontWeight: 500, color: rgb(102, 112, 133)
- Each item: width: ~234px, height: 68px

### Agent Header
- "Omni Agent": fontSize: 15px, fontWeight: 500, color: rgb(23, 23, 23)
- "Auto-Reply is On": fontSize: 12.4px, fontWeight: 500, color: white (on blue bg)

### Rules Pills
- "Rules" label: fontSize: 9px, fontWeight: 500, color: rgb(0, 0, 0)
- Rule items: fontSize: 11px, fontWeight: 500, color: rgb(0, 0, 0)

## Text Content (verbatim)
- Heading: "Sees every signal. Responds in seconds."
- Subtitle: "Omni SDR watches email opens, link clicks, form fills, and LinkedIn replies—then follows up instantly with context-aware messages, turning interest into meetings."
- CTA: "Get Started"
- Agent header: "Omni Agent"
- Toggle: "Auto-Reply is On"
- Activity items: Meeting scheduled / 3:00 PM Tomorrow, Lead status updated / Marked as Contacted, Follow-up email sent / Re: Project Proposal, Task assigned / SDR notified for follow-up, Content personalized / Proposal customized for Acme Inc., CRM sync complete / Data pushed to Salesforce
- Rules: "Only reply to ICP", "Office hours 9-5", "Escalate if pricing asked"

## Assets
- Background image: `public/images/person-man-suit.jpg` (man at laptop)
- Signal icon: `public/images/signal-icon.png`
- Omni icon: `public/images/omni-icon-small.png`

## States & Behaviors
- Static section
- All elements at opacity: 1

## Responsive Behavior
- **Desktop (1440px):** Two-column layout within card
- **Tablet/Mobile:** Stacks vertically
