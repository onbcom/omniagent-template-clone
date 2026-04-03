"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Icons                                                               */
/* ------------------------------------------------------------------ */

function CheckIcon({ color }: { readonly color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4.5 10.5L8 14L15.5 6.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ color }: { readonly color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M 9 3.333 L 13.667 8 L 9 12.667 M 2.333 8 L 13.333 8"
        stroke={color}
        strokeWidth="1.33"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface PricingPlan {
  readonly name: string;
  readonly price: string;
  readonly period: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly isDark: boolean;
}

const MONTHLY_PLANS: readonly PricingPlan[] = [
  {
    name: "Starter",
    price: "$199",
    period: "/month",
    description: "Engage up to 2,000 contacts per month using 1 agent",
    features: [
      "Email + SMS outreach",
      "Core AI personalization & follow-ups",
      "Team collaboration (2 seats)",
      "Basic analytics dashboard",
    ],
    isDark: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Engage up to 2,000 contacts per month using 5 agent",
    features: [
      "Email + SMS outreach",
      "Core AI personalization & follow-ups",
      "Team collaboration (2 seats)",
      "Basic analytics dashboard",
    ],
    isDark: true,
  },
];

const YEARLY_PLANS: readonly PricingPlan[] = [
  {
    name: "Starter",
    price: "$159",
    period: "/month",
    description: "Engage up to 2,000 contacts per month using 1 agent",
    features: [
      "Email + SMS outreach",
      "Core AI personalization & follow-ups",
      "Team collaboration (2 seats)",
      "Basic analytics dashboard",
    ],
    isDark: false,
  },
  {
    name: "Professional",
    price: "$249",
    period: "/month",
    description: "Engage up to 2,000 contacts per month using 5 agent",
    features: [
      "Email + SMS outreach",
      "Core AI personalization & follow-ups",
      "Team collaboration (2 seats)",
      "Basic analytics dashboard",
    ],
    isDark: true,
  },
];

/* ------------------------------------------------------------------ */
/*  PricingCard                                                         */
/* ------------------------------------------------------------------ */

function PricingCard({ plan }: { readonly plan: PricingPlan }) {
  const textColor = plan.isDark ? "rgb(255, 255, 255)" : "rgb(24, 34, 48)";
  const priceColor = plan.isDark ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";
  const featureColor = plan.isDark ? "rgb(223, 229, 240)" : "rgb(12, 17, 29)";
  const periodColor = plan.isDark ? "rgb(255, 255, 255)" : "rgb(23, 23, 23)";
  const checkColor = plan.isDark ? "rgb(223, 229, 240)" : "rgb(12, 17, 29)";

  return (
    <div
      className="flex flex-1 flex-col overflow-hidden"
      style={{
        borderRadius: 20,
        background: plan.isDark
          ? "linear-gradient(rgb(56, 62, 81) 0%, rgb(2, 12, 29) 100%)"
          : "rgb(255, 255, 255)",
      }}
    >
      <div
        className="flex flex-col"
        style={{ paddingTop: 60, paddingLeft: 50, gap: 33 }}
      >
        {/* Title + Price */}
        <div className="flex flex-col" style={{ gap: 14 }}>
          <h3
            style={{
              fontSize: 32.6,
              fontWeight: 600,
              color: textColor,
              lineHeight: "39.12px",
              letterSpacing: "-0.652px",
              margin: 0,
            }}
          >
            {plan.name}
          </h3>
          <div className="flex items-baseline gap-1">
            <span
              style={{
                fontSize: 37.6,
                fontWeight: 700,
                color: priceColor,
                lineHeight: "45.12px",
                letterSpacing: "-0.752px",
              }}
            >
              {plan.price}
            </span>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: periodColor,
                lineHeight: "28px",
                letterSpacing: "-0.4px",
              }}
            >
              {plan.period}
            </span>
          </div>
        </div>

        {/* Features */}
        <div
          className="flex flex-col"
          style={{ gap: 13, paddingRight: 10, paddingBottom: 40 }}
        >
          {/* Description as first feature */}
          <div className="flex items-start" style={{ gap: 6 }}>
            <CheckIcon color={checkColor} />
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: featureColor,
                lineHeight: "25.6px",
                letterSpacing: "-0.32px",
                margin: 0,
              }}
            >
              {plan.description}
            </p>
          </div>
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start" style={{ gap: 6 }}>
              <CheckIcon color={checkColor} />
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: featureColor,
                  lineHeight: "25.6px",
                  letterSpacing: "-0.32px",
                  margin: 0,
                }}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div style={{ padding: "0 50px 30px" }}>
        <a
          href="#"
          className="flex w-full items-center justify-center no-underline"
          style={{
            height: 52,
            borderRadius: 1000,
            backgroundColor: plan.isDark
              ? "rgb(21, 94, 239)"
              : "rgb(244, 248, 255)",
            padding: "12px 10px 12px 20px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: plan.isDark ? "rgb(255, 255, 255)" : "rgb(16, 24, 40)",
              lineHeight: "25.6px",
              letterSpacing: "-0.32px",
            }}
          >
            Get Started
          </span>
          <span
            className="ml-2 flex items-center justify-center"
            style={{ width: 28, height: 28 }}
          >
            <span
              className="flex items-center justify-center"
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: plan.isDark
                  ? "rgb(255, 255, 255)"
                  : "rgb(12, 17, 29)",
              }}
            >
              <ArrowIcon
                color={plan.isDark ? "#155EEF" : "#FFFFFF"}
              />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                      */
