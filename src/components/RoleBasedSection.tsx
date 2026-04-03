"use client";

import { useState } from "react";

const TABS = [
  "Sales Development (SDRs)",
  "Founders & Startups",
  "Account Executives",
  "Marketing Teams",
  "RevOps",
] as const;

type TabKey = (typeof TABS)[number];

interface TabContent {
  heading: string;
  description: string;
}

const TAB_CONTENT: Record<TabKey, TabContent> = {
  "Sales Development (SDRs)": {
    heading: "Stop hunting for leads. Start closing them.",
    description:
      "Omni Agent automates the entire top-of-funnel by building verified lead lists matching your exact ICP in seconds, not hours. It then crafts personalized outreach at scale based on real-time prospect signals and manages multi-channel follow-ups, nurturing cold leads until they are ready to book a meeting.",
  },
  "Founders & Startups": {
    heading: "Focus on building. Let AI handle pipeline.",
    description:
      "As a founder, your time is your scarcest resource. Omni Agent automates outbound prospecting, lead qualification, and meeting scheduling so you can focus on product and fundraising while your pipeline grows on autopilot.",
  },
  "Account Executives": {
    heading: "Close more deals with less busywork.",
    description:
      "Omni Agent keeps your pipeline warm by surfacing buying signals, automating follow-ups, and delivering enriched account intelligence directly to your workflow so you can spend more time selling and less time researching.",
  },
  "Marketing Teams": {
    heading: "Turn intent data into booked meetings.",
    description:
      "Omni Agent bridges the gap between marketing and sales by converting inbound signals and campaign engagement into qualified pipeline. Automatically route, enrich, and activate leads the moment they show intent.",
  },
  RevOps: {
    heading: "Unified pipeline intelligence at scale.",
    description:
      "Omni Agent gives RevOps teams complete visibility into prospecting activity, conversion metrics, and pipeline health. Automate data hygiene, lead routing, and reporting to keep your revenue engine running smoothly.",
  },
};

const STEPS = [
  {
    number: "01",
    title: "Prospect",
    subtitle: "Find qualified leads",
    description:
      "AI pulls fresh contacts that match your ICP and enriches them with live firmographic data.",
  },
  {
    number: "02",
    title: "Personalize",
    subtitle: "Craft tailored outreach",
    description:
      "Each message is dynamically written using real-time signals like funding rounds, tech stack, and hiring activity.",
  },
  {
    number: "03",
    title: "Book",
    subtitle: "Schedule meetings automatically",
    description:
      "Multi-channel follow-ups nurture leads until they are ready to book, syncing directly to your calendar.",
  },
];

function StatusPill({ label, variant }: { label: string; variant: string }) {
  const styles: Record<string, string> = {
    engaged: "bg-[#ECFDF3] text-[#027A48]",
    synced: "bg-[#EFF8FF] text-[#175CD3]",
    pending: "bg-[#FFFAEB] text-[#B54708]",
    queued: "bg-[#F2F4F7] text-[#344054]",
    archived: "bg-[#F2F4F7] text-[#667085]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${styles[variant] ?? styles.queued}`}
    >
      {label}
    </span>
  );
}

