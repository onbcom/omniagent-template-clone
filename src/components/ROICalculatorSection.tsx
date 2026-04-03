"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Main export — ROI Calculator (static mockup with toggle)            */
/* ------------------------------------------------------------------ */

export default function ROICalculatorSection() {
  const [mode, setMode] = useState<"rep" | "team">("team");
  const [hours, setHours] = useState(30);

  // Derived values (simplified deterministic calc matching source defaults)
  const prospectingSavings = Math.round((hours * 52 * 35 * 0.6) / 100) / 10;
  const schedulingSavings = Math.round((hours * 52 * 35 * 0.15) / 100) / 10;
  const totalSavings = Math.round((prospectingSavings + schedulingSavings) * 10) / 10;
  const prospectingDays = Math.round(hours * 52 * 0.6 / 8);
  const schedulingDays = Math.round(hours * 52 * 0.15 / 8);

  // Team multiplier
  const teamMultiplier = mode === "team" ? 5 : 1;
  const displaySavings = totalSavings * teamMultiplier;
  const displayProspecting = prospectingSavings * teamMultiplier;
  const displayScheduling = schedulingSavings * teamMultiplier;
  const displayProspectingDays = prospectingDays * teamMultiplier;
  const displaySchedulingDays = schedulingDays * teamMultiplier;

  // 3-year projections
  const netSavings3yr = displaySavings * 3 - 23.9;
  const roi = Math.round((displaySavings / 23.9) * 100);
  const payback = Math.round((23.9 / displaySavings) * 12 * 10) / 10;

  function formatK(n: number): string {
    if (n >= 1000) return `$${(n / 1).toFixed(1)}K`;
    if (n >= 100) return `$${n.toFixed(1)}K`;
    return `$${n.toFixed(1)}K`;
  }

  return (
    <section
      className="flex w-full flex-col items-center bg-[#F4F8FF]"
      style={{ padding: "60px 0px 40px" }}
    >
      {/* Calculator card */}
      <div
        className="w-full bg-white"
        style={{
          maxWidth: 1100,
          borderRadius: "24px",
          boxShadow: "rgba(157, 186, 227, 0.12) 0px 12px 40px 0px",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between border-b"
          style={{
            padding: "24px 40px",
            borderColor: "rgb(228, 231, 236)",
          }}
        >
          {/* Toggle */}
          <div
            className="flex overflow-hidden"
            style={{
              borderRadius: "10px",
              border: "1px solid rgb(228, 231, 236)",
            }}
          >
            <button
              type="button"
              onClick={() => setMode("rep")}
              style={{
                padding: "8px 20px",
                fontSize: "14px",
                fontWeight: 600,
                color:
                  mode === "rep"
                    ? "rgb(15, 23, 42)"
                    : "rgb(100, 116, 139)",
                backgroundColor:
                  mode === "rep" ? "rgb(248, 250, 252)" : "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Per Rep
            </button>
            <button
              type="button"
              onClick={() => setMode("team")}
              style={{
                padding: "8px 20px",
                fontSize: "14px",
                fontWeight: 600,
                color:
                  mode === "team"
                    ? "rgb(15, 23, 42)"
                    : "rgb(100, 116, 139)",
                backgroundColor:
                  mode === "team" ? "rgb(248, 250, 252)" : "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Team
            </button>
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "rgb(15, 23, 42)",
              lineHeight: "32px",
              letterSpacing: "-0.96px",
              margin: 0,
            }}
          >
            Omni Agent &mdash; Prospecting &amp; Outreach
          </h2>
        </div>

        {/* Body — two columns */}
        <div className="flex flex-col md:flex-row">
          {/* Left — inputs & breakdown */}
          <div
            className="flex flex-1 flex-col border-r"
            style={{
              padding: "32px 40px",
              borderColor: "rgb(228, 231, 236)",
              gap: "28px",
            }}
          >
            {/* Slider */}
            <div>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "rgb(15, 23, 42)",
                  lineHeight: "19.5px",
                  letterSpacing: "-0.15px",
                  margin: "0 0 16px",
                }}
              >
                Weekly prospecting time (in hours)
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setHours(Math.max(5, hours - 5))}
                  className="flex items-center justify-center rounded-lg border"
                  style={{
                    width: 40,
                    height: 40,
                    borderColor: "rgb(228, 231, 236)",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "rgb(15, 23, 42)",
                  }}
                >
                  &minus;
                </button>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="text-center">
                    <span
                      style={{
                        fontSize: "28px",
                        fontWeight: 700,
                        color: "rgb(15, 23, 42)",
                      }}
                    >
                      {hours}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={60}
                    step={5}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full"
                    style={{ accentColor: "#155EEF" }}
                    aria-label="Weekly prospecting hours"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setHours(Math.min(60, hours + 5))}
                  className="flex items-center justify-center rounded-lg border"
                  style={{
                    width: 40,
                    height: 40,
                    borderColor: "rgb(228, 231, 236)",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "rgb(15, 23, 42)",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Result cards */}
            <div className="flex flex-col gap-4">
              <ResultCard
                title="Prospecting Automation"
                description="Reduced time researching leads and drafting personalized outreach."
                value={formatK(displayProspecting)}
                note={`\u2248 ${displayProspectingDays} days saved/yr`}
              />
              <ResultCard
                title="Scheduling & Admin"
                description="Reduced time scheduling meetings, updating CRM, and follow\u2011ups."
                value={formatK(displayScheduling)}
                note={`\u2248 ${displaySchedulingDays} days saved/yr`}
              />
            </div>

            <button
              type="button"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#155EEF",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: 0,
              }}
            >
              Advanced inputs
            </button>
          </div>

          {/* Right — summary */}
          <div
            className="flex flex-1 flex-col items-center justify-center"
            style={{
              padding: "40px",
              gap: "24px",
              backgroundColor: "rgb(248, 250, 252)",
            }}
          >
            {/* Hero stat */}
            <div className="text-center">
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "rgb(100, 116, 139)",
                  margin: "0 0 4px",
                }}
              >
                Your {mode === "team" ? "team" : "rep"} can save
              </p>
              <p
                style={{
                  fontSize: "56px",
                  fontWeight: 700,
                  color: "#155EEF",
                  lineHeight: "1",
                  margin: "0 0 4px",
                  letterSpacing: "-2px",
                }}
              >
                {formatK(displaySavings)}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "rgb(100, 116, 139)",
                  margin: 0,
                }}
              >
                per year
              </p>
            </div>

            {/* Context */}
            <p
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "rgb(15, 23, 42)",
                lineHeight: "19.5px",
                letterSpacing: "-0.15px",
                margin: 0,
                textAlign: "center",
              }}
            >
              In three years, for {mode === "team" ? "5 SDRs" : "1 SDR"} and
              $35/hr wages,
            </p>

            {/* Stats grid */}
            <div className="grid w-full grid-cols-2 gap-3">
              <StatBox label="Payback period" value={`${payback} Months`} />
              <StatBox label="ROI" value={`${roi}%`} />
              <StatBox label="Net Savings" value={formatK(netSavings3yr)} />
              <StatBox label="Tool Cost (yr)" value="$23.9K" />
            </div>

            {/* Download Report */}
            <button
              type="button"
              className="w-full rounded-xl border"
              style={{
                padding: "12px 24px",
                fontSize: "15px",
                fontWeight: 600,
                color: "rgb(15, 23, 42)",
                backgroundColor: "white",
                borderColor: "rgb(228, 231, 236)",
                cursor: "pointer",
              }}
            >
              Download Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                      */