/* ------------------------------------------------------------------ */

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? YEARLY_PLANS : MONTHLY_PLANS;

  return (
    <section
      id="pricing"
      className="flex w-full justify-center"
      style={{ backgroundColor: "rgb(244, 248, 255)" }}
    >
      <div
        className="flex flex-col items-center"
        style={{
          maxWidth: 1150,
          width: "100%",
          padding: "40px 0",
          gap: 43,
        }}
      >
        {/* ---- Heading ---- */}
        <h2 className="text-center" style={{ margin: 0 }}>
          <span
            style={{
              fontSize: 37.6,
              fontWeight: 700,
              color: "rgb(102, 112, 133)",
              lineHeight: "45.12px",
              letterSpacing: "-0.752px",
            }}
          >
            Simple, Transparent Pricing{" "}
          </span>
          <span
            style={{
              fontSize: 37.6,
              fontWeight: 700,
              color: "rgb(0, 0, 0)",
              lineHeight: "45.12px",
              letterSpacing: "-0.752px",
            }}
          >
            You Can Trust
          </span>
        </h2>

        {/* ---- Toggle ---- */}
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: "rgb(209, 224, 255)",
            borderRadius: 50,
            width: 275,
            height: 62,
            padding: 5.5,
          }}
        >
          <button
            type="button"
            onClick={() => setIsYearly(false)}
            className="flex flex-1 items-center justify-center"
            style={{
              height: 51,
              borderRadius: 30,
              backgroundColor: !isYearly ? "rgb(255, 255, 255)" : "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "rgb(23, 23, 23)",
                lineHeight: "28px",
                letterSpacing: "-0.4px",
              }}
            >
              Monthly
            </span>
          </button>
          <button
            type="button"
            onClick={() => setIsYearly(true)}
            className="flex flex-1 items-center justify-center"
            style={{
              height: 51,
              borderRadius: 30,
              backgroundColor: isYearly ? "rgb(255, 255, 255)" : "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "rgb(23, 23, 23)",
                lineHeight: "28px",
                letterSpacing: "-0.4px",
              }}
            >
              Yearly
            </span>
          </button>
        </div>

        {/* ---- Cards ---- */}
        <div
          className="flex w-full flex-col gap-6 px-5 md:flex-row"
          style={{
            borderRadius: 20,
            padding: 20,
            gap: 23,
          }}
        >
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
