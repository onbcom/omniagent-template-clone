"use client";

import Image from "next/image";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface RoleTab {
  readonly label: string;
  readonly heading: string;
  readonly description: string;
}

const ROLE_TABS: readonly RoleTab[] = [
  {
    label: "Sales Development (SDRs)",
    heading: "Stop hunting for leads. Start closing them.",
    description:
      "Omni Agent automates the entire top-of-funnel by building verified lead lists matching your exact ICP in seconds, not hours. It then crafts personalized outreach at scale based on real-time prospect signals and manages multi-channel follow-ups, nurturing cold leads until they are ready to book a meeting.",
  },
  {
    label: "Founders & Startups",
    heading: "Scale outreach without scaling headcount.",
    description:
      "As a founder, your time is your scarcest resource. Omni Agent handles prospecting, personalization, and follow-ups so you can focus on product and fundraising\u2014while your pipeline grows on autopilot.",
  },
  {
    label: "Account Executives",
    heading: "Close more. Research less.",
    description:
      "Omni Agent pre-qualifies leads and surfaces buying signals so you walk into every call prepared. Spend less time researching and more time closing high-value deals.",
  },
  {
    label: "Marketing Teams",
    heading: "Align outbound with inbound\u2014automatically.",
    description:
      "Bridge the gap between marketing campaigns and sales outreach. Omni Agent ensures every MQL gets personalized follow-up that matches your brand voice and campaign messaging.",
  },
  {
    label: "RevOps",
    heading: "One dashboard. Full pipeline visibility.",
    description:
      "Get unified reporting across outbound channels, track conversion at every stage, and optimize your revenue engine with data-driven insights\u2014all without manual spreadsheet wrangling.",
  },
];

/* ------------------------------------------------------------------ */
/*  Mockup UI for SDRs tab (lead list table)                            */
/* ------------------------------------------------------------------ */

interface LeadRow {
  readonly name: string;
  readonly status: string;
  readonly statusColor: string;
  readonly signals: readonly string[];
  readonly signalColors: readonly string[];
}

const LEAD_ROWS: readonly LeadRow[] = [
  {
    name: "Edwin Adenike",
    status: "Engaged",
    statusColor: "rgb(94, 195, 105)",
    signals: ["Series A ($12M)", "Active Category", "HubSpot (BuiltWith)"],
    signalColors: [
      "rgb(83, 88, 97)",
      "rgb(83, 88, 97)",
      "rgb(83, 88, 97)",
    ],
  },
  {
    name: "David Oshodi",
    status: "Synced",
    statusColor: "rgb(0, 78, 234)",
    signals: ["Launch (Product Hunt)", "Hiring SDRs (LinkedIn)"],
    signalColors: ["rgb(83, 88, 97)", "rgb(21, 111, 238)"],
  },
  {
    name: "Scanning",
    status: "Pending Sync",
    statusColor: "rgb(53, 62, 114)",
    signals: [],
    signalColors: [],
  },
];

function LeadListMockup() {
  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.76)",
        borderRadius: 13.58,
        width: "100%",
        maxWidth: 447,
        padding: "12px 16px",
      }}
    >
      {/* Header */}
      <h6
        style={{
          fontSize: 12.8,
          fontWeight: 500,
          color: "rgb(23, 23, 23)",
          lineHeight: "16.64px",
          letterSpacing: "-0.256px",
          margin: "0 0 8px",
        }}
      >
        Automated Lead List Building
      </h6>

      {/* Table Header */}
      <div
        className="flex items-center gap-6 border-b pb-1"
        style={{ borderColor: "rgba(228,231,236,0.5)" }}
      >
        <span
          className="flex-1"
          style={{
            fontSize: 9,
            fontWeight: 600,
            color: "rgb(113, 118, 128)",
            lineHeight: "11.27px",
          }}
        >
          Name
        </span>
        <span
          style={{
            fontSize: 9,
            fontWeight: 600,
            color: "rgb(113, 118, 128)",
            lineHeight: "14.23px",
            width: 140,
          }}
        >
          Signals
        </span>
        <span
          style={{
            fontSize: 9,
            fontWeight: 600,
            color: "rgb(113, 118, 128)",
            lineHeight: "14.23px",
            width: 70,
          }}
        >
          Status
        </span>
      </div>

      {/* Rows */}
      {LEAD_ROWS.map((row) => (
        <div
          key={row.name}
          className="flex items-center gap-6 border-b py-2"
          style={{ borderColor: "rgba(228,231,236,0.3)" }}
        >
          <span
            className="flex-1"
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: "rgb(24, 29, 39)",
              lineHeight: "15.82px",
            }}
          >
            {row.name}
          </span>
          <div className="flex flex-col gap-0.5" style={{ width: 140 }}>
            {row.signals.map((signal, i) => (
              <span
                key={signal}
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: row.signalColors[i],
                  lineHeight: "13.11px",
                }}
              >
                {signal}
              </span>
            ))}
          </div>
          <span
            style={{
              fontSize: 9,
              fontWeight: 500,
              color: row.statusColor,
              lineHeight: "14.23px",
              width: 70,
            }}
          >
            {row.status}
          </span>
        </div>
      ))}

      {/* Stats row */}
      <div className="mt-3 flex gap-6">
        <div className="flex flex-col gap-0.5">
          <span
            style={{
              fontSize: 9,
              fontWeight: 400,
              color: "rgb(102, 112, 133)",
              lineHeight: "10.8px",
            }}
          >
            Opened
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "rgb(24, 34, 48)",
              lineHeight: "18px",
            }}
          >
            90.24%
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span
            style={{
              fontSize: 9,
              fontWeight: 400,
              color: "rgb(102, 112, 133)",
              lineHeight: "10.8px",
            }}
          >
            Replied
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "rgb(24, 34, 48)",
              lineHeight: "18px",
            }}
          >
            32.80%
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Generic mockup placeholder for non-SDR tabs                         */
/* ------------------------------------------------------------------ */

