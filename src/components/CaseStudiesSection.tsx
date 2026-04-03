"use client";

import Image from "next/image";
import { useRef, useCallback } from "react";

interface CaseStudy {
  name: string;
  role: string;
  quote: string;
  image: string;
  stats: [string, string];
  cta: string;
}

const caseStudies: CaseStudy[] = [
  {
    name: "Michael Rodriguez",
    role: "Head of Sales, FlowForge",
    quote:
      "The SDR agent handled our outreach like a seasoned rep. The personalization was spot on\u2014messages felt natural and tailored. Prospects actually replied thinking it was a real person.",
    image: "/images/flower-lilac.jpg",
    stats: ["3x More meetings booked weekly", "75% Reduction in manual outreach"],
    cta: "See Michael\u2019s Story",
  },
  {
    name: "Sarah Davis",
    role: "Growth Lead, Beaconly",
    quote:
      "We don\u2019t have a huge sales team, so Omni SDR was like hiring 3 reps overnight. It learns fast, personalizes well, and doesn\u2019t miss follow-ups. Our inbound and outbound are now in sync.",
    image: "/images/flower-purple.jpg",
    stats: ["4x Increase in Responses", "2x ROI-positive (2 Weeks)"],
    cta: "See Sarah\u2019s Story",
  },
  {
    name: "Lisa Raymond",
    role: "Sales Director, NovaShift",
    quote:
      "I was skeptical at first, but Omni SDR proved me wrong fast. We had cold leads turning warm in days, and our CRM stayed organized without any of us touching it. It just runs.",
    image: "/images/flower-yellow.jpg",
    stats: ["60% Boost in cold lead conversions", "90 Hours saved every month"],
    cta: "See Lisa\u2019s Story",
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="min-w-[320px] w-[400px] max-w-[85vw] flex-shrink-0 snap-start rounded-2xl overflow-hidden bg-white border border-gray-200 flex flex-col">
      {/* Flower image */}
      <div className="relative w-full" style={{ aspectRatio: "2 / 3" }}>
        <Image
          src={study.image}
          alt={`${study.name} case study`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 85vw, 400px"
        />
      </div>

      {/* Content area with overlapping avatar */}
      <div className="relative px-6 pt-8 pb-6 flex flex-col gap-4">
        {/* Circular avatar overlapping the image boundary */}
        <div className="absolute -top-8 left-6 w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-gray-200">
          <Image
            src={study.image}
            alt={study.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>

        {/* Name and role */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{study.name}</h3>
          <p className="text-sm text-gray-500">{study.role}</p>
        </div>

        {/* Quote */}
        <p className="text-sm text-gray-600 leading-relaxed">
          &ldquo;{study.quote}&rdquo;
        </p>

        {/* Stats */}
        <div className="flex gap-4">
          {study.stats.map((stat) => {
            const parts = stat.match(/^([\d.]+[x%]?\s*)/);
            const highlight = parts ? parts[1] : "";
            const rest = parts ? stat.slice(highlight.length) : stat;
            return (
              <div
                key={stat}
                className="flex-1 rounded-lg bg-gray-50 px-3 py-2"
              >
                <p className="text-sm font-semibold text-gray-900">
                  {highlight}
                </p>
                <p className="text-xs text-gray-500">{rest}</p>
              </div>
            );
          })}
        </div>

        {/* CTA link */}
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#155EEF] hover:underline"
        >
          {study.cta}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 400;
    const gap = 24; // gap-6 = 24px
    const scrollAmount = cardWidth + gap;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
              Case Studies
            </h2>
            <p className="mt-3 text-lg text-gray-500 max-w-2xl">
              See how leading teams use Omni SDR to boost replies, scale
              outreach, and close deals faster.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#155EEF] hover:underline whitespace-nowrap"
          >
            See all case studies
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.name} study={study} />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-3 mt-8 justify-end">
            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Previous case study"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E4E7EC] bg-white hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/images/arrow-back.svg"
                alt=""
                width={20}
                height={20}
              />
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Next case study"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E4E7EC] bg-white hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/images/arrow-next.svg"
                alt=""
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
