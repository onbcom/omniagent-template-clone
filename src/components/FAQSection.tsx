"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

const FAQ_ITEMS: readonly FAQItem[] = [
  {
    question: "How does Omni SDR Work?",
    answer:
      "Omni SDR uses advanced AI to automate your entire outbound sales process. It identifies high-fit prospects using real-time signals, crafts hyper-personalized emails and follow-ups, and books meetings directly on your team\u2019s calendar\u2014all without manual effort.",
  },
  {
    question: "How does it learn our ICP and messaging?",
    answer:
      "During onboarding, Omni SDR ingests your ideal customer profile, past outreach data, CRM records, and brand voice guidelines. It then continuously refines its targeting and messaging based on engagement signals like opens, replies, and booked meetings.",
  },
  {
    question: "How much control do we keep?",
    answer:
      "You maintain full control over messaging templates, target lists, sending schedules, and approval workflows. You can run Omni SDR in \u2018approve-to-send\u2019 mode or let it operate autonomously\u2014switching anytime as your comfort level grows.",
  },
  {
    question: "What does it integrate with?",
    answer:
      "Omni SDR integrates seamlessly with major CRMs (Salesforce, HubSpot), calendar tools (Google Calendar, Outlook), communication platforms (Slack, Teams), and enrichment providers\u2014ensuring data flows without manual imports.",
  },
  {
    question: "How are deliverability & compliance handled?",
    answer:
      "We employ domain warming, inbox rotation, send-rate throttling, and real-time reputation monitoring. Every message passes through spam-score checks before sending, and we support GDPR/CAN-SPAM opt-out handling out of the box.",
  },
  {
    question:
      "How fast can we go live and how is success measured?",
    answer:
      "Most teams are fully operational within one week. Success is tracked through a live dashboard covering open rates, reply rates, meetings booked, pipeline generated, and ROI\u2014so you always know exactly what Omni SDR is delivering.",
  },
];

/* ------------------------------------------------------------------ */
/*  Toggle Icon                                                         */
/* ------------------------------------------------------------------ */

function PlusMinusIcon({ isOpen }: { readonly isOpen: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-200"
      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
    >
      <path
        d="M10 4V16M4 10H16"
        stroke="rgb(12, 17, 29)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      id="faq"
      className="flex w-full justify-center"
      style={{
        backgroundColor: "rgb(244, 248, 255)",
      }}
    >
      <div style={{ width: 1200, maxWidth: "100%" }}>
        <div
          className="flex flex-col"
          style={{
            backgroundColor: "rgb(244, 248, 255)",
            padding: "100px 60px",
            gap: 52,
          }}
        >
          {/* ---- Header ---- */}
          <div className="flex flex-col" style={{ gap: 6 }}>
            <h2
              style={{
                fontSize: 37.6,
                fontWeight: 700,
                color: "rgb(12, 17, 29)",
                lineHeight: "45.12px",
                letterSpacing: "-0.752px",
                maxWidth: 600,
              }}
            >
              Your questions, answered.
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "rgb(71, 84, 103)",
                lineHeight: "25.6px",
                letterSpacing: "-0.32px",
                maxWidth: 600,
              }}
            >
              Find quick answers to common queries about our services, process,
              and how we can help you achieve your goals.
            </p>
          </div>

          {/* ---- Accordion ---- */}
          <div
            className="flex flex-col"
            style={{ width: 800, maxWidth: "100%", gap: 8 }}
          >
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className="cursor-pointer overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    borderRadius: 12,
                    padding: "20px 25px",
                  }}
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleToggle(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                >
                  {/* Question Row */}
                  <div className="flex items-center justify-between">
                    <h6
                      style={{
                        fontSize: 20,
                        fontWeight: 500,
                        color: "rgb(12, 17, 29)",
                        lineHeight: "26px",
                        letterSpacing: "-0.4px",
                        margin: 0,
                      }}
                    >
                      {item.question}
                    </h6>
                    <PlusMinusIcon isOpen={isOpen} />
                  </div>

                  {/* Answer */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? 300 : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 13 : 0,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: "rgb(71, 84, 103)",
                        lineHeight: "25.6px",
                        letterSpacing: "-0.32px",
                        margin: 0,
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
