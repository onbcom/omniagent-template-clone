"use client";

import { useState, useCallback } from "react";
import { ChevronDown, Download, ArrowRight, Minus, Plus } from "lucide-react";

type ViewMode = "perRep" | "team";

interface CurrencyOption {
  symbol: string;
  code: string;
}

const currencies: CurrencyOption[] = [
  { symbol: "$", code: "USD" },
  { symbol: "€", code: "EUR" },
  { symbol: "£", code: "GBP" },
  { symbol: "₹", code: "INR" },
];

interface CalculatorInputs {
  weeklyProspectingHours: number;
  hourlyWage: number;
  numberOfSDRs: number;
  meetingsPerRepMonth: number;
  averageDealSize: number;
  closeRate: number;
  expectedUplift: number;
  pricePerSeatMonth: number;
}

function computeResults(inputs: CalculatorInputs, mode: ViewMode) {
  const multiplier = mode === "team" ? inputs.numberOfSDRs : 1;
  const weeksPerYear = 52;
  const hoursPerDay = 8;

  // Prospecting automation saves ~80% of prospecting time
  const prospectingAutomationRate = 0.8;
  const prospectingHoursSavedPerYear =
    inputs.weeklyProspectingHours * prospectingAutomationRate * weeksPerYear * multiplier;
  const prospectingDaysSaved = Math.round(prospectingHoursSavedPerYear / hoursPerDay);
  const prospectingSavings = prospectingHoursSavedPerYear * inputs.hourlyWage;

  // Scheduling & admin saves ~20% of prospecting time
  const schedulingAutomationRate = 0.2;
  const schedulingHoursSavedPerYear =
    inputs.weeklyProspectingHours * schedulingAutomationRate * weeksPerYear * multiplier;
  const schedulingDaysSaved = Math.round(schedulingHoursSavedPerYear / hoursPerDay);
  const schedulingSavings = schedulingHoursSavedPerYear * inputs.hourlyWage;

  const totalSavings = prospectingSavings + schedulingSavings;

  // Tool cost
  const toolCostYear = inputs.pricePerSeatMonth * 12 * multiplier;

  // Net savings
  const netSavings = totalSavings - toolCostYear;

  // ROI
  const roi = toolCostYear > 0 ? ((totalSavings - toolCostYear) / toolCostYear) * 100 : 0;

  // Payback period in months
  const monthlySavings = totalSavings / 12;
  const paybackMonths = monthlySavings > 0 ? (toolCostYear / monthlySavings) : 0;

  // Three-year net
  const threeYearNet = totalSavings * 3 - toolCostYear * 3;

  return {
    prospectingSavings,
    prospectingDaysSaved,
    schedulingSavings,
    schedulingDaysSaved,
    totalSavings,
    toolCostYear,
    netSavings,
    roi,
    paybackMonths,
    threeYearNet,
  };
}

