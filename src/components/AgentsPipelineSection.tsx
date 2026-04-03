"use client";

import Image from "next/image";
import { useState } from "react";

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
/*  Tab data                                                            */
/* ------------------------------------------------------------------ */

interface TabContent {
  readonly label: string;
  readonly heading: string;
  readonly description: string;
}

const TABS: readonly TabContent[] = [
  {
    label: "Lead Research Agent",
    heading: "AI Lead Research Agent",
    description:
      "Discover new opportunities automatically. Omni Agent scans the web, funding databases, and job signals to find high-potential leads that match your ICP \u2014 before your competitors even notice.",
  },
  {
    label: "Outreach Agent",
    heading: "AI Outreach Agent",
    description:
      "Craft hyper-personalized emails at scale. Omni Agent writes, sends, and follows up with prospects using context from their company, role, and recent activity\u2014so every message feels hand-written.",
  },
  {
    label: "Qualification Agent",
    heading: "AI Qualification Agent",
    description:
      "Automatically score and qualify inbound leads based on fit, intent, and engagement signals. Focus your team\u2019s time on the prospects most likely to convert.",
  },
  {
    label: "Meeting Agent",
    heading: "AI Meeting Agent",
    description:
      "Handle scheduling, reminders, and confirmations automatically. Omni Agent coordinates calendars and sends meeting prep\u2014so reps walk into every call ready to close.",
  },
  {
    label: "CRM & Insights Agent",
    heading: "AI CRM & Insights Agent",
    description:
      "Keep your CRM clean and actionable. Omni Agent logs every interaction, updates deal stages, and surfaces insights so nothing slips through the cracks.",
  },
];

/* ------------------------------------------------------------------ */
/*  Lead card data                                                      */
/* ------------------------------------------------------------------ */

interface LeadCard {
  readonly name: string;
  readonly role: string;
  readonly intentScore: number;
  readonly image: string;
  readonly width: number;
  readonly height: number;
  readonly borderRadius: number;
}

const LEAD_CARDS: readonly LeadCard[] = [
  {
    name: "Katherine Harris",
    role: "VP of Growth at TechFlow",
    intentScore: 92,
    image: "/images/person-sarah.jpg",
    width: 231,
    height: 91,
    borderRadius: 11.33,
  },
  {
    name: "Lauren Bennett",
    role: "Director of Product at Nova Systems",
    intentScore: 89,
    image: "/images/person-woman-blue.jpg",
    width: 216,
    height: 86,
    borderRadius: 10.43,
  },
  {
    name: "Daniel Thompson",
    role: "Director of Product at Nova Systems",
    intentScore: 72,
    image: "/images/person-michael.jpg",
    width: 228,
    height: 90,
    borderRadius: 10.95,
  },
];

/* ------------------------------------------------------------------ */
/*  Lead card component                                                 */
/* ------------------------------------------------------------------ */

function LeadCardItem({ card }: { readonly card: LeadCard }) {
  return (
    <div
      className="flex items-center gap-2.5 bg-white"
      style={{
        width: card.width,
        minHeight: card.height,
        borderRadius: card.borderRadius,
        padding: "10px 12px",
        boxShadow: "rgba(157, 186, 227, 0.12) 0px 4px 12px 0px",
      }}
    >
      {/* Avatar */}
      <Image
        src={card.image}
        alt={card.name}
        width={36}
        height={36}
        className="shrink-0 rounded-full object-cover"
        style={{ width: 36, height: 36 }}
      />

      {/* Info */}
      <div className="flex flex-1 flex-col" style={{ gap: "2px" }}>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "rgb(0, 0, 0)",
            lineHeight: "19.2px",
          }}
        >
          {card.name}
        </span>
        <span
          style={{
            fontSize: "9.8px",
            fontWeight: 500,
            color: "rgb(152, 162, 179)",
            lineHeight: "15.68px",
          }}
        >
          {card.role}
        </span>

        {/* Intent + CRM badge row */}
        <div className="mt-1 flex items-center gap-2">
          <div
            className="flex items-center gap-1 rounded-full"
            style={{
              backgroundColor: "rgba(18, 183, 106, 0.1)",
              padding: "2px 8px",
            }}
          >
            <span
              style={{
                fontSize: "9px",
                fontWeight: 400,
                color: "rgb(45, 54, 41)",
                lineHeight: "10.8px",
              }}
            >
              Intent Score :
            </span>
            <span
              style={{
                fontSize: "9px",
                fontWeight: 400,
                color: "rgb(45, 54, 41)",
                lineHeight: "10.8px",
              }}
            >
              {card.intentScore}/100
            </span>
          </div>
          <span
            className="rounded-full"
            style={{
              fontSize: "8px",
              fontWeight: 500,
              color: "rgb(45, 54, 41)",
              lineHeight: "9.6px",
              backgroundColor: "rgba(18, 183, 106, 0.1)",
              padding: "2px 6px",
            }}
          >
            Added to CRM
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Right visual — Lead Research Cards                                  */
/* ------------------------------------------------------------------ */

