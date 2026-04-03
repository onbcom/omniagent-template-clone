"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How does Omni SDR Work?",
    answer:
      "Omni SDR uses advanced AI to automate your entire outbound sales process. It researches prospects, crafts personalized messages, handles follow-ups, and books meetings directly into your calendar—all while learning from engagement data to improve over time.",
  },
  {
    question: "How does it learn our ICP and messaging?",
    answer:
      "During onboarding, Omni SDR ingests your ideal customer profile, past outreach data, and brand voice guidelines. It continuously refines its understanding by analyzing which messages resonate best with your target audience, adapting tone and positioning accordingly.",
  },
  {
    question: "How much control do we keep?",
    answer:
      "You maintain full control over messaging templates, target lists, and approval workflows. Every outreach sequence can be reviewed before sending, and you can adjust parameters at any time through an intuitive dashboard with real-time visibility.",
  },
  {
    question: "What does it integrate with?",
    answer:
      "Omni SDR integrates seamlessly with major CRMs like Salesforce and HubSpot, email providers, LinkedIn, calendar tools, and popular sales engagement platforms. Our open API also supports custom integrations tailored to your existing tech stack.",
  },
  {
    question: "How are deliverability & compliance handled?",
    answer:
      "We employ domain warming, inbox rotation, and real-time deliverability monitoring to ensure maximum inbox placement. All outreach complies with CAN-SPAM, GDPR, and other regulations, with built-in opt-out handling and consent tracking.",
  },
  {
    question: "How fast can we go live and how is success measured?",
    answer:
      "Most teams are fully operational within one week of onboarding. Success is measured through key metrics including reply rates, meetings booked, pipeline generated, and conversion rates—all visible in a comprehensive analytics dashboard updated in real time.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full bg-white"
      style={{ padding: "80px 24px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 720 }}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-semibold mb-4"
            style={{ fontSize: 36, color: "#0C111D", lineHeight: 1.2 }}
          >
            Your questions, answered.
          </h2>
          <p style={{ fontSize: 18, color: "#475467", lineHeight: 1.6 }}>
            Find quick answers to common queries about our services, process,
            and how we can help you achieve your goals.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="border rounded-xl overflow-hidden"
          style={{ borderColor: "#E4E7EC" }}
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const isLast = index === faqItems.length - 1;

            return (
              <div
                key={index}
                style={{
                  borderBottom: isLast ? "none" : "1px solid #E4E7EC",
                  backgroundColor: isOpen ? "#F9FAFB" : "#FFFFFF",
                  transition: "background-color 0.2s ease",
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                  style={{ padding: 24 }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-semibold pr-4"
                    style={{ fontSize: 18, color: "#0C111D" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: 24,
                      height: 24,
                      fontSize: 24,
                      color: "#475467",
                      transition: "transform 0.3s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: isOpen ? 500 : 0,
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 24px 24px 24px",
                      fontSize: 16,
                      color: "#475467",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
