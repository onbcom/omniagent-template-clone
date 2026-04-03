import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/*  Section Data                                                        */
/* ------------------------------------------------------------------ */

interface Section {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly bullets?: readonly string[];
  readonly trailingParagraphs?: readonly string[];
}

const SECTIONS: readonly Section[] = [
  {
    heading: "What Omni SDR does",
    paragraphs: [
      "Omni SDR helps you prospect, personalize messages, follow up, qualify replies, book meetings, and log results in your tools. The Agent can draft messages and\u2014if you enable it\u2014send them within guardrails you set.",
      "Omni SDR is software; it is not a human employee.",
    ],
  },
  {
    heading: "Eligibility & accounts",
    paragraphs: [
      "We may use the information we collect from you for various purposes, including:",
    ],
    bullets: [
      "Provide accurate registration information and keep credentials secure.",
      "You are responsible for all activity under your account.",
      "You must be at least 18 and able to form a binding contract.",
    ],
  },
  {
    heading: "Your content & data",
    paragraphs: [
      'Customer Content. You own the data, contact lists, copy, and assets you provide ("Customer Content"). You grant us a limited license to use Customer Content to operate and improve the Service.',
      "Outputs. Unless otherwise required by your third-party tool terms, you own the messages and assets generated for you by the Agent.",
      "Do not upload anything you don\u2019t have rights to use.",
    ],
  },
  {
    heading: "Acceptable use",
    paragraphs: ["You agree not to use the Service to:"],
    bullets: [
      "Send unlawful, misleading, or deceptive communications; harass or discriminate; or target minors.",
      "Violate anti-spam/marketing laws (e.g., CAN-SPAM, CASL, GDPR/ePrivacy), phone/SMS rules (TCPA), or platform/ISP policies.",
      "Bypass rate limits, scrape in violation of website terms, or misuse personal data.",
      "Upload malware or attempt to access the Service or third-party systems without authorization.",
    ],
    trailingParagraphs: [
      "We may suspend or terminate access for violations.",
    ],
  },
  {
    heading: "Human control & sending modes",
    paragraphs: ["You can choose how the Agent acts:"],
    bullets: [
      "Draft Only: Agent drafts; you send.",
      "Approve to Send: Agent drafts; you approve each message.",
      "Auto-Send (Guardrails): Agent sends within your rules (caps, quiet hours, exclusion lists, sensitive keywords).",
    ],
    trailingParagraphs: [
      "You can change modes anytime. You remain responsible for review and compliance.",
    ],
  },
  {
    heading: "Integrations & third-party services",
    paragraphs: [
      'The Service connects to tools like email, calendars, CRMs, data providers, and messaging platforms ("Third-Party Services").',
    ],
    bullets: [
      "Your use of each Third-Party Service is governed by its own terms and fees.",
      "We\u2019re not responsible for outages, data loss, or policy changes by Third-Party Services.",
      "You authorize us to act on your behalf within those tools as configured.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at hello@omniagent.com",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Styles                                                              */
/* ------------------------------------------------------------------ */

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 700,
  color: "#0C111D",
  marginTop: 40,
  marginBottom: 12,
  lineHeight: "28px",
};

const bodyTextStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 400,
  color: "#344054",
  lineHeight: 1.7,
  margin: "0 0 12px",
};

const bulletStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 400,
  color: "#344054",
  lineHeight: 1.7,
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                      */
/* ------------------------------------------------------------------ */

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          backgroundColor: "#F4F8FF",
          minHeight: "100vh",
        }}
      >
        {/* ============================================================ */}
        {/*  Hero Area                                                    */}
        {/* ============================================================ */}
        <section
          className="flex w-full justify-center"
          style={{ padding: "140px 20px 0" }}
        >
          <div
            className="flex w-full flex-col items-center"
            style={{ maxWidth: 1150 }}
          >
            {/* Heading */}
            <h1
              style={{
                fontSize: 37.6,
                fontWeight: 700,
                color: "#182230",
                lineHeight: "45.12px",
                letterSpacing: "-0.752px",
                textAlign: "center",
                margin: 0,
              }}
            >
              Terms and conditions
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#475467",
                lineHeight: "25.6px",
                letterSpacing: "-0.32px",
                textAlign: "center",
                maxWidth: 700,
                margin: "16px 0 0",
              }}
            >
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
              and use of Omni SDR&mdash;an AI-powered sales development
              representative (&ldquo;Omni SDR&rdquo; or the
              &ldquo;Agent&rdquo;)&mdash;and the related website, dashboard, and
              services (collectively, the &ldquo;Service&rdquo;).
            </p>

            {/* Date */}
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#667085",
                lineHeight: "20px",
                textAlign: "center",
                margin: "12px 0 0",
              }}
            >
              Last Updated on April, 24, 2025
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  Content Sections                                             */}
        {/* ============================================================ */}
        <section
          className="flex w-full justify-center"
          style={{ padding: "40px 20px 60px" }}
        >
          <div className="w-full" style={{ maxWidth: 800 }}>
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 style={sectionHeadingStyle}>{section.heading}</h2>

                {section.paragraphs.map((para) => (
                  <p key={para} style={bodyTextStyle}>
                    {para}
                  </p>
                ))}

                {section.bullets && (
                  <ul
                    style={{
                      paddingLeft: 24,
                      margin: "0 0 12px",
                    }}
                  >
                    {section.bullets.map((bullet) => (
                      <li key={bullet} style={bulletStyle}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {section.trailingParagraphs?.map((para) => (
                  <p key={para} style={bodyTextStyle}>
                    {para}
                  </p>
                ))}
              </div>
            ))}

          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA + Footer                                                 */}
        {/* ============================================================ */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
