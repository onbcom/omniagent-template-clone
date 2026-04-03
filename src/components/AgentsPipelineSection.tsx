"use client";

import { useState } from "react";

const tabs = [
  { id: "lead-research", label: "Lead Research Agent" },
  { id: "outreach", label: "Outreach Agent" },
  { id: "qualification", label: "Qualification Agent" },
  { id: "meeting", label: "Meeting Agent" },
  { id: "crm-insights", label: "CRM & Insights Agent" },
] as const;

type TabId = (typeof tabs)[number]["id"];

interface LeadProfile {
  initials: string;
  name: string;
  role: string;
  company: string;
  intentScore: number;
}

const leadProfiles: LeadProfile[] = [
  {
    initials: "KH",
    name: "Katherine Harris",
    role: "VP of Growth",
    company: "TechFlow",
    intentScore: 92,
  },
  {
    initials: "LB",
    name: "Lauren Bennett",
    role: "Director of Product",
    company: "Nova Systems",
    intentScore: 89,
  },
  {
    initials: "DT",
    name: "Daniel Thompson",
    role: "Director of Product",
    company: "Nova Systems",
    intentScore: 72,
  },
];

function getScoreColor(score: number): string {
  if (score >= 80) return "bg-green-500";
  if (score >= 60) return "bg-yellow-500";
  return "bg-red-500";
}

function getScoreTrackColor(score: number): string {
  if (score >= 80) return "bg-green-100";
  if (score >= 60) return "bg-yellow-100";
  return "bg-red-100";
}

function LeadCard({ lead }: { lead: LeadProfile }) {
  return (
    <div className="flex items-start gap-3 py-4 border-b border-[#E4E7EC] last:border-b-0">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#155EEF] flex items-center justify-center text-white text-sm font-semibold">
        {lead.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-[#101828]">{lead.name}</p>
            <p className="text-xs text-[#667085]">
              {lead.role} at {lead.company}
            </p>
          </div>
          <span className="flex-shrink-0 bg-green-50 text-green-700 rounded-full text-xs px-2 py-0.5 font-medium">
            Added to CRM
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs text-[#667085] whitespace-nowrap">
            Intent Score
          </span>
          <div
            className={`flex-1 h-2 rounded-full ${getScoreTrackColor(lead.intentScore)}`}
          >
            <div
              className={`h-2 rounded-full ${getScoreColor(lead.intentScore)} transition-all duration-300`}
              style={{ width: `${lead.intentScore}%` }}
            />
          </div>
          <span className="text-xs font-medium text-[#344054] whitespace-nowrap">
            {lead.intentScore}/100
          </span>
        </div>
      </div>
    </div>
  );
}

function LeadResearchContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-2xl font-semibold text-[#101828] mb-4">
          AI Lead Research Agent
        </h3>
        <p className="text-base text-[#667085] leading-7 mb-6">
          Discover new opportunities automatically. Omni Agent scans the web,
          funding databases, and job signals to find high-potential leads that
          match your ICP — before your competitors even notice.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg bg-[#155EEF] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#1249c4] transition-colors"
        >
          Get Started
        </a>
      </div>
      <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-sm font-medium text-[#344054]">
            Live Lead Discovery
          </span>
        </div>
        {leadProfiles.map((lead) => (
          <LeadCard key={lead.name} lead={lead} />
        ))}
      </div>
    </div>
  );
}

const placeholderDescriptions: Record<
  Exclude<TabId, "lead-research">,
  { title: string; description: string }
> = {
  outreach: {
    title: "AI Outreach Agent",
    description:
      "Craft personalized outreach sequences at scale. The Outreach Agent generates tailored emails, LinkedIn messages, and follow-ups based on each prospect's profile, ensuring every touchpoint feels human and relevant.",
  },
  qualification: {
    title: "AI Qualification Agent",
    description:
      "Instantly qualify inbound and outbound leads. The Qualification Agent scores prospects based on fit, intent, and engagement — so your team only spends time on leads most likely to convert.",
  },
  meeting: {
    title: "AI Meeting Agent",
    description:
      "Never miss a meeting opportunity. The Meeting Agent handles scheduling, sends reminders, prepares briefing docs, and follows up after calls — keeping your pipeline moving without manual effort.",
  },
  "crm-insights": {
    title: "AI CRM & Insights Agent",
    description:
      "Keep your CRM accurate and actionable. The CRM & Insights Agent automatically logs activities, enriches contact data, and surfaces deal insights so you always know where every opportunity stands.",
  },
};

function PlaceholderContent({ tabId }: { tabId: Exclude<TabId, "lead-research"> }) {
  const content = placeholderDescriptions[tabId];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-2xl font-semibold text-[#101828] mb-4">
          {content.title}
        </h3>
        <p className="text-base text-[#667085] leading-7 mb-6">
          {content.description}
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg bg-[#155EEF] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#1249c4] transition-colors"
        >
          Get Started
        </a>
      </div>
      <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-sm p-6 flex items-center justify-center min-h-[280px]">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-[#EFF4FF] flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-[#155EEF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-[#344054]">{content.title}</p>
          <p className="text-xs text-[#667085] mt-1">Coming soon</p>
        </div>
      </div>
    </div>
  );
}

export default function AgentsPipelineSection() {
  const [activeTab, setActiveTab] = useState<TabId>("lead-research");

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#101828] mb-4">
            AI Agents that run your entire sales pipeline
          </h2>
          <p className="text-lg text-[#667085] max-w-2xl mx-auto">
            Omni Agent handles every part of the sales process — from finding
            prospects to closing deals — so you never lose a lead again.
          </p>
        </div>

        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "bg-[#155EEF] text-white"
                  : "bg-[#F9FAFB] text-[#344054] hover:bg-[#F2F4F7]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div
            key={activeTab}
            className="animate-fade-in"
          >
            {activeTab === "lead-research" ? (
              <LeadResearchContent />
            ) : (
              <PlaceholderContent tabId={activeTab} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
