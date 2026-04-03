import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                              */
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
/*  Card 1 — Calendar Booking                                          */
/* ------------------------------------------------------------------ */

interface MeetingEntry {
  readonly name: string;
  readonly time: string;
  readonly avatarColor: string;
  readonly initials: string;
}

const MEETING_ENTRIES: readonly MeetingEntry[] = [
  { name: "Alec Whitten", time: "9:30 am", avatarColor: "#6941C6", initials: "AW" },
  { name: "Lyle Kaufman", time: "9:30 am", avatarColor: "#155EEF", initials: "LK" },
];

function CalendarBookingVisual() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-t-[20px] bg-[#F4F8FF] px-6 pt-8 pb-4">
      {/* 5x stat with concentric circles */}
      <div className="relative flex h-[160px] w-[160px] shrink-0 items-center justify-center">
        {/* Concentric circles */}
        <div className="absolute inset-0 rounded-full border border-[#155EEF]/5" />
        <div className="absolute inset-3 rounded-full border border-[#155EEF]/10" />
        <div className="absolute inset-6 rounded-full border border-[#155EEF]/15" />
        <div className="absolute inset-9 rounded-full border border-[#155EEF]/20" />
        <div className="absolute inset-12 rounded-full bg-[#155EEF]/5" />
        <span className="relative z-[1] text-[48px] font-bold leading-none text-[#155EEF]">
          5x
        </span>
      </div>

      {/* Meeting card stack */}
      <div className="ml-4 flex flex-col gap-2.5">
        {/* Discovery Call card */}
        <div className="w-[200px] rounded-xl bg-white p-3 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[12px] font-semibold text-[#182230]">
              Discovery Call
            </span>
            <span className="text-[10px] font-medium text-[#667085]">
              30 Min Meeting
            </span>
          </div>
          {/* Tabs */}
          <div className="mb-2.5 flex gap-1">
            {(["Agenda", "KPI", "QnA"] as const).map((tab, i) => (
              <span
                key={tab}
                className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${
                  i === 0
                    ? "bg-[#155EEF] text-white"
                    : "bg-[#F4F8FF] text-[#667085]"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
          {/* Meeting entries */}
          <div className="flex flex-col gap-1.5">
            {MEETING_ENTRIES.map((entry) => (
              <div
                key={entry.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5">
                  <div
                    className="flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold text-white"
                    style={{ backgroundColor: entry.avatarColor }}
                  >
                    {entry.initials}
                  </div>
                  <span className="text-[11px] font-medium text-[#182230]">
                    {entry.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-[#667085]">
                    {entry.time}
                  </span>
                  <span className="rounded bg-[#155EEF]/10 px-1.5 py-0.5 text-[8px] font-semibold text-[#155EEF]">
                    Join Via
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 2 — Scale Network Diagram                                     */
/* ------------------------------------------------------------------ */

function ScaleNetworkVisual() {
  /* Node positions for a simple network diagram */
  const nodes: readonly { cx: number; cy: number; hasAvatar: boolean; color: string }[] = [
    { cx: 180, cy: 80, hasAvatar: true, color: "#155EEF" },
    { cx: 80, cy: 50, hasAvatar: false, color: "#E4E7EC" },
    { cx: 300, cy: 55, hasAvatar: true, color: "#6941C6" },
    { cx: 130, cy: 140, hasAvatar: true, color: "#12B76A" },
    { cx: 260, cy: 135, hasAvatar: false, color: "#E4E7EC" },
    { cx: 50, cy: 120, hasAvatar: false, color: "#E4E7EC" },
    { cx: 330, cy: 130, hasAvatar: false, color: "#E4E7EC" },
    { cx: 200, cy: 160, hasAvatar: false, color: "#E4E7EC" },
  ];

  const edges: readonly [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 5], [2, 6], [3, 4], [3, 7],
    [4, 7], [1, 3],
  ];

  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden rounded-t-[20px] bg-[#F4F8FF] px-6 pt-6 pb-4">
      {/* >1M stat */}
      <div className="mb-3 text-center">
        <span className="text-[42px] font-bold leading-none text-[#155EEF]">
          &gt;1M
        </span>
      </div>
      {/* Network SVG */}
      <svg
        viewBox="0 0 380 180"
        className="h-[140px] w-full"
        fill="none"
        aria-hidden="true"
      >
        {/* Connection lines */}
        {edges.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="#E4E7EC"
            strokeWidth="1.5"
          />
        ))}
        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.hasAvatar ? 18 : 8}
              fill={node.hasAvatar ? node.color : "white"}
              stroke={node.hasAvatar ? "white" : node.color}
              strokeWidth={node.hasAvatar ? 3 : 1.5}
            />
            {node.hasAvatar && (
              <circle
                cx={node.cx}
                cy={node.cy}
                r={12}
                fill={node.color}
                opacity={0.5}
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 3 — Integrations                                              */
/* ------------------------------------------------------------------ */

function IntegrationsVisual() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden rounded-t-[20px] bg-[#F4F8FF] px-6 pt-8 pb-4">
      <Image
        src="/images/integration-icons.png"
        alt="Integration tool icons including Slack, HubSpot, Salesforce, and more"
        width={334}
        height={334}
        className="h-auto max-h-[200px] w-auto max-w-full object-contain"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 4 — Enterprise Performance Gauge                              */
/* ------------------------------------------------------------------ */

function PerformanceGaugeVisual() {
  /*
   * Semicircle gauge with colored segments:
   * Red (low) -> Orange (medium) -> Blue (high)
   * Needle pointing to the high-performance zone
   * "99.9%" center text
   */
  const cx = 150;
  const cy = 130;
  const r = 100;

  /* Arc helper: convert angle (degrees, 0 = left of semicircle) to path */
  function describeArc(
    startAngle: number,
    endAngle: number,
  ): string {
    const startRad = ((180 + startAngle) * Math.PI) / 180;
    const endRad = ((180 + endAngle) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
  }

  /* Needle angle: 155 degrees = pointing to the blue/high zone (out of 180) */
  const needleAngle = 155;
  const needleRad = ((180 + needleAngle) * Math.PI) / 180;
  const needleLen = 75;
  const nx = cx + needleLen * Math.cos(needleRad);
  const ny = cy + needleLen * Math.sin(needleRad);

  return (
    <div className="flex w-full flex-col items-center overflow-hidden rounded-t-[20px] bg-[#F4F8FF] px-6 pt-8 pb-4">
      <svg
        viewBox="0 0 300 160"
        className="h-[160px] w-[260px]"
        fill="none"
        aria-label="Performance gauge showing 99.9%"
        role="img"
      >
        {/* Track background */}
        <path
          d={describeArc(0, 180)}
          stroke="#E4E7EC"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
        />
        {/* Red zone: 0-60 deg */}
        <path
          d={describeArc(0, 60)}
          stroke="#F04438"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
        />
        {/* Orange zone: 60-110 deg */}
        <path
          d={describeArc(60, 110)}
          stroke="#F79009"
          strokeWidth="20"
          fill="none"
        />
        {/* Blue zone: 110-180 deg */}
        <path
          d={describeArc(110, 180)}
          stroke="#155EEF"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
        />
        {/* Needle */}
        <line
          x1={cx}
          y1={cy}
          x2={nx}
          y2={ny}
          stroke="#182230"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Needle center dot */}
        <circle cx={cx} cy={cy} r="6" fill="#182230" />
        <circle cx={cx} cy={cy} r="3" fill="white" />
        {/* 99.9% text */}
        <text
          x={cx}
          y={cy + 30}
          textAnchor="middle"
          className="text-[24px] font-bold"
          fill="#182230"
        >
          99.9%
        </text>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card wrapper                                                       */
/* ------------------------------------------------------------------ */

interface FeatureCardProps {
  readonly visual: React.ReactNode;
  readonly title: string;
  readonly body: string;
}

function FeatureCard({ visual, title, body }: FeatureCardProps) {
  return (
    <div
      className="flex flex-col gap-4 overflow-hidden rounded-[20px] bg-white pb-[30px]"
      style={{
        boxShadow: "rgba(157, 186, 227, 0.08) 0px 9px 12px 0px",
      }}
    >
      {visual}
      <div className="flex flex-col gap-2 px-6">
        <h3 className="text-[20px] font-semibold leading-[28px] tracking-[-0.4px] text-[#182230]">
          {title}
        </h3>
        <p className="text-[14px] font-normal leading-[22.4px] text-[#475467]">
          {body}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card data                                                          */
/* ------------------------------------------------------------------ */

const CARDS: readonly {
  visual: React.ReactNode;
  title: string;
  body: string;
}[] = [
  {
    visual: <CalendarBookingVisual />,
    title: "Calendar Booking on Autopilot",
    body: "Schedules meetings the moment a lead qualifies\u2014often while your team sleeps. Our AI books 5\u00d7 more demos without human back-and-forth and drops them straight into your calendar.",
  },
  {
    visual: <ScaleNetworkVisual />,
    title: "Scale That Humans Can\u2019t Match",
    body: "Omni SDR delivers over one million personalized touches each month, engaging prospects at machine speed. Your team can focus entirely on closing deals while outreach runs on autopilot.",
  },
  {
    visual: <IntegrationsVisual />,
    title: "Integrations That Just Work",
    body: "Seamlessly connect with the tools your team already relies on, without complicated setup or costly delays. Enjoy smooth workflows and instant compatibility from day one.",
  },
  {
    visual: <PerformanceGaugeVisual />,
    title: "Enterprise-Grade Performance",
    body: "With millisecond-level API calls and elastic scaling, Omni SDR easily handles sudden traffic spikes. Your pipeline remains fast, stable, and reliable\u2014even during peak launch days.",
  },
];

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export default function FeaturesSection() {
  return (
    <section className="flex w-full justify-center bg-[#F4F8FF]">
      <div className="flex w-full max-w-[1150px] flex-col gap-[36px] px-5 pt-[25px] pb-[50px]">
        {/* ---- Header row ---- */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-[47px]">
          {/* Text area */}
          <div className="flex max-w-[648px] flex-col gap-3">
            <h2 className="text-[37.6px] font-bold leading-[45.12px] tracking-[-0.752px] text-[#182230]">
              Enterprise-Grade Trust, Built&nbsp;In
            </h2>
            <p className="text-[16px] font-medium leading-[25.6px] tracking-[-0.32px] text-[#475467]">
              Every feature is engineered to earn the confidence of security
              teams, procurement boards, and revenue leaders alike.
            </p>
          </div>

          {/* CTA button */}
          <a
            href="#"
            className="flex shrink-0 items-center rounded-[1000px] bg-[#155EEF] py-2 pr-1.5 pl-5 no-underline"
            style={{ height: 36 }}
          >
            <span className="text-[16px] font-semibold leading-none text-white">
              Get Started
            </span>
            <ArrowCircle />
          </a>
        </div>

        {/* ---- 2x2 Feature grid ---- */}
        <div className="grid grid-cols-1 gap-[27px] md:grid-cols-2">
          {CARDS.map((card) => (
            <FeatureCard
              key={card.title}
              visual={card.visual}
              title={card.title}
              body={card.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
