import {
  CalendarCheck,
  UserCheck,
  Mail,
  ClipboardList,
  FileText,
  RefreshCw,
  Bot,
} from "lucide-react";
import type { ReactNode } from "react";

interface ActivityItem {
  icon: ReactNode;
  dotColor: string;
  title: string;
  subtitle: string;
}

const activityItems: ActivityItem[] = [
  {
    icon: <CalendarCheck className="h-4 w-4" />,
    dotColor: "bg-blue-500",
    title: "Meeting scheduled",
    subtitle: "3:00 PM Tomorrow",
  },
  {
    icon: <UserCheck className="h-4 w-4" />,
    dotColor: "bg-green-500",
    title: "Lead status updated",
    subtitle: "Marked as Contacted",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    dotColor: "bg-purple-500",
    title: "Follow-up email sent",
    subtitle: 'Re: Project Proposal',
  },
  {
    icon: <ClipboardList className="h-4 w-4" />,
    dotColor: "bg-orange-500",
    title: "Task assigned",
    subtitle: "SDR notified for follow-up",
  },
  {
    icon: <FileText className="h-4 w-4" />,
    dotColor: "bg-blue-500",
    title: "Content personalized",
    subtitle: "Proposal customized for Acme Inc.",
  },
  {
    icon: <RefreshCw className="h-4 w-4" />,
    dotColor: "bg-green-500",
    title: "CRM sync complete",
    subtitle: "Data pushed to Salesforce",
  },
];

const repeatedItems: ActivityItem[] = [
  {
    icon: <CalendarCheck className="h-4 w-4" />,
    dotColor: "bg-blue-500",
    title: "Meeting scheduled",
    subtitle: "10:00 AM Friday",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    dotColor: "bg-purple-500",
    title: "Follow-up email sent",
    subtitle: "Re: Partnership Discussion",
  },
  {
    icon: <UserCheck className="h-4 w-4" />,
    dotColor: "bg-green-500",
    title: "Lead status updated",
    subtitle: "Marked as Qualified",
  },
];

const rules = [
  "Only reply to ICP",
  "Office hours 9-5",
  "Escalate if pricing asked",
];

function ActivityRow({ item }: { item: ActivityItem }) {
  return (
    <div className="flex items-start gap-3 py-2.5 px-4">
      <div
        className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${item.dotColor} text-white`}
      >
        {item.icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#344054]">{item.title}</p>
        <p className="text-xs text-[#667085]">{item.subtitle}</p>
      </div>
    </div>
  );
}

export default function SignalResponseSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-12">
        {/* Left column — text */}
        <div className="flex flex-col items-start">
          <h2
            className="text-[36px] font-semibold leading-[1.2] tracking-[-0.72px] text-[#0C111D]"
          >
            Sees every signal. Responds in seconds.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#475467]">
            Omni SDR watches email opens, link clicks, form fills, and LinkedIn
            replies&mdash;then follows up instantly with context-aware messages,
            turning interest into meetings.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#155EEF] px-6 py-3 font-medium text-white transition-colors hover:bg-[#1249cc]"
          >
            Get Started
          </a>
        </div>

        {/* Right column — activity feed mockup */}
        <div className="w-full overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-lg">
          {/* Card header */}
          <div className="flex items-center justify-between border-b border-[#E4E7EC] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#155EEF] text-white">
                <Bot className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold text-[#344054]">
                Omni Agent
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF3] px-2.5 py-1 text-xs font-medium text-[#027A48]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#027A48]" />
              Auto-Reply is On
            </span>
          </div>

          {/* Activity feed */}
          <div className="max-h-[360px] divide-y divide-[#F2F4F7] overflow-y-auto">
            {activityItems.map((item, i) => (
              <ActivityRow key={`primary-${i}`} item={item} />
            ))}
            {repeatedItems.map((item, i) => (
              <ActivityRow key={`repeated-${i}`} item={item} />
            ))}
          </div>

          {/* Rules footer */}
          <div className="border-t border-[#E4E7EC] px-4 py-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#667085]">
              Rules
            </p>
            <div className="flex flex-wrap gap-2">
              {rules.map((rule) => (
                <span
                  key={rule}
                  className="rounded-full border border-[#E4E7EC] bg-[#F9FAFB] px-3 py-1 text-xs text-[#344054]"
                >
                  {rule}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