function SDRMockupCard() {
  return (
    <div className="w-full rounded-xl border border-[#E4E7EC] bg-white shadow-lg overflow-hidden">
      {/* Table header */}
      <div className="grid grid-cols-[1.5fr_1fr_1.5fr_1fr] gap-2 border-b border-[#E4E7EC] bg-[#F9FAFB] px-4 py-2.5 text-xs font-medium text-[#667085]">
        <span>Name</span>
        <span>Scanning</span>
        <span>Signals</span>
        <span>Status</span>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-[1.5fr_1fr_1.5fr_1fr] gap-2 items-center border-b border-[#E4E7EC] px-4 py-3 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-[#F4EBFF] flex items-center justify-center text-xs font-semibold text-[#7F56D9]">
            EA
          </div>
          <span className="font-medium text-[#101828]">Edwin Adenike</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-[#12B76A] animate-pulse" />
          <span className="text-xs text-[#667085]">Active</span>
        </div>
        <div className="flex flex-wrap gap-1">
          <span className="rounded bg-[#F0F9FF] px-1.5 py-0.5 text-[10px] text-[#026AA2]">
            Series A ($12M)
          </span>
          <span className="rounded bg-[#FFF6ED] px-1.5 py-0.5 text-[10px] text-[#C4320A]">
            HubSpot (BuiltWith)
          </span>
        </div>
        <StatusPill label="Engaged" variant="engaged" />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-[1.5fr_1fr_1.5fr_1fr] gap-2 items-center border-b border-[#E4E7EC] px-4 py-3 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-[#D1FADF] flex items-center justify-center text-xs font-semibold text-[#027A48]">
            DO
          </div>
          <span className="font-medium text-[#101828]">David Oshodi</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-[#12B76A] animate-pulse" />
          <span className="text-xs text-[#667085]">Active</span>
        </div>
        <div className="flex flex-wrap gap-1">
          <span className="rounded bg-[#EFF8FF] px-1.5 py-0.5 text-[10px] text-[#175CD3]">
            Hiring SDRs (LinkedIn)
          </span>
        </div>
        <StatusPill label="Synced" variant="synced" />
      </div>

      {/* Row 3 - partial */}
      <div className="grid grid-cols-[1.5fr_1fr_1.5fr_1fr] gap-2 items-center border-b border-[#E4E7EC] px-4 py-3 text-sm opacity-60">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-[#FEF3F2] flex items-center justify-center text-xs font-semibold text-[#B42318]">
            JK
          </div>
          <span className="font-medium text-[#101828]">Jane Kim</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-[#F79009]" />
          <span className="text-xs text-[#667085]">Pending</span>
        </div>
        <div className="flex flex-wrap gap-1">
          <span className="rounded bg-[#F2F4F7] px-1.5 py-0.5 text-[10px] text-[#344054]">
            Evaluating tools
          </span>
        </div>
        <StatusPill label="Pending Sync" variant="pending" />
      </div>

      {/* Stats bar */}
      <div className="flex items-center justify-between bg-[#F9FAFB] px-4 py-3 border-b border-[#E4E7EC]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#12B76A]" />
            <span className="text-xs text-[#344054]">
              Opened{" "}
              <span className="font-semibold text-[#101828]">90.24%</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#155EEF]" />
            <span className="text-xs text-[#344054]">
              Replied{" "}
              <span className="font-semibold text-[#101828]">32.80%</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <StatusPill label="Queued" variant="queued" />
          <StatusPill label="Archived" variant="archived" />
        </div>
      </div>

      {/* Email preview */}
      <div className="px-4 py-3">
        <div className="rounded-lg border border-[#E4E7EC] bg-white p-3">
          <div className="mb-1.5 flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-[#155EEF] flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <span className="text-xs font-medium text-[#344054]">
              Email Preview
            </span>
          </div>
          <p className="text-xs leading-relaxed text-[#667085]">
            Hi{" "}
            <span className="rounded bg-[#EFF8FF] px-1 text-[#175CD3]">
              [Contact: First Name]
            </span>
            , I noticed{" "}
            <span className="rounded bg-[#EFF8FF] px-1 text-[#175CD3]">
              [Company Name]
            </span>{" "}
            recently raised a Series A &mdash; congrats! We help teams like
            yours scale outbound without adding headcount...
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RoleBasedSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("Sales Development (SDRs)");

  const content = TAB_CONTENT[activeTab];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-[#101828] md:text-4xl">
          How Omni Agent drives growth for every role
        </h2>

        {/* Tab bar */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#155EEF] text-white"
                  : "bg-[#F9FAFB] text-[#344054] hover:bg-[#F2F4F7]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* Left: mockup or placeholder */}
          <div>
            {activeTab === "Sales Development (SDRs)" ? (
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#101828]">
                  Automated Lead List Building
                </h3>
                <SDRMockupCard />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-[#E4E7EC] bg-[#F9FAFB]">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF8FF]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#155EEF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-[#344054]">
                    {activeTab} Dashboard
                  </p>
                  <p className="mt-1 text-xs text-[#667085]">
                    Interactive preview coming soon
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right: text content */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-2xl font-semibold text-[#101828]">
              {content.heading}
            </h3>
            <p className="text-base leading-7 text-[#667085]">
              {content.description}
            </p>
          </div>
        </div>

        {/* 3-step flow */}
        <div className="mt-20">
          <p className="mb-8 text-center text-lg font-medium text-[#344054]">
            Omni SDR prospects, personalizes, and books
            meetings&mdash;automatically.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#155EEF] text-xs font-bold text-white">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-semibold text-[#101828]">
                    {step.title}
                  </h4>
                </div>
                <p className="mb-2 text-sm font-medium text-[#344054]">
                  {step.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-[#667085]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