/* ------------------------------------------------------------------ */

function ResultCard({
  title,
  description,
  value,
  note,
}: {
  readonly title: string;
  readonly description: string;
  readonly value: string;
  readonly note: string;
}) {
  return (
    <div
      className="rounded-xl border"
      style={{
        padding: "16px 20px",
        borderColor: "rgb(228, 231, 236)",
      }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "rgb(15, 23, 42)",
          }}
        >
          {title}
        </span>
        {/* Info icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="8"
            cy="8"
            r="7"
            stroke="rgb(148, 163, 184)"
            strokeWidth="1.5"
          />
          <path
            d="M8 7V11"
            stroke="rgb(148, 163, 184)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="8" cy="5" r="0.75" fill="rgb(148, 163, 184)" />
        </svg>
      </div>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 400,
          color: "rgb(100, 116, 139)",
          margin: "0 0 12px",
          lineHeight: "18px",
        }}
      >
        {description}
      </p>
      <div className="flex items-baseline justify-between">
        <span
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#155EEF",
            letterSpacing: "-0.5px",
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "rgb(100, 116, 139)",
          }}
        >
          {note}
        </span>
      </div>
    </div>
  );
}

function StatBox({
  label,
  value,
}: {
  readonly label: string;
  readonly value: string;
}) {
  return (
    <div
      className="rounded-xl bg-white"
      style={{
        padding: "14px 16px",
        boxShadow: "rgba(157, 186, 227, 0.08) 0px 2px 8px 0px",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          fontWeight: 500,
          color: "rgb(100, 116, 139)",
          margin: "0 0 4px",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "rgb(15, 23, 42)",
          margin: 0,
        }}
      >
        {value}
      </p>
    </div>
  );
}
