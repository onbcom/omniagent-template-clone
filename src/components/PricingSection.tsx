"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type BillingPeriod = "monthly" | "yearly";

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  agentCount: string;
  highlighted: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    monthlyPrice: 199,
    yearlyPrice: 169,
    agentCount: "1 agent",
    highlighted: false,
  },
  {
    name: "Professional",
    monthlyPrice: 299,
    yearlyPrice: 249,
    agentCount: "5 agents",
    highlighted: true,
  },
];

function getFeatures(agentCount: string): string[] {
  return [
    `Engage up to 2,000 contacts per month using ${agentCount}`,
    "Email + SMS outreach",
    "Core AI personalization & follow-ups",
    "Team collaboration (2 seats)",
    "Basic analytics dashboard",
  ];
}

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <h2
          className="text-center font-semibold text-[#0C111D]"
          style={{ fontSize: "36px" }}
        >
          Simple, Transparent Pricing You Can Trust
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex rounded-full bg-[#F4F8FF] p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                billing === "monthly"
                  ? "bg-[#155EEF] text-white"
                  : "bg-transparent text-[#344054]"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                billing === "yearly"
                  ? "bg-[#155EEF] text-white"
                  : "bg-transparent text-[#344054]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => {
            const price =
              billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const features = getFeatures(plan.agentCount);

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border relative ${
                  plan.highlighted
                    ? "bg-[#191A1C] border-[#2A2B2D]"
                    : "bg-white border-[#E4E7EC]"
                }`}
              >
                <h3 className={`text-lg font-semibold ${plan.highlighted ? "text-white" : "text-[#0C111D]"}`}>
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-end gap-1">
                  <span className={`text-[48px] font-bold leading-none ${plan.highlighted ? "text-white" : "text-[#0C111D]"}`}>
                    ${price}
                  </span>
                  <span className={`text-[16px] font-normal mb-1 ${plan.highlighted ? "text-white/60" : "text-[#667085]"}`}>
                    /month
                  </span>
                </div>

                {billing === "yearly" && (
                  <p className={`text-sm mt-1 ${plan.highlighted ? "text-white/60" : "text-[#667085]"}`}>
                    Billed annually
                  </p>
                )}

                <ul className="mt-8 space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 size-5 shrink-0 ${plan.highlighted ? "text-[#5EBCFF]" : "text-[#155EEF]"}`}
                        strokeWidth={2}
                      />
                      <span className={`text-[14px] ${plan.highlighted ? "text-white/80" : "text-[#475467]"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`mt-8 w-full py-3 rounded-full text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-[#155EEF] text-white hover:bg-[#1249cc]"
                      : "border border-[#155EEF] text-[#155EEF] bg-white hover:bg-[#F4F8FF]"
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
