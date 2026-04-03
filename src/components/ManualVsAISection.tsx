"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Counter animation hook                                              */
/* ------------------------------------------------------------------ */

function useCountUp(target: number, duration = 2000): {
  ref: React.RefObject<HTMLDivElement | null>;
  value: number;
} {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}

/* ------------------------------------------------------------------ */
/*  Step data                                                           */
/* ------------------------------------------------------------------ */

interface StepItem {
  readonly number: number;
  readonly title: string;
  readonly description: string;
}

const MANUAL_STEPS: readonly StepItem[] = [
  {
    number: 1,
    title: "Build lead spreadsheet",
    description:
      "Manually gather lead details and meticulously organize them into structured rows and columns in a spreadsheet.",
  },
  {
    number: 2,
    title: "Hunt down valid emails",
    description:
      "Spend valuable hours researching prospects online and cross-checking databases to find accurate, working email addresses.",
  },
  {
    number: 3,
    title: "Draft cold emails",
    description:
      "Individually write personalized outreach emails from scratch, hoping to resonate with each recipient.",
  },
  {
    number: 4,
    title: "Schedule batch send",
    description:
      "Manually configure email campaigns, carefully selecting ideal send times to maximize open rates.",
  },
  {
    number: 5,
    title: "Wait for replies",
    description:
      "Sit idly and wait, sometimes days, for prospects to slowly respond, creating uncertainty in your pipeline.",
  },
  {
    number: 6,
    title: "Manual follow-ups",
    description:
      "Regularly revisit the spreadsheet, identify unresponsive leads, and manually craft and send additional follow-up messages.",
  },
  {
    number: 7,
    title: "Qualify prospects on calls",
    description:
      "Schedule and conduct phone calls individually to determine the genuine interest level and qualification of prospects.",
  },
  {
    number: 8,
    title: "Back-and-forth scheduling",
    description:
      "Playing the never-ending back and forth with clients to get to get the correct, complete, and readable documents.",
  },
  {
    number: 9,
    title: "Update CRM fields",
    description:
      "Spend extra hours manually logging interactions, notes, updates, and lead status into your CRM to keep records up-to-date.",
  },
  {
    number: 10,
    title: "Meeting finally confirmed",
    description:
      "After numerous manual tasks, repeated efforts, and days of waiting, finally confirm the meeting with your prospect.",
  },
];

const AI_STEPS: readonly StepItem[] = [
  {
    number: 1,
    title: "Connect your CRM",
    description:
      "Seamlessly plug your existing CRM into the agent\u2014no setup headaches, no code. Just connect and let the automation begin.",
  },
  {
    number: 2,
    title: "AI scores & personalizes leads",
    description:
      "Instantly analyzes and ranks your leads based on relevance and buying intent, then tailors outreach to each one\u2014before you even lift a finger.",
  },
  {
    number: 3,
    title: "Smart follow-up launches",
    description:
      "Outreach never sleeps. Your AI agent sends timely, personalized follow-ups around the clock to maximize response and engagement rates.",
  },
  {
    number: 4,
    title: "Calendar filled\u2014meeting booked",
    description:
      "Once replies come in, the AI handles scheduling and confirmations\u2014dropping booked meetings directly into your calendar, no back-and-forth.",
  },
];

/* ------------------------------------------------------------------ */
/*  Step Card                                                           */
/* ------------------------------------------------------------------ */

function StepCard({ step }: { readonly step: StepItem }) {
  return (
    <div
      className="flex flex-col bg-white"
      style={{
        width: "100%",
        minHeight: 105,
        borderRadius: "12px",
        padding: "15px 20px",
        gap: "7px",
        boxShadow: "rgba(130, 155, 189, 0.18) 0px 9px 12px 0px",
      }}
    >
      <p
        style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "rgb(12, 17, 29)",
          lineHeight: "25.6px",
          letterSpacing: "-0.32px",
          margin: 0,
        }}
      >
        {step.number}. {step.title}
      </p>
      <p
        style={{
          fontSize: "14px",
          fontWeight: 500,
          color: "rgb(102, 112, 133)",
          lineHeight: "20px",
          margin: 0,
        }}
      >
        {step.description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Progress Header                                                     */
/* ------------------------------------------------------------------ */

function ProgressHeader({
  title,
  targetValue,
  unit,
  isAI,
}: {
  readonly title: string;
  readonly targetValue: number;
  readonly unit: string;
  readonly isAI: boolean;
}) {
  const { ref, value } = useCountUp(targetValue);

  return (
    <div
      ref={ref}
      className="flex w-full items-center justify-between"
      style={{ height: 72 }}
    >
      <h5
        style={{
          fontSize: "22.6px",
          fontWeight: 700,
          color: "rgb(12, 17, 29)",
          lineHeight: "31.64px",
          letterSpacing: "-0.452px",
          margin: 0,
        }}
      >
        {title}
      </h5>

      <div className="flex items-baseline gap-1.5">
        <span
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: isAI ? "#155EEF" : "rgb(12, 17, 29)",
            lineHeight: "1",
            letterSpacing: "-1px",
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: isAI
              ? "rgb(188, 202, 227)"
              : "rgb(12, 17, 29)",
            lineHeight: "16.8px",
          }}
        >
          {unit}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export default function ManualVsAISection() {
  return (
    <section
      className="flex w-full flex-col items-center bg-[#F4F8FF]"
      style={{ paddingTop: 80 }}
    >
      {/* Heading */}
      <div
        className="flex flex-col items-center justify-center"
        style={{
          maxWidth: 700,
          gap: "9px",
          padding: "0px 10px",
        }}
      >
        <h6
          style={{
            fontSize: "20px",
            fontWeight: 500,
            color: "rgb(24, 34, 48)",
            lineHeight: "26px",
            letterSpacing: "-0.4px",
            margin: 0,
            textAlign: "center",
          }}
        >
          Manual Chaos &rarr; AI Clarity
        </h6>
        <h2
          style={{
            fontSize: "37.6px",
            fontWeight: 700,
            color: "rgb(24, 34, 48)",
            lineHeight: "45.12px",
            letterSpacing: "-0.752px",
            margin: 0,
            textAlign: "center",
          }}
        >
          Automate your outreach. Reclaim your time.
        </h2>
      </div>

      {/* Two columns */}
      <div
        className="flex w-full max-w-[1150px] flex-col gap-8 px-5 pt-5 md:flex-row"
        style={{ gap: "35px", padding: "20px 20px 0px" }}
      >
        {/* Manual Process Column */}
        <div
          className="flex flex-1 flex-col"
          style={{ gap: "20px", paddingTop: 30 }}
        >
          <ProgressHeader
            title="Manual Process"
            targetValue={40}
            unit="Hours"
            isAI={false}
          />
          <div className="flex flex-col" style={{ gap: "12px" }}>
            {MANUAL_STEPS.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>

        {/* Omni SDR Process Column */}
        <div
          className="flex flex-1 flex-col"
          style={{ gap: "20px", paddingTop: 30 }}
        >
          <ProgressHeader
            title="Omni SDR Process"
            targetValue={15}
            unit="Min"
            isAI={true}
          />
          <div className="flex flex-col" style={{ gap: "12px" }}>
            {AI_STEPS.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
