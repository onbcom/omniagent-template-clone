"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Switching from manual outreach to Omni SDR was like upgrading from a bicycle to a bullet train. My team now books meetings while we sleep!",
    name: "James R.",
    role: "Founder of LeadFlow",
    image: "/images/person-man-suit.jpg",
  },
  {
    quote:
      "What used to take me an entire week is now done before my coffee gets cold. Omni SDR is a no-brainer.",
    name: "Samantha K.",
    role: "Growth Lead at BrightWave",
    image: "/images/person-woman-smiling.jpg",
  },
  {
    quote:
      "Before Omni SDR, my inbox was chaos. Now, AI handles the follow-ups and I only talk to people ready to buy.",
    name: "Daniel Ming",
    role: "Account Executive at FinEdge",
    image: "/images/reviewer-1.jpg",
  },
];

function ArrowLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TestimonialCard({ quote, name, role, image }: Testimonial) {
  return (
    <div className="flex flex-col rounded-2xl border border-[#E4E7EC] bg-white overflow-hidden">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image}
          alt={`Portrait of ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <p className="text-base leading-relaxed text-[#344054]">
          &ldquo;{quote}&rdquo;
        </p>
        <div>
          <p className="font-semibold text-[#0C111D]">{name}</p>
          <p className="text-sm text-[#667085]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setStartIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Build the visible set by rotating from startIndex
  const visibleCards = Array.from({ length: testimonials.length }, (_, i) => {
    const idx = (startIndex + i) % testimonials.length;
    return testimonials[idx];
  });

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C111D] mb-4">
              Teams trust Omni SDR
            </h2>
            <p className="text-base md:text-lg text-[#344054] leading-relaxed">
              Real results&mdash;from startups to enterprises&mdash;showing that
              smarter automation not only pays for itself but drives lasting
              growth.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-[#155EEF] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1249C4]"
            >
              Get Started
            </a>
            {/* Navigation arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E4E7EC] bg-white text-[#344054] transition-colors hover:bg-[#F4F8FF] hover:border-[#155EEF] hover:text-[#155EEF]"
              >
                <ArrowLeftIcon />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E4E7EC] bg-white text-[#344054] transition-colors hover:bg-[#F4F8FF] hover:border-[#155EEF] hover:text-[#155EEF]"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Cards grid - 3 columns on desktop, horizontal scroll on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleCards.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

        {/* Mobile navigation arrows */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E4E7EC] bg-white text-[#344054] transition-colors hover:bg-[#F4F8FF] hover:border-[#155EEF] hover:text-[#155EEF]"
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E4E7EC] bg-white text-[#344054] transition-colors hover:bg-[#F4F8FF] hover:border-[#155EEF] hover:text-[#155EEF]"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
