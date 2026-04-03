"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface Step {
  readonly tabLabel: string;
  readonly title: string;
  readonly description: string;
}

const STEPS: readonly Step[] = [
  {
    tabLabel: "Prospect",
    title: "Find qualified leads",
    description:
      "AI pulls fresh contacts that match your ICP and enriches them with live firmographic data.",
  },
  {
    tabLabel: "Personalise",
    title: "Craft tailored messages",
    description:
      "Each touchpoint references the prospect\u2019s role, recent news, and tech stack\u2014so it reads like a human wrote it.",
  },
  {
    tabLabel: "Book",
    title: "Auto-book meetings",
    description:
      "Omni SDR handles objections, follows up at the perfect time, and drops confirmed calls straight into your calendar.",
  },
];

/* ------------------------------------------------------------------ */
/*  Step Card Icon (abstract illustration per step)                     */
/* ------------------------------------------------------------------ */

function StepIcon({ stepIndex }: { readonly stepIndex: number }) {
  const colors = ["#155EEF", "#12B76A", "#F79009"];
  const color = colors[stepIndex] ?? "#155EEF";

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: 270, height: 185, position: "relative" }}
    >
      {/* Abstract shape */}
      <svg
        width="200"
        height="160"
        viewBox="0 0 200 160"
        fill="none"
        aria-hidden="true"
      >
        {/* Search/target icon for Prospect */}
        {stepIndex === 0 && (
          <>
            <circle cx="100" cy="80" r="50" stroke={color} strokeWidth="2" fill="none" opacity="0.2" />
            <circle cx="100" cy="80" r="30" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
            <circle cx="100" cy="80" r="10" fill={color} opacity="0.6" />
            <line x1="130" y1="110" x2="160" y2="140" stroke={color} strokeWidth="3" strokeLinecap="round" />
            {/* Data bars */}
            <rect x="20" y="40" width="30" height="6" rx="3" fill={color} opacity="0.15" />
            <rect x="20" y="55" width="40" height="6" rx="3" fill={color} opacity="0.25" />
            <rect x="20" y="70" width="25" height="6" rx="3" fill={color} opacity="0.15" />
          </>
        )}
        {/* Pen/message icon for Personalise */}
        {stepIndex === 1 && (
          <>
            <rect x="40" y="30" width="120" height="100" rx="12" stroke={color} strokeWidth="2" fill="none" opacity="0.2" />
            <rect x="55" y="50" width="70" height="6" rx="3" fill={color} opacity="0.3" />
            <rect x="55" y="65" width="90" height="6" rx="3" fill={color} opacity="0.2" />
            <rect x="55" y="80" width="50" height="6" rx="3" fill={color} opacity="0.15" />
            <circle cx="155" cy="35" r="18" fill={color} opacity="0.15" />
            <path d="M150 30L155 40L160 30" stroke={color} strokeWidth="2" fill="none" />
          </>
        )}
        {/* Calendar icon for Book */}
        {stepIndex === 2 && (
          <>
            <rect x="40" y="20" width="120" height="120" rx="12" stroke={color} strokeWidth="2" fill="none" opacity="0.2" />
            <line x1="40" y1="55" x2="160" y2="55" stroke={color} strokeWidth="1.5" opacity="0.2" />
            <rect x="60" y="70" width="20" height="20" rx="4" fill={color} opacity="0.15" />
            <rect x="90" y="70" width="20" height="20" rx="4" fill={color} opacity="0.4" />
            <rect x="120" y="70" width="20" height="20" rx="4" fill={color} opacity="0.15" />
            <rect x="60" y="100" width="20" height="20" rx="4" fill={color} opacity="0.1" />
            <rect x="90" y="100" width="20" height="20" rx="4" fill={color} opacity="0.1" />
            <circle cx="100" cy="37" r="3" fill={color} opacity="0.3" />
            <line x1="70" y1="15" x2="70" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
            <line x1="130" y1="15" x2="130" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          </>
        )}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = STEPS[activeStep];

  return (
    <section
      className="flex w-full justify-center"
      style={{
        backgroundColor: "rgb(244, 248, 255)",
        paddingTop: 60,
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{
          position: "sticky",
          top: 0,
          paddingTop: 30,
          width: "100%",
          maxWidth: 1150,
          gap: 27,
        }}
      >
        {/* ---- Heading ---- */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            padding: "0 20px",
            maxWidth: 1150,
            width: "100%",
            gap: 13,
          }}
        >
          <h3
            className="text-center"
            style={{
              fontSize: 32.6,
              fontWeight: 600,
              color: "rgb(12, 17, 29)",
              lineHeight: "39.12px",
              letterSpacing: "-0.652px",
              maxWidth: 600,
              margin: 0,
            }}
          >
            Omni SDR prospects, personalizes, and books
            meetings&mdash;automatically.
          </h3>
        </div>

        {/* ---- Step Content ---- */}
        <div
          className="flex flex-col items-center"
          style={{ maxWidth: 1150, width: "100%", gap: 38 }}
        >
          {/* Tab Switcher */}
          <div
            className="flex items-center justify-center"
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: 132.95,
              padding: "0 20px",
              height: 62,
              width: "fit-content",
            }}
          >
            <div
              className="flex items-center"
              style={{
                borderRadius: 117.31,
                padding: 10,
                gap: 0,
              }}
            >
              {STEPS.map((s, index) => (
                <button
                  key={s.tabLabel}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className="relative flex items-center justify-center border-none"
                  style={{
                    borderRadius: 140,
                    padding: "0 16px",
                    height: 42,
                    backgroundColor:
                      index === activeStep
                        ? "rgb(21, 94, 239)"
                        : "transparent",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color:
                        index === activeStep
                          ? "rgb(255, 255, 255)"
                          : "rgb(25, 26, 28)",
                      lineHeight: "25.6px",
                      letterSpacing: "-0.32px",
                    }}
                  >
                    {s.tabLabel}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Card */}
          <div
            className="flex flex-col items-center"
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: 20,
              padding: "0 40px 24px",
              width: 350,
              maxWidth: "100%",
            }}
          >
            {/* Icon Area */}
            <StepIcon stepIndex={activeStep} />

            {/* Text */}
            <div className="flex flex-col items-center gap-3 text-center">
              <h5
                style={{
                  fontSize: 22.6,
                  fontWeight: 700,
                  color: "rgb(12, 17, 29)",
                  lineHeight: "31.64px",
                  letterSpacing: "-0.452px",
                  margin: 0,
                }}
              >
                {step.title}
              </h5>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "rgb(71, 84, 103)",
                  lineHeight: "25.6px",
                  letterSpacing: "-0.32px",
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