function LeadResearchVisual() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 422, height: 343 }}
    >
      {/* Animated Radar concentric circles */}
      <div className="absolute flex items-center justify-center" style={{ width: 288, height: 288, right: 20, top: 0 }}>
        <div className="hero-radar-ring" style={{ width: 288, height: 288, borderColor: "rgba(21, 94, 239, 0.06)", animationDelay: "0s" }} />
        <div className="hero-radar-ring" style={{ width: 220, height: 220, borderColor: "rgba(21, 94, 239, 0.1)", animationDelay: "0.5s" }} />
        <div className="hero-radar-ring" style={{ width: 150, height: 150, borderColor: "rgba(21, 94, 239, 0.16)", animationDelay: "1s" }} />
        <div className="hero-radar-ring" style={{ width: 80, height: 80, borderColor: "rgba(21, 94, 239, 0.2)", background: "radial-gradient(circle, rgba(21, 94, 239, 0.08) 0%, transparent 100%)", animationDelay: "1.5s" }} />
        {/* Sweep */}
        <div className="hero-radar-sweep" style={{ width: 144, height: 144 }} />
        {/* Logo orb center */}
        <div className="absolute z-[2]">
          <Image
            src="/images/omni-icon-small.png"
            alt="Omni Agent"
            width={43}
            height={43}
          />
        </div>
      </div>

      {/* Lead cards positioned around the radar */}
      <div className="absolute" style={{ left: 0, top: 20 }}>
        <LeadCardItem card={LEAD_CARDS[0]} />
      </div>
      <div className="absolute" style={{ right: 0, top: 120 }}>
        <LeadCardItem card={LEAD_CARDS[1]} />
      </div>
      <div className="absolute" style={{ left: 20, bottom: 0 }}>
        <LeadCardItem card={LEAD_CARDS[2]} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export default function AgentsPipelineSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="flex w-full justify-center bg-[#F4F8FF]">
      <div
        className="flex w-full max-w-[1150px] flex-col"
        style={{ padding: "50px 20px" }}
      >
        {/* Header */}
        <div
          className="flex flex-col"
          style={{ maxWidth: 707, gap: "8px", marginBottom: 40 }}
        >
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
            AI Agents that run your entire sales pipeline
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
            Omni Agent handles every part of the sales process &mdash; from
            finding prospects to closing deals &mdash; so you never lose a lead
            again.
          </p>
        </div>

        {/* Tabs + Content Area */}
        <div
          className="flex w-full flex-col gap-6 md:flex-row"
          style={{ maxWidth: 1110 }}
        >
          {/* Tabs */}
          <div
            className="flex shrink-0 flex-col"
            style={{ width: 292, gap: "8px" }}
          >
            {TABS.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(i)}
                className="text-left transition-colors"
                style={{
                  width: "100%",
                  height: 37,
                  borderRadius: "8px",
                  backgroundColor:
                    activeTab === i ? "rgb(255, 255, 255)" : "transparent",
                  border: "none",
                  padding: "0px 14px",
                  cursor: "pointer",
                  boxShadow:
                    activeTab === i
                      ? "rgba(157, 186, 227, 0.08) 0px 2px 8px 0px"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgb(52, 64, 84)",
                    lineHeight: "17px",
                  }}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-6 md:flex-row">
            {/* Left — text + CTA */}
            <div
              className="flex flex-col justify-center"
              style={{ maxWidth: 309, gap: "20px" }}
            >
              <div className="flex flex-col" style={{ gap: "10px" }}>
                <h5
                  style={{
                    fontSize: "22.6px",
                    fontWeight: 700,
                    color: "rgb(0, 0, 0)",
                    lineHeight: "31.64px",
                    letterSpacing: "-0.452px",
                    margin: 0,
                  }}
                >
                  {TABS[activeTab].heading}
                </h5>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgb(71, 84, 103)",
                    lineHeight: "20px",
                    margin: 0,
                  }}
                >
                  {TABS[activeTab].description}
                </p>
              </div>

              {/* CTA */}
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

            {/* Right — Visual */}
            <div className="flex flex-1 items-center justify-center">
              <LeadResearchVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
