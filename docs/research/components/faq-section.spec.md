# FAQSection Specification

## Overview
- **Target file:** `src/components/FAQSection.tsx`
- **Selector:** `[data-framer-name="FAQs"]`
- **Interaction model:** accordion (click to expand/collapse)

## DOM Structure
```
section (bg: #F4F8FF)
  └── div.faqs-wrapper (width: 1200px)
      └── div.desktop (bg: #F4F8FF, padding: 100px 60px, flex col, gap: 52px)
          ├── div.text (flex col, gap: 6px)
          │   ├── h2: "Your questions, answered."
          │   └── p: subtitle
          └── div.accordion-wrap (width: 800px, flex col, gap: 8px)
              ├── div.faq-item (bg: white, borderRadius: 12px, padding: 20px 25px)
              │   ├── div.heading-wrap (flex row, justify between)
              │   │   ├── h6.question: "How does Omni SDR Work?"
              │   │   └── div.toggle-icon (+/- icon)
              │   └── div.answer (hidden when collapsed)
              │       └── p: answer text
              ├── div.faq-item ...
              ├── div.faq-item ...
              ├── div.faq-item ...
              ├── div.faq-item ...
              └── div.faq-item ...
```

## Computed Styles (exact values from getComputedStyle)

### Section Wrapper
- backgroundColor: rgb(244, 248, 255)
- width: 1440px
- height: ~790px
- display: flex
- flexDirection: row
- gap: 47px

### Inner FAQs Container
- width: 1200px

### Desktop Layout
- backgroundColor: rgb(244, 248, 255)
- padding: 100px 60px
- width: 1200px
- display: flex
- flexDirection: column
- gap: 52px

### Text Container
- display: flex
- flexDirection: column
- gap: 6px
- width: 1080px

### Heading
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(12, 17, 29)
- lineHeight: 45.12px
- letterSpacing: -0.752px
- maxWidth: 600px

### Subtitle
- fontSize: 16px
- fontWeight: 500
- color: rgb(71, 84, 103)
- lineHeight: 25.6px
- letterSpacing: -0.32px
- maxWidth: 600px
- Text: "Find quick answers to common queries about our services, process, and how we can help you achieve your goals."

### Accordion Wrap
- width: 800px
- display: flex
- flexDirection: column
- gap: 8px

### FAQ Item (Closed)
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 12px
- padding: 20px 25px
- width: 800px
- height: 66px
- display: flex
- flexDirection: column
- gap: 13px

### Question Text
- fontSize: 20px
- fontWeight: 500
- color: rgb(12, 17, 29)
- lineHeight: 26px
- letterSpacing: -0.4px

### Heading Wrap
- display: flex
- flexDirection: row
- gap: 0px (space-between)
- width: 750px
- height: 26px

## FAQ Data (verbatim)

### 1. How does Omni SDR Work?
"Omni SDR uses advanced AI to automate your entire outbound sales process. It identifies high-fit prospects using real-time signals, crafts hyper-personalized emails and follow-ups, and books meetings directly on your team's calendar—all without manual effort."

### 2. How does it learn our ICP and messaging?
"During onboarding, Omni SDR ingests your ideal customer profile, past outreach data, CRM records, and brand voice guidelines. It then continuously refines its targeting and messaging based on engagement signals like opens, replies, and booked meetings."

### 3. How much control do we keep?
"You maintain full control over messaging templates, target lists, sending schedules, and approval workflows. You can run Omni SDR in 'approve-to-send' mode or let it operate autonomously—switching anytime as your comfort level grows."

### 4. What does it integrate with?
"Omni SDR integrates seamlessly with major CRMs (Salesforce, HubSpot), calendar tools (Google Calendar, Outlook), communication platforms (Slack, Teams), and enrichment providers—ensuring data flows without manual imports."

### 5. How are deliverability & compliance handled?
"We employ domain warming, inbox rotation, send-rate throttling, and real-time reputation monitoring. Every message passes through spam-score checks before sending, and we support GDPR/CAN-SPAM opt-out handling out of the box."

### 6. How fast can we go live and how is success measured?
"Most teams are fully operational within one week. Success is tracked through a live dashboard covering open rates, reply rates, meetings booked, pipeline generated, and ROI—so you always know exactly what Omni SDR is delivering."

## States & Behaviors
- Click question to expand/collapse answer
- Toggle icon rotates (+/- or chevron)
- Only one item open at a time (accordion behavior)
- Smooth height transition on expand/collapse

## Responsive Behavior
- Desktop: 800px accordion width
- Mobile: full width, smaller padding