function GenericMockup({ heading }: { readonly heading: string }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 20,
        width: "100%",
        height: 400,
        maxWidth: 1100,
      }}
    >
      <div className="flex flex-col items-center gap-4 p-8">
        <Image
          src="/images/dashboard-mockup.png"
          alt="Dashboard mockup"
          width={800}
          height={400}
          className="rounded-xl object-contain opacity-80"
          style={{ maxHeight: 350, width: "auto" }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function RoleBasedSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = ROLE_TABS[activeTab];

  return (
    <section
      className="flex w-full justify-center"
      style={{ backgroundColor: "rgb(16, 24, 40)" }}
    >
      <div
        className="overflow-clip"
        style={{
          width: 1200,
          maxWidth: "100%",
          borderRadius: 40,
          backgroundColor: "rgb(244, 248, 255)",
        }}
      >
        <div
          className="flex flex-col items-center justify-center overflow-hidden"
          style={{
            backgroundColor: "rgb(16, 24, 40)",
            padding: "70px 20px",
            gap: 47,
          }}
        >
          {/* ---- Header ---- */}
          <div
            className="flex w-full flex-col items-center"
            style={{ maxWidth: 1150, padding: "0 20px" }}
          >
            <div className="flex w-full flex-col" style={{ gap: 8 }}>
              {/* Title */}
              <h2
                style={{
                  fontSize: 37.6,
                  fontWeight: 700,
                  color: "rgb(255, 255, 255)",
                  lineHeight: "45.12px",
                  letterSpacing: "-0.752px",
                  margin: 0,
                }}
              >
                How Omni Agent drives growth for every role
              </h2>

              {/* Tab Row */}
              <div className="mt-4 flex flex-wrap gap-0">
                {ROLE_TABS.map((t, index) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className="flex items-center border-none"
                    style={{
                      backgroundColor:
                        index === activeTab
                          ? "rgb(21, 94, 239)"
                          : "transparent",
                      borderRadius: 30,
                      padding: "14px 20px",
                      height: 54,
                      gap: 6,
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                  >
                    <h6
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: "rgb(255, 255, 255)",
                        lineHeight: "26px",
                        letterSpacing: "-0.4px",
                        margin: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t.label}
                    </h6>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Image / Mockup Area ---- */}
          <div
            className="overflow-hidden"
            style={{
              borderRadius: 20,
              width: 1100,
              maxWidth: "100%",
              minHeight: 400,
            }}
          >
            {activeTab === 0 ? (
              <div
                className="flex items-center justify-center p-8"
                style={{
                  backgroundColor: "rgba(244, 248, 255, 0.05)",
                  minHeight: 400,
                }}
              >
                <LeadListMockup />
              </div>
            ) : (
              <GenericMockup heading={tab.heading} />
            )}
          </div>

          {/* ---- Text Content ---- */}
          <div className="flex flex-col" style={{ maxWidth: 1100, gap: 16 }}>
            <h3
              style={{
                fontSize: 32.6,
                fontWeight: 700,
                color: "rgb(255, 255, 255)",
                lineHeight: "39.12px",
                letterSpacing: "-0.652px",
                margin: 0,
              }}
            >
              {tab.heading}
            </h3>
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "rgb(255, 255, 255)",
                lineHeight: "22.4px",
                letterSpacing: "-0.32px",
                margin: 0,
              }}
            >
              {tab.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
