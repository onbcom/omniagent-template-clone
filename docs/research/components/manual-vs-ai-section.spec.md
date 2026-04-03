# ManualVsAISection Specification

## Overview
- **Target file:** `src/components/ManualVsAISection.tsx`
- **Source selector:** `[data-framer-name="AI Comparison"]`
- **Interaction model:** interactive (counter animation with "use client")

## DOM Structure
```
section (bg: #F4F8FF, padding: 80px 0 0)
  └── div.heading (width: 700px, flex col center, gap: 9px, padding: 0 10px)
  │   ├── h6: "Manual Chaos → AI Clarity"
  │   └── h2: "Automate your outreach. Reclaim your time."
  └── div.cards (width: 1150px, flex row, gap: 35px, padding: 20px 20px 0)
      ├── div.manual-column (width: 537.5px, flex col, gap: 44px, padding: 30px 0 784px)
      │   ├── div.progress-bar (width: 537.5px, height: 72px)
      │   │   ├── h5: "Manual Process"
      │   │   ├── Counter: "40" (animated)
      │   │   └── p: "Hours"
      │   └── div.steps (10 cards)
      │       └── Step Card × 10 (width: 537.5px, height: 105px each)
      └── div.ai-column (width: 537.5px, flex col, gap: 44px, padding: 30px 0 705px)
          ├── div.progress-bar (width: 537.5px, height: 72px)
          │   ├── h5: "Omni SDR Process"
          │   ├── Counter: "15" (animated)
          │   └── p: "Min"
          └── div.steps (4 cards)
              └── Step Card × 4 (width: 537.5px, height: 105px each)
```

## Computed Styles (exact values from getComputedStyle)

### Section Container
- backgroundColor: rgb(244, 248, 255)
- width: 1440px
- height: 3323.23px (very tall — scroll section)
- padding: 80px 0px 0px
- display: flex
- flexDirection: column

### Heading Area
- width: 700px
- height: 125.234px
- display: flex
- flexDirection: column
- gap: 9px
- alignItems: center
- justifyContent: center
- padding: 0px 10px

### Subheading ("Manual Chaos → AI Clarity")
- tag: H6
- fontSize: 20px
- fontWeight: 500
- color: rgb(24, 34, 48)
- lineHeight: 26px
- letterSpacing: -0.4px

### Main Heading ("Automate your outreach. Reclaim your time.")
- tag: H2
- fontSize: 37.6px
- fontWeight: 700
- color: rgb(24, 34, 48)
- lineHeight: 45.12px
- letterSpacing: -0.752px

### Cards Container
- width: 1150px
- display: flex
- flexDirection: row
- gap: 35px
- padding: 20px 20px 0px

### Each Column (Manual / AI)
- width: 537.5px
- display: flex
- flexDirection: column
- gap: 44px

### Progress Bar Header
- width: 537.5px
- height: 72px
- Contains title, animated counter, unit label

### Column Title ("Manual Process" / "Omni SDR Process")
- fontSize: 22.6px
- fontWeight: 700
- color: rgb(12, 17, 29)
- lineHeight: 31.64px
- letterSpacing: -0.452px

### Counter Number
- Large animated number (40 for Manual, 15 for AI)
- Animates from 0 to final value

### Counter Unit Label ("Hours" / "Min")
- fontSize: 14px
- fontWeight: 700
- color: rgb(12, 17, 29) for Manual, rgb(188, 202, 227) for AI
- lineHeight: 16.8px

### Step Card
- width: 537.5px
- height: 105px
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 12px
- padding: 15px 20px
- display: flex
- flexDirection: column
- gap: 7px
- boxShadow: rgba(130, 155, 189, 0.18) 0px 9px 12px 0px

### Step Title
- fontSize: 16px
- fontWeight: 700
- color: rgb(12, 17, 29)
- lineHeight: 25.6px
- letterSpacing: -0.32px

### Step Description
- fontSize: 14px
- fontWeight: 500
- color: rgb(102, 112, 133)
- lineHeight: 20px

## Text Content (verbatim)

### Manual Process Steps (10):
1. "Build lead spreadsheet" — "Manually gather lead details and meticulously organize them into structured rows and columns in a spreadsheet."
2. "Hunt down valid emails" — "Spend valuable hours researching prospects online and cross-checking databases to find accurate, working email addresses."
3. "Draft cold emails" — "Individually write personalized outreach emails from scratch, hoping to resonate with each recipient."
4. "Schedule batch send" — "Manually configure email campaigns, carefully selecting ideal send times to maximize open rates."
5. "Wait for replies" — "Sit idly and wait, sometimes days, for prospects to slowly respond, creating uncertainty in your pipeline."
6. "Manual follow-ups" — "Regularly revisit the spreadsheet, identify unresponsive leads, and manually craft and send additional follow-up messages."
7. "Qualify prospects on calls" — "Schedule and conduct phone calls individually to determine the genuine interest level and qualification of prospects."
8. "Back-and-forth scheduling" — "Playing the never-ending back and forth with clients to get to get the correct, complete, and readable documents."
9. "Update CRM fields" — "Spend extra hours manually logging interactions, notes, updates, and lead status into your CRM to keep records up-to-date."
10. "Meeting finally confirmed" — "After numerous manual tasks, repeated efforts, and days of waiting, finally confirm the meeting with your prospect."

### Omni SDR Process Steps (4):
1. "Connect your CRM" — "Seamlessly plug your existing CRM into the agent—no setup headaches, no code. Just connect and let the automation begin."
2. "AI scores & personalizes leads" — "Instantly analyzes and ranks your leads based on relevance and buying intent, then tailors outreach to each one—before you even lift a finger."
3. "Smart follow-up launches" — "Outreach never sleeps. Your AI agent sends timely, personalized follow-ups around the clock to maximize response and engagement rates."
4. "Calendar filled—meeting booked" — "Once replies come in, the AI handles scheduling and confirmations—dropping booked meetings directly into your calendar, no back-and-forth."

## States & Behaviors
- Counter animation: Numbers animate from 0 to final value on scroll into view
- Step cards have checkbox-like indicator (unchecked state)
- Progress bar may fill as user scrolls

## Assets
- No image assets needed — all text/cards

## Responsive Behavior
- **Desktop (1440px):** Two columns side by side
- **Tablet/Mobile:** Stacks to single column
