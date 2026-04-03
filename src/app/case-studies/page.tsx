import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface CaseStudy {
  readonly image: string;
  readonly name: string;
  readonly title: string;
  readonly quote: string;
  readonly stat1Value: string;
  readonly stat1Label: string;
  readonly stat2Value: string;
  readonly stat2Label: string;
  readonly imagePosition: "left" | "right";
}

const CASE_STUDIES: readonly CaseStudy[] = [
  {
    image: "/images/avatar-1.png",
    name: "Chris Delgado",
    title: "Co-founder of LaunchStack",
    quote:
      "Setting it up took less than a day, and we had our first responses within 24 hours. Honestly, it performs better than some of the human SDRs we\u2019ve hired before \u2014 and it scales without drama.",
    stat1Value: "50+",
    stat1Label: "Qualified leads in 10 days",
    stat2Value: "$100K+",
    stat2Label: "In attributed revenue",
    imagePosition: "left",
  },
  {
    image: "/images/person-lisa.png",
    name: "Lisa Raymond",
    title: "Sales Director, NovaShift",
    quote:
      "I was skeptical at first, but Omni SDR proved me wrong fast. We had cold leads turning warm in days, and our CRM stayed organized without any of us touching it. It just runs.",
    stat1Value: "60%",
    stat1Label: "Boost in cold lead conversions",
    stat2Value: "90",
    stat2Label: "Hours saved every month",
    imagePosition: "right",
  },
  {
    image: "/images/person-michael.jpg",
    name: "Michael Rodriguez",
    title: "Head of Sales, FlowForge",
    quote:
      "The SDR agent handled our outreach like a seasoned rep. The personalization was spot on\u2014messages felt natural and tailored. Prospects actually replied thinking it was a real person.",
    stat1Value: "3\u00d7",
    stat1Label: "More meetings booked weekly",
    stat2Value: "75%",
    stat2Label: "Reduction in manual outreach",
    imagePosition: "left",
  },
  {
    image: "/images/person-sarah.jpg",
    name: "Sarah Davis",
    title: "Growth Lead, Beaconly",
    quote:
      "We don\u2019t have a huge sales team, so Omni SDR was like hiring 3 reps overnight. It learns fast, personalizes well, and doesn\u2019t miss follow-ups. Our inbound and outbound are now in sync.",
    stat1Value: "4\u00d7",
    stat1Label: "Increase in Responses",
    stat2Value: "2 x",
    stat2Label: "ROI-positive (2 Weeks)",
    imagePosition: "right",
  },
];

/* ------------------------------------------------------------------ */
/*  CaseStudyCard                                                       */
/* ------------------------------------------------------------------ */

function CaseStudyCard({ study }: { readonly study: CaseStudy }) {
  const firstName = study.name.split(" ")[0];

  const imageBlock = (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{
        width: "40%",
        minHeight: 420,
        borderRadius: 16,
      }}
    >
      <Image
        src={study.image}
        alt={study.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 40vw"
      />
    </div>
  );

  const contentBlock = (
    <div
      className="flex flex-1 flex-col justify-between"
      style={{ padding: "40px 36px" }}
    >
      {/* Name + Title */}
      <div style={{ marginBottom: 20 }}>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#182230",
            lineHeight: "28px",
            margin: 0,
          }}
        >
          {study.name}
        </h3>
        <p
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#667085",
            lineHeight: "20px",
            margin: "4px 0 0",
          }}
        >
          {study.title}
        </p>
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: 16,
          fontStyle: "italic",
          color: "#344054",
          lineHeight: "26px",
          margin: "0 0 28px",
        }}
      >
        &ldquo;{study.quote}&rdquo;
      </p>

      {/* Stats */}
      <div className="flex gap-10" style={{ marginBottom: 24 }}>
        <div className="flex flex-col" style={{ gap: 2 }}>
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#0C111D",
              lineHeight: "38px",
            }}
          >
            {study.stat1Value}
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#667085",
              lineHeight: "20px",
            }}
          >
            {study.stat1Label}
          </span>
        </div>
        <div className="flex flex-col" style={{ gap: 2 }}>
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#0C111D",
              lineHeight: "38px",
            }}
          >
            {study.stat2Value}
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#667085",
              lineHeight: "20px",
            }}
          >
            {study.stat2Label}
          </span>
        </div>
      </div>

      {/* Story Link */}
      <a
        href="#"
        className="no-underline"
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "#155EEF",
          lineHeight: "20px",
        }}
      >
        See {firstName}&apos;s Story &rarr;
      </a>
    </div>
  );

  return (
    <div
      className="flex overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        width: "100%",
        flexDirection:
          study.imagePosition === "left" ? "row" : "row-reverse",
      }}
    >
      {imageBlock}
      {contentBlock}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          backgroundColor: "#F4F8FF",
          minHeight: "100vh",
        }}
      >
        {/* Hero Area */}
        <section
          className="flex w-full justify-center"
          style={{
            paddingTop: 140,
            paddingBottom: 50,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <div
            className="flex flex-col items-center"
            style={{ maxWidth: 1150, width: "100%", textAlign: "center" }}
          >
            <h1
              style={{
                fontSize: 37.6,
                fontWeight: 700,
                color: "#182230",
                lineHeight: "45.12px",
                letterSpacing: "-0.752px",
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              Omni SDR is trusted by high-growth SaaS teams
            </h1>
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#475467",
                lineHeight: "25.6px",
                letterSpacing: "-0.32px",
                maxWidth: 640,
                margin: "16px auto 0",
              }}
            >
              Learn how founders, sales leaders, and RevOps pros use Omni
              SDR&apos;s AI-powered outbound engine to book more meetings, slash
              CAC, and close deals faster.
            </p>
          </div>
        </section>

        {/* Case Study Cards */}
        <section
          className="flex w-full justify-center"
          style={{ padding: "0 20px 50px" }}
        >
          <div
            className="flex w-full flex-col"
            style={{ maxWidth: 1150, gap: 32 }}
          >
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.name} study={study} />
            ))}
          </div>
        </section>

        {/* Pagination Dots */}
        <section
          className="flex w-full justify-center"
          style={{ padding: "0 20px 24px" }}
        >
          <div className="flex items-center" style={{ gap: 8 }}>
            {CASE_STUDIES.map((study, index) => (
              <span
                key={study.name}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: index === 0 ? "#155EEF" : "#E4E7EC",
                  display: "inline-block",
                }}
              />
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <section
          className="flex w-full justify-center"
          style={{ padding: "0 20px 70px" }}
        >
          <button
            type="button"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E4E7EC",
              borderRadius: 9999,
              padding: "10px 28px",
              fontSize: 14,
              fontWeight: 600,
              color: "#344054",
              lineHeight: "20px",
              cursor: "pointer",
            }}
          >
            Load More
          </button>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
