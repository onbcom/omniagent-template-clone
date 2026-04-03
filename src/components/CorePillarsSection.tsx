/* ------------------------------------------------------------------ */
/*  Icon components for each pillar                                     */
/* ------------------------------------------------------------------ */

function LeadRoutingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2L14 6H11V12H9V6H6L10 2Z" fill="#155EEF" />
      <path d="M4 14H16V16H4V14Z" fill="#155EEF" />
      <path d="M6 10L4 12H8L6 10Z" fill="#155EEF" opacity="0.5" />
      <path d="M14 10L16 12H12L14 10Z" fill="#155EEF" opacity="0.5" />
    </svg>
  );
}

function AutomatedSequencesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="16" height="3" rx="1.5" fill="#155EEF" />
      <rect x="2" y="9" width="12" height="3" rx="1.5" fill="#155EEF" opacity="0.6" />
      <rect x="2" y="14" width="8" height="3" rx="1.5" fill="#155EEF" opacity="0.3" />
    </svg>
  );
}

function RealTimeInsightsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 16L6 10L10 13L14 6L18 4" stroke="#155EEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="10" r="1.5" fill="#155EEF" />
      <circle cx="10" cy="13" r="1.5" fill="#155EEF" />
      <circle cx="14" cy="6" r="1.5" fill="#155EEF" />
    </svg>
  );
}

function NativeIntegrationsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="7" height="7" rx="2" fill="#155EEF" />
      <rect x="12" y="1" width="7" height="7" rx="2" fill="#155EEF" opacity="0.6" />
      <rect x="1" y="12" width="7" height="7" rx="2" fill="#155EEF" opacity="0.6" />
      <rect x="12" y="12" width="7" height="7" rx="2" fill="#155EEF" opacity="0.3" />
      <path d="M8 4.5H12" stroke="#155EEF" strokeWidth="1.5" />
      <path d="M4.5 8V12" stroke="#155EEF" strokeWidth="1.5" />
    </svg>
  );
}

function EnterpriseSecurityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 1L3 5V10C3 14.4 6 17.5 10 19C14 17.5 17 14.4 17 10V5L10 1Z" fill="#155EEF" opacity="0.15" />
      <path d="M10 1L3 5V10C3 14.4 6 17.5 10 19C14 17.5 17 14.4 17 10V5L10 1Z" stroke="#155EEF" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 10L9 12L13 8" stroke="#155EEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared arrow icon (inverted — blue arrow on blue circle)            */
/* ------------------------------------------------------------------ */

function ArrowCircleInverted() {
  return (
    <span
      className="ml-2 flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: 28,
        height: 28,
        backgroundColor: "rgb(21, 94, 239)",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3.33337 8H12.6667"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.66663 4L12.6666 8L8.66663 12"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Card data                                                           */
/* ------------------------------------------------------------------ */

interface PillarCard {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
}

const PILLAR_CARDS: readonly PillarCard[] = [
  {
    icon: <LeadRoutingIcon />,
    title: "Instant Lead Routing",
    description:
      "Routes qualified leads to the right representative in seconds.",
  },
  {
    icon: <AutomatedSequencesIcon />,
    title: "Automated Sequences",
    description:
      "Omnichannel workflows engage prospects 24/7 while reps close.",
  },
  {
    icon: <RealTimeInsightsIcon />,
    title: "Real-Time Insights",
    description:
      "Live metrics show replies and bookings, driving quick optimization.",
  },
  {
    icon: <NativeIntegrationsIcon />,
    title: "Native Integrations",
    description:
      "Bidirectional CRM and Slack sync keeps data clean, actionable.",
  },
  {
    icon: <EnterpriseSecurityIcon />,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2-Type II, GDPR-ready\u2014your data stays safe always.",
  },
];

/* ------------------------------------------------------------------ */
/*  Feature card component                                              */
/* ------------------------------------------------------------------ */

function FeatureCard({ card }: { readonly card: PillarCard }) {
  return (
    <div
      className="flex flex-col bg-white"
      style={{
        borderRadius: "20px",
        padding: "20px 25px",
        minHeight: 241,
      }}
    >
      {/* Icon container */}
      <div
        className="flex items-center justify-center"
        style={{
          width: 53,
          height: 53,
          backgroundColor: "rgb(244, 248, 255)",
          borderRadius: "4px",
          marginBottom: 40,
        }}
      >
        {card.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col" style={{ gap: "10px" }}>
        <h6
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "rgb(25, 26, 28)",
            lineHeight: "26px",
            letterSpacing: "-0.4px",
            margin: 0,
          }}
        >
          {card.title}
        </h6>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "rgb(71, 84, 103)",
            lineHeight: "20px",
            margin: 0,
          }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export default function CorePillarsSection() {
  return (
    <section
      className="flex w-full justify-center bg-[#F4F8FF]"
      style={{ padding: "60px 0px" }}
    >
      <div
        className="grid w-full max-w-[1150px]"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "60px 20px 70px",
        }}
      >
        {/* Title cell */}
        <div
          className="flex flex-col"
          style={{
            gap: "30px",
            padding: "10px 0px 20px 2px",
            borderRadius: "20px",
          }}
        >
          {/* CTA button — white variant */}
          <a
            href="#"
            className="inline-flex items-center rounded-[1000px] bg-white py-1 pr-1 pl-5 no-underline"
            style={{
              height: 36,
              width: 136.578,
              boxShadow: "rgba(157, 186, 227, 0.08) 0px 2px 8px 0px",
            }}
          >
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "rgb(5, 5, 5)",
                letterSpacing: "-0.32px",
                lineHeight: "25.6px",
              }}
            >
              Get Started
            </span>
            <ArrowCircleInverted />
          </a>

          {/* Heading */}
          <h2
            style={{
              fontSize: "37.6px",
              fontWeight: 700,
              color: "rgb(25, 26, 28)",
              lineHeight: "45.12px",
              letterSpacing: "-0.752px",
              margin: 0,
            }}
          >
            Core Pillars of Omni SDR
          </h2>
        </div>

        {/* 5 feature cards */}
        {PILLAR_CARDS.map((card) => (
          <FeatureCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
