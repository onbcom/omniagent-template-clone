import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Shared arrow icon                                                   */
/* ------------------------------------------------------------------ */

function ArrowCircle() {
  return (
    <span className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3.33337 8H12.6667"
          stroke="#155EEF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.66663 4L12.6666 8L8.66663 12"
          stroke="#155EEF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity feed item                                                  */
/* ------------------------------------------------------------------ */

interface ActivityItem {
  readonly title: string;
  readonly subtitle: string;
  readonly iconColor: string;
}

const ACTIVITY_ITEMS: readonly ActivityItem[] = [
  {
    title: "Meeting scheduled",
    subtitle: "3:00 PM Tomorrow",
    iconColor: "#12B76A",
  },
  {
    title: "Lead status updated",
    subtitle: "Marked as Contacted",
    iconColor: "#155EEF",
  },
  {
    title: "Follow-up email sent",
    subtitle: "Re: Project Proposal",
    iconColor: "#F79009",
  },
  {
    title: "Task assigned",
    subtitle: "SDR notified for follow-up",
    iconColor: "#6941C6",
  },
  {
    title: "Content personalized",
    subtitle: "Proposal customized for Acme Inc.",
    iconColor: "#155EEF",
  },
  {
    title: "CRM sync complete",
    subtitle: "Data pushed to Salesforce",
    iconColor: "#12B76A",
  },
];

const RULES: readonly { label: string; checked: boolean }[] = [
  { label: "Only reply to ICP", checked: true },
  { label: "Office hours 9-5", checked: true },
  { label: "Escalate if pricing asked", checked: false },
];

function ActivityFeedCard() {
  return (
    <div
      className="flex flex-col overflow-hidden bg-white"
      style={{
        width: 310,
        borderRadius: "16px",
        boxShadow:
          "rgba(157, 186, 227, 0.15) 0px 8px 24px 0px, rgba(157, 186, 227, 0.08) 0px 2px 8px 0px",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between"
        style={{ padding: "12px 16px 8px" }}
      >
        <div className="flex items-center gap-2">
          <Image
            src="/images/omni-icon-small.png"
            alt="Omni Agent"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "rgb(23, 23, 23)",
              letterSpacing: "-0.3px",
              lineHeight: "19.5px",
            }}
          >
            Omni Agent
          </span>
        </div>
        {/* Auto-Reply toggle */}
        <div
          className="flex items-center gap-1.5 rounded-full"
          style={{
            backgroundColor: "#155EEF",
            padding: "4px 10px",
          }}
        >
          <span
            style={{
              fontSize: "12.4px",
              fontWeight: 500,
              color: "rgb(255, 255, 255)",
              lineHeight: "17.826px",
            }}
          >
            Auto-Reply is On
          </span>
        </div>
      </div>

      {/* Activity feed */}
      <div
        className="flex flex-col"
        style={{ padding: "4px 12px 8px", gap: "4px" }}
      >
        {ACTIVITY_ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-2.5 rounded-lg"
            style={{ padding: "8px 8px" }}
          >
            <div
              className="mt-0.5 shrink-0 rounded-full"
              style={{
                width: 8,
                height: 8,
                backgroundColor: item.iconColor,
              }}
            />
            <div className="flex flex-col" style={{ gap: "2px" }}>
              <span
                style={{
                  fontSize: "12.4px",
                  fontWeight: 600,
                  color: "rgb(25, 26, 28)",
                  lineHeight: "15.15px",
                }}
              >
                {item.title}
              </span>
              <span
                style={{
                  fontSize: "12.4px",
                  fontWeight: 500,
                  color: "rgb(102, 112, 133)",
                  lineHeight: "17.826px",
                }}
              >
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Rules section */}
      <div
        className="border-t"
        style={{
          borderColor: "rgb(228, 231, 236)",
          padding: "10px 16px 12px",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            fontWeight: 500,
            color: "rgb(0, 0, 0)",
            lineHeight: "14.4px",
          }}
        >
          Rules
        </span>
        <div className="mt-1.5 flex flex-col gap-1.5">
          {RULES.map((rule) => (
            <div key={rule.label} className="flex items-center gap-2">
              {/* Checkbox */}
              <div
                className="flex shrink-0 items-center justify-center rounded"
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: rule.checked ? "#155EEF" : "transparent",
                  border: rule.checked
                    ? "none"
                    : "1.5px solid rgb(208, 213, 221)",
                  borderRadius: "4px",
                }}
              >
                {rule.checked && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "rgb(0, 0, 0)",
                  lineHeight: "17.6px",
                }}
              >
                {rule.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export default function SignalResponseSection() {
  return (
    <section className="flex w-full items-center justify-center overflow-hidden bg-[#F4F8FF]">
      <div
        className="flex w-full max-w-[1150px] flex-col items-start justify-center"
        style={{ padding: "25px 20px 50px", gap: "36px" }}
      >
        {/* Desktop Card */}
        <div
          className="relative flex w-full overflow-hidden bg-white"
          style={{
            maxWidth: 1110,
            height: 500,
            borderRadius: "20px",
          }}
        >
          {/* Left Column — Text + CTA */}
          <div
            className="relative z-[2] flex flex-col justify-center"
            style={{ width: 421, padding: "40px 40px 40px 50px" }}
          >
            {/* Text */}
            <div className="flex flex-col" style={{ gap: "8px" }}>
              <h2
                style={{
                  fontSize: "37.6px",
                  fontWeight: 700,
                  color: "rgb(24, 34, 48)",
                  lineHeight: "45.12px",
                  letterSpacing: "-0.752px",
                  margin: 0,
                }}
              >
                Sees every signal. Responds in seconds.
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "rgb(71, 84, 103)",
                  lineHeight: "25.6px",
                  letterSpacing: "-0.32px",
                  margin: 0,
                }}
              >
                Omni SDR watches email opens, link clicks, form fills, and
                LinkedIn replies—then follows up instantly with context-aware
                messages, turning interest into meetings.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-[1000px] bg-[#155EEF] py-1 pr-1 pl-5 no-underline"
                style={{ height: 36, width: 136.578 }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "rgb(255, 255, 255)",
                    letterSpacing: "-0.32px",
                    lineHeight: "25.6px",
                  }}
                >
                  Get Started
                </span>
                <ArrowCircle />
              </a>
            </div>
          </div>

          {/* Right Column — Image + Activity Card */}
          <div
            className="relative flex-1"
            style={{ borderRadius: "20px" }}
          >
            {/* Background image */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: 37,
                top: 17,
                right: 0,
                bottom: 16,
                borderRadius: "20px",
              }}
            >
              <Image
                src="/images/person-man-suit.jpg"
                alt="Professional at work"
                width={794}
                height={364}
                className="h-full w-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* Activity Card Overlay */}
            <div
              className="absolute z-[2]"
              style={{ left: -48, top: 116 }}
            >
              <ActivityFeedCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