function formatCurrency(value: number, symbol: string): string {
  if (value >= 1_000_000) {
    return `${symbol}${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `${symbol}${(value / 1_000).toFixed(1)}K`;
  }
  return `${symbol}${value.toFixed(0)}`;
}

export default function ROICalculatorSection() {
  const [mode, setMode] = useState<ViewMode>("team");
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [inputs, setInputs] = useState<CalculatorInputs>({
    weeklyProspectingHours: 30,
    hourlyWage: 35,
    numberOfSDRs: 5,
    meetingsPerRepMonth: 20,
    averageDealSize: 5000,
    closeRate: 25,
    expectedUplift: 15,
    pricePerSeatMonth: 399,
  });

  const currency = currencies[currencyIndex];
  const results = computeResults(inputs, mode);

  const updateInput = useCallback(
    <K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) => {
      setInputs((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const stepHours = (delta: number) => {
    updateInput(
      "weeklyProspectingHours",
      Math.max(1, Math.min(80, inputs.weeklyProspectingHours + delta))
    );
  };

  return (
    <section id="roi-calculator" className="py-20 px-4" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Toggle */}
          <div className="inline-flex items-center rounded-full p-1 mb-6" style={{ backgroundColor: "#F2F4F7" }}>
            <button
              onClick={() => setMode("perRep")}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: mode === "perRep" ? "#fff" : "transparent",
                color: mode === "perRep" ? "#101828" : "#667085",
                boxShadow: mode === "perRep" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}
            >
              Per Rep
            </button>
            <button
              onClick={() => setMode("team")}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: mode === "team" ? "#fff" : "transparent",
                color: mode === "team" ? "#101828" : "#667085",
                boxShadow: mode === "team" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}
            >
              Team
            </button>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#101828" }}>
            Omni Agent — Prospecting &amp; Outreach
          </h2>

          {/* Weekly hours stepper */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-sm" style={{ color: "#667085" }}>
              Weekly prospecting time (in hours)
            </span>
            <div className="inline-flex items-center gap-2 rounded-lg px-3 py-2" style={{ border: "1px solid #E4E7EC" }}>
              <button
                onClick={() => stepHours(-1)}
                className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Decrease hours"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center font-semibold text-sm" style={{ color: "#101828" }}>
                {inputs.weeklyProspectingHours}
              </span>
              <button
                onClick={() => stepHours(1)}
                className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Increase hours"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <StatCard
            title="Prospecting Automation"
            description="Reduced time researching leads and drafting personalized outreach."
            value={formatCurrency(results.prospectingSavings, currency.symbol)}
            sub={`\u2248 ${results.prospectingDaysSaved} days saved/yr`}
          />
          <StatCard
            title="Scheduling & Admin"
            description="Reduced time scheduling meetings, updating CRM, and follow-ups."
            value={formatCurrency(results.schedulingSavings, currency.symbol)}
            sub={`\u2248 ${results.schedulingDaysSaved} days saved/yr`}
          />
        </div>

        {/* Main Content: Inputs + Results */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Advanced Inputs */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#fff", border: "1px solid #E4E7EC" }}>
            <h3 className="text-lg font-semibold mb-6" style={{ color: "#101828" }}>
              Advanced Inputs
            </h3>

            {/* Currency selector */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-1.5" style={{ color: "#344054" }}>
                Currency
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowCurrencyDropdown((v) => !v)}
                  className="w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-left"
                  style={{ border: "1px solid #E4E7EC", color: "#101828" }}
                >
                  <span>
                    {currency.symbol} {currency.code}
                  </span>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
                {showCurrencyDropdown && (
                  <div
                    className="absolute top-full left-0 right-0 mt-1 rounded-lg shadow-lg z-10 py-1"
                    style={{ backgroundColor: "#fff", border: "1px solid #E4E7EC" }}
                  >
                    {currencies.map((c, i) => (
                      <button
                        key={c.code}
                        onClick={() => {
                          setCurrencyIndex(i);
                          setShowCurrencyDropdown(false);
                        }}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                        style={{ color: "#101828" }}
                      >
                        {c.symbol} {c.code}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <InputField
              label="Hourly wage"
              prefix={currency.symbol}
              value={inputs.hourlyWage}
              onChange={(v) => updateInput("hourlyWage", v)}
            />

            {mode === "team" && (
              <InputField
                label="Number of SDRs"
                value={inputs.numberOfSDRs}
                onChange={(v) => updateInput("numberOfSDRs", v)}
              />
            )}

            <InputField
              label="Meetings per rep / month"
              value={inputs.meetingsPerRepMonth}
              onChange={(v) => updateInput("meetingsPerRepMonth", v)}
            />

            <InputField
              label="Average deal size"
              prefix={currency.symbol}
              value={inputs.averageDealSize}
              onChange={(v) => updateInput("averageDealSize", v)}
            />

            <InputField
              label="Close rate (%)"
              suffix="%"
              value={inputs.closeRate}
              onChange={(v) => updateInput("closeRate", v)}
            />

            <InputField
              label="Expected uplift (%)"
              suffix="%"
              value={inputs.expectedUplift}
              onChange={(v) => updateInput("expectedUplift", v)}
            />

            <InputField
              label="Price per seat / month"
              prefix={currency.symbol}
              value={inputs.pricePerSeatMonth}
              onChange={(v) => updateInput("pricePerSeatMonth", v)}
            />
          </div>

          {/* Results Panel */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#fff", border: "1px solid #E4E7EC" }}>
            <p className="text-sm font-medium mb-1" style={{ color: "#667085" }}>
              {mode === "team" ? "Your team can save" : "You can save"}
            </p>
            <p
              className="font-bold mb-1"
              style={{ fontSize: "48px", color: "#155EEF", lineHeight: 1.1 }}
            >
              {formatCurrency(results.totalSavings, currency.symbol)}
            </p>
            <p className="text-sm mb-6" style={{ color: "#667085" }}>
              per year
            </p>

            <p className="text-sm mb-8" style={{ color: "#667085" }}>
              In three years, for{" "}
              {mode === "team" ? `${inputs.numberOfSDRs} SDRs` : "1 SDR"} and{" "}
              {currency.symbol}
              {inputs.hourlyWage}/hr wages,
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <ResultStat
                label="Payback period"
                value={`${results.paybackMonths.toFixed(1)} Months`}
              />
              <ResultStat
                label="ROI"
                value={`${Math.round(results.roi)}%`}
              />
              <ResultStat
                label="Net Savings"
                value={formatCurrency(results.netSavings, currency.symbol)}
              />
              <ResultStat
                label="Tool Cost (yr)"
                value={formatCurrency(results.toolCostYear, currency.symbol)}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                style={{ border: "1px solid #E4E7EC", color: "#344054" }}
              >
                <Download size={16} />
                Download Report
              </button>
              <button
                className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: "#155EEF" }}
              >
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function StatCard({
  title,
  description,
  value,
  sub,
}: {
  title: string;
  description: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl p-8" style={{ backgroundColor: "#fff", border: "1px solid #E4E7EC" }}>
      <h3 className="text-base font-semibold mb-1" style={{ color: "#101828" }}>
        {title}
      </h3>
      <p className="text-sm mb-4" style={{ color: "#667085" }}>
        {description}
      </p>
      <p className="text-3xl font-bold" style={{ color: "#155EEF" }}>
        {value}
      </p>
      <p className="text-sm mt-1" style={{ color: "#667085" }}>
        {sub}
      </p>
    </div>
  );
}

function InputField({
  label,
  prefix,
  suffix,
  value,
  onChange,
}: {
  label: string;
  prefix?: string;
  suffix?: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1.5" style={{ color: "#344054" }}>
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 text-sm"
            style={{ color: "#667085" }}
          >
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const parsed = parseFloat(e.target.value);
            if (!isNaN(parsed)) {
              onChange(parsed);
            }
          }}
          className="w-full rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
          style={{
            border: "1px solid #E4E7EC",
            color: "#101828",
            paddingLeft: prefix ? "1.75rem" : undefined,
            paddingRight: suffix ? "2rem" : undefined,
          }}
        />
        {suffix && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
            style={{ color: "#667085" }}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function ResultStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl p-4" style={{ backgroundColor: "#F9FAFB" }}>
      <p className="text-xs font-medium mb-1" style={{ color: "#667085" }}>
        {label}
      </p>
      <p className="text-lg font-bold" style={{ color: "#101828" }}>
        {value}
      </p>
    </div>
  );
}
