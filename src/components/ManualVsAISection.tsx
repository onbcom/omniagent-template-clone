"use client";

import { useEffect, useRef, useState } from "react";

interface Step {
  title: string;
  description: string;
}

const manualSteps: Step[] = [
  {
    title: "Build lead spreadsheet",
    description:
      "Manually gather lead details and meticulously organize them into structured rows and columns in a spreadsheet.",
  },
  {
    title: "Hunt down valid emails",
    description:
      "Spend valuable hours researching prospects online and cross-checking databases to find accurate, working email addresses.",
  },
  {
    title: "Draft cold emails",
    description:
      "Individually write personalized outreach emails from scratch, hoping to resonate with each recipient.",
  },
  {
    title: "Schedule batch send",
    description:
      "Manually configure email campaigns, carefully selecting ideal send times to maximize open rates.",
  },
  {
    title: "Wait for replies",
    description:
      "Sit idly and wait, sometimes days, for prospects to slowly respond, creating uncertainty in your pipeline.",
  },
  {
    title: "Manual follow-ups",
    description:
      "Regularly revisit the spreadsheet, identify unresponsive leads, and manually craft and send additional follow-up messages.",
  },
  {
    title: "Qualify prospects on calls",
    description:
      "Schedule and conduct phone calls individually to determine the genuine interest level and qualification of prospects.",
  },
  {
    title: "Back-and-forth scheduling",
    description:
      "Playing the never-ending back and forth with clients to get to get the correct, complete, and readable documents.",
  },
  {
    title: "Update CRM fields",
    description:
      "Spend extra hours manually logging interactions, notes, updates, and lead status into your CRM to keep records up-to-date.",
  },
  {
    title: "Meeting finally confirmed",
    description:
      "After numerous manual tasks, repeated efforts, and days of waiting, finally confirm the meeting with your prospect.",
  },
];

const aiSteps: Step[] = [
  {
    title: "Connect your CRM",
    description:
      "Seamlessly plug your existing CRM into the agent\u2014no setup headaches, no code. Just connect and let the automation begin.",
  },
  {
    title: "AI scores & personalizes leads",
    description:
      "Instantly analyzes and ranks your leads based on relevance and buying intent, then tailors outreach to each one\u2014before you even lift a finger.",
  },
  {
    title: "Smart follow-up launches",
    description:
      "Outreach never sleeps. Your AI agent sends timely, personalized follow-ups around the clock to maximize response and engagement rates.",
  },
  {
    title: "Calendar filled\u2014meeting booked",
    description:
      "Once replies come in, the AI handles scheduling and confirmations\u2014dropping booked meetings directly into your calendar, no back-and-forth.",
  },
];

function useCountUp(target: number, duration: number, trigger: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      if (current !== start) {
        start = current;
        setCount(current);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [target, duration, trigger]);

  return count;
}

function useInView(): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

function StepItem({
  step,
  index,
  variant,
}: {
  step: Step;
  index: number;
  variant: "manual" | "ai";
}) {
  const borderColor = variant === "manual" ? "border-l-red-400" : "border-l-[#155EEF]";
  const numberBg = variant === "manual" ? "bg-gray-200 text-gray-600" : "bg-[#155EEF] text-white";

  return (
    <div
      className={`flex gap-3 rounded-lg border border-[#E4E7EC] bg-white p-4 border-l-[3px] ${borderColor}`}
    >
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${numberBg}`}
      >
        {index + 1}
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-base font-semibold leading-snug text-[#0C111D]">
          {step.title}
        </h4>
        <p className="text-sm leading-relaxed text-[#475467]">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ManualVsAISection() {
  const [sectionRef, isInView] = useInView();
  const hoursCount = useCountUp(40, 2000, isInView);
  const minutesCount = useCountUp(15, 2000, isInView);

  return (
    <section
      id="ai-comparison"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="w-full bg-white py-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0C111D] sm:text-4xl">
            Manual Chaos &rarr; AI Clarity
          </h2>
          <p className="mt-3 text-lg text-[#475467]">
            Automate your outreach. Reclaim your time.
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Manual Process Column */}
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#0C111D]">
                Manual Process
              </h3>
              <div className="rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
                {hoursCount} Hours
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {manualSteps.map((step, i) => (
                <StepItem key={i} step={step} index={i} variant="manual" />
              ))}
            </div>
          </div>

          {/* AI Process Column */}
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#0C111D]">
                Omni SDR Process
              </h3>
              <div className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-[#155EEF]">
                {minutesCount} Min
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {aiSteps.map((step, i) => (
                <StepItem key={i} step={step} index={i} variant="ai" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
