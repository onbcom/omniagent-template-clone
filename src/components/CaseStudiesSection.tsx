"use client";

import Image from "next/image";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Icons                                                               */
/* ------------------------------------------------------------------ */

function ArrowCircleWhite() {
  return (
    <span className="flex items-center justify-center" style={{ width: 28, height: 28 }}>
      <span
        className="flex items-center justify-center"
        style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 255, 255)" }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M 9 3.333 L 13.667 8 L 9 12.667 M 2.333 8 L 13.333 8" stroke="#155EEF" strokeWidth="1.33" strokeMiterlimit="10" />
        </svg>
      </span>
    </span>
  );
}

function ArrowCircleDark() {
  return (
    <span className="flex items-center justify-center" style={{ width: 28, height: 28 }}>
      <span
        className="flex items-center justify-center"
        style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "rgb(25, 26, 28)" }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M 9 3.333 L 13.667 8 L 9 12.667 M 2.333 8 L 13.333 8" stroke="#FFFFFF" strokeWidth="1.33" strokeMiterlimit="10" />
        </svg>
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface CaseStudy {
  readonly image: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly role: string;
  readonly quote: string;
  readonly stat1Value: string;
  readonly stat1Label: string;
  readonly stat2Value: string;
  readonly stat2Label: string;
}

const CASE_STUDIES: readonly CaseStudy[] = [
  {
    image: "/images/flower-lilac.jpg",
    firstName: "Michael",
    lastName: "Rodriguez",
    role: "Head of Sales, FlowForge",
    quote:
      "The SDR agent handled our outreach like a seasoned rep. The personalization was spot on\u2014messages felt natural and tailored. Prospects actually replied thinking it was a real person.",
    stat1Value: "3\u00d7",
    stat1Label: "More meetings booked weekly",
    stat2Value: "75%",
    stat2Label: "Reduction in manual outreach",
  },
  {
    image: "/images/flower-purple.jpg",
    firstName: "Sarah",
    lastName: "Davis",
    role: "Growth Lead, Beaconly",
    quote:
      "We don\u2019t have a huge sales team, so Omni SDR was like hiring 3 reps overnight. It learns fast, personalizes well, and doesn\u2019t miss follow-ups. Our inbound and outbound are now in sync.",
    stat1Value: "4\u00d7",
    stat1Label: "Increase in Responses",
    stat2Value: "2 x",
    stat2Label: "ROI-positive (2 Weeks)",
  },
  {
    image: "/images/flower-yellow.jpg",
    firstName: "Lisa",
    lastName: "Raymond",
    role: "Sales Director, NovaShift",
    quote:
      "I was skeptical at first, but Omni SDR proved me wrong fast. We had cold leads turning warm in days, and our CRM stayed organized without any of us touching it. It just runs.",
    stat1Value: "60%",
    stat1Label: "Boost in cold lead conversions",
    stat2Value: "90",
    stat2Label: "Hours saved every month",
  },
];

/* ------------------------------------------------------------------ */
/*  CaseStudyCard                                                       */
/* ------------------------------------------------------------------ */

function CaseStudyCard({ study }: { readonly study: CaseStudy }) {
  return (
    <div className="flex flex-col" style={{ gap: 20, width: "100%" }}>
      {/* Main Card */}
      <div
        className="flex flex-col overflow-hidden md:flex-row"
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: 20,
          width: "100%",
          minHeight: 443,
        }}
      >
        {/* Left: Image with name overlay */}
        <div
          className="relative shrink-0 overflow-hidden"
          style={{ width: 404, maxWidth: "100%", borderRadius: 20 }}
        >
          <Image
            src={study.image}
            alt={`${study.firstName} ${study.lastName}`}
            fill
            className="object-cover"
          />
          {/* Name overlay at bottom */}
          <div
            className="absolute bottom-0 left-0 flex w-full flex-col gap-0.5 p-6"
            style={{
              background:
                "linear-gradient(transparent 0%, rgba(0,0,0,0.6) 100%)",
            }}
          >
            <h6
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "rgb(255, 255, 255)",
                lineHeight: "26px",
                letterSpacing: "-0.4px",
                margin: 0,
              }}
            >
              {study.firstName}
            </h6>
            <h6
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "rgb(255, 255, 255)",
                lineHeight: "26px",
                letterSpacing: "-0.4px",
                margin: 0,
              }}
            >
              {study.lastName}
            </h6>
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "rgb(255, 255, 255)",
                lineHeight: "22.4px",
                margin: 0,
              }}
            >
              {study.role}
            </p>
          </div>
        </div>

        {/* Right: Quote + Stats */}
        <div className="flex flex-1 flex-col justify-between p-10">
          {/* Quote */}
          <h4
            style={{
              fontSize: 27.6,
              fontWeight: 500,
              color: "rgb(12, 17, 29)",
              lineHeight: "38.64px",
              margin: 0,
            }}
          >
            &ldquo;{study.quote}&rdquo;
          </h4>

          {/* Stats */}
          <div className="flex gap-12 pt-8">
            <div className="flex flex-col gap-1">
              <h3
                style={{
                  fontSize: 32.6,
                  fontWeight: 600,
                  color: "rgb(12, 17, 29)",
                  lineHeight: "39.12px",
                  letterSpacing: "-0.652px",
                  margin: 0,
                }}
              >
                {study.stat1Value}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "rgb(52, 64, 84)",
                  lineHeight: "25.6px",
                  margin: 0,
                }}
              >
                {study.stat1Label}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3
                style={{
                  fontSize: 32.6,
                  fontWeight: 600,
                  color: "rgb(12, 17, 29)",
                  lineHeight: "39.12px",
                  letterSpacing: "-0.652px",
                  margin: 0,
                }}
              >
                {study.stat2Value}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "rgb(52, 64, 84)",
                  lineHeight: "25.6px",
                  margin: 0,
                }}
              >
                {study.stat2Label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                      */
/* ------------------------------------------------------------------ */

export default function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="flex w-full justify-center"
      style={{
        backgroundColor: "rgb(244, 248, 255)",
        padding: "70px 20px",
      }}
    >
      <div
        className="flex w-full flex-col"
        style={{ maxWidth: 1150, gap: 47 }}
      >
        {/* ---- Header ---- */}
        <div
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
          style={{ padding: "0 20px" }}
        >
          <div className="flex flex-col" style={{ gap: 8 }}>
            <h2
              style={{
                fontSize: 37.6,
                fontWeight: 700,
                color: "rgb(24, 34, 48)",
                lineHeight: "45.12px",
                letterSpacing: "-0.752px",
              }}
            >
              Case Studies
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "rgb(71, 84, 103)",
                lineHeight: "25.6px",
                letterSpacing: "-0.32px",
              }}
            >
              See how leading teams use Omni SDR to boost replies, scale
              outreach, and close deals faster.
            </p>
          </div>

          {/* See all case studies button */}
          <a
            href="#"
            className="flex shrink-0 items-center no-underline"
            style={{
              borderRadius: 1000,
              padding: "4px 4px 4px 12px",
              height: 36,
              backgroundColor: "rgb(21, 94, 239)",
            }}
          >
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "rgb(255, 255, 255)",
                lineHeight: "25.6px",
                letterSpacing: "-0.32px",
                paddingLeft: 2,
              }}
            >
              See all case studies
            </span>
            <ArrowCircleWhite />
          </a>
        </div>

        {/* ---- Slideshow ---- */}
        <div style={{ padding: "0 20px" }}>
          <CaseStudyCard study={CASE_STUDIES[activeIndex]} />

          {/* Navigation Buttons */}
          <div className="mt-5 flex gap-3">
            {CASE_STUDIES.map((study, index) => (
              <button
                key={study.firstName}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="flex items-center border-none no-underline"
                style={{
                  borderRadius: 100,
                  padding: "4px 4px 4px 16px",
                  height: 36,
                  backgroundColor:
                    index === activeIndex
                      ? "rgb(21, 94, 239)"
                      : "rgb(244, 248, 255)",
                  cursor: "pointer",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color:
                      index === activeIndex
                        ? "rgb(255, 255, 255)"
                        : "rgb(24, 34, 48)",
                    lineHeight: "25.6px",
                    letterSpacing: "-0.32px",
                  }}
                >
                  See {study.firstName}&apos;s Story
                </span>
                {index === activeIndex ? (
                  <ArrowCircleWhite />
                ) : (
                  <ArrowCircleDark />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
