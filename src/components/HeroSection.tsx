"use client";

import Image from "next/image";
import LottieAnimation from "@/components/LottieAnimation";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface ActivityPill {
  readonly label: string;
  readonly color: string;
  readonly strikethrough?: boolean;
}

const ACTIVITY_PILLS: readonly ActivityPill[] = [
  { label: "Qualified Leads", color: "rgb(18, 183, 106)" },
  { label: "Recovered orders", color: "rgb(18, 183, 106)" },
  { label: "Scheduled Callbacks", color: "rgb(18, 183, 106)" },
  { label: "Generic inquiry emails", color: "rgb(240, 68, 56)", strikethrough: true },
];

interface AvatarPosition {
  readonly src: string;
  readonly top: string;
  readonly left: string;
  readonly delay: string;
}

const HERO_AVATARS: readonly AvatarPosition[] = [
  { src: "/images/hero-avatar-0.png", top: "75%", left: "28%", delay: "0s" },
  { src: "/images/hero-avatar-1.png", top: "55%", left: "18%", delay: "0.5s" },
  { src: "/images/hero-avatar-2.png", top: "15%", left: "22%", delay: "1s" },
  { src: "/images/hero-avatar-3.png", top: "5%", left: "45%", delay: "1.5s" },
  { src: "/images/hero-avatar-4.png", top: "22%", left: "72%", delay: "0.3s" },
  { src: "/images/hero-avatar-5.png", top: "42%", left: "82%", delay: "0.8s" },
  { src: "/images/hero-avatar-6.png", top: "68%", left: "85%", delay: "1.2s" },
  { src: "/images/hero-avatar-7.png", top: "25%", left: "10%", delay: "0.6s" },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                               */
/* ------------------------------------------------------------------ */

function ChainIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="mx-1 inline-block align-middle"
      aria-hidden="true"
    >
      <path d="M15.75 22.5H12C9.51472 22.5 7.5 20.4853 7.5 18C7.5 15.5147 9.51472 13.5 12 13.5H15.75" stroke="#155EEF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.25 13.5H24C26.4853 13.5 28.5 15.5147 28.5 18C28.5 20.4853 26.4853 22.5 24 22.5H20.25" stroke="#155EEF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.5 18H22.5" stroke="#155EEF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.33337 8H12.6667" stroke="#155EEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.66663 4L12.6666 8L8.66663 12" stroke="#155EEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-[2] flex w-full flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#F4F8FF" }}
    >
      {/* Animated Background — soft blue gradient + cloud blobs */}
      <div
        className="hero-bg-animation"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          background: "linear-gradient(180deg, #F4F8FF 0%, #F4F8FF 35%, #e0ecff 55%, #c5d8f8 65%, #d0e3ff 75%, #e8f0ff 85%, #F4F8FF 100%)",
        }}
      />
      <div style={{ position: "absolute", bottom: "5%", left: "-10%", width: "60%", height: "50%", background: "radial-gradient(ellipse at center, rgba(21, 94, 239, 0.08) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "0%", right: "-5%", width: "50%", height: "45%", background: "radial-gradient(ellipse at center, rgba(21, 94, 239, 0.10) 0%, transparent 70%)", filter: "blur(50px)", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "10%", left: "30%", width: "40%", height: "40%", background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.6) 0%, transparent 70%)", filter: "blur(40px)", zIndex: 1 }} />

      {/* Content */}
      <div className="relative z-[3] flex w-full max-w-[1150px] flex-col items-center px-4 pt-[152px] pb-[50px]">
        {/* Sparkle icon (Lottie) */}
        <div style={{ position: "absolute", top: 100, left: 80 }}>
          <LottieAnimation src="/lottie/sparkle-icon.json" style={{ width: 24, height: 24 }} />
        </div>

        {/* Hero Text Block */}
        <div className="flex flex-col items-center gap-4 pb-7">
          {/* Tagline Pill */}
          <div
            className="flex h-[34px] items-center gap-2 rounded-full bg-white px-5"
            style={{
              boxShadow: "rgba(204,219,235,0.11) 0px 0.6px 0.6px -0.83px, rgba(204,219,235,0.11) 0px 2.3px 2.3px -1.67px, rgba(204,219,235,0.11) 0px 10px 10px -2.5px",
            }}
          >
            <LottieAnimation src="/lottie/sparkle-icon.json" style={{ width: 16, height: 16 }} />
            <span className="text-[14px] font-semibold text-[#182230]">
              24/7 AI Sales Agent
            </span>
          </div>

          {/* Title + Subtitle */}
          <div className="flex max-w-[730px] flex-col items-center gap-1.5">
            <h1 className="text-center text-[48px] font-semibold leading-[67.2px] tracking-[-0.96px] text-[#0C111D]">
              Sales Engine that
              <br />
              <span className="text-[#155EEF]">Never</span>
              <ChainIcon />
              Sleeps
            </h1>
            <p className="text-center text-[16px] font-medium leading-[22.4px] tracking-[-0.32px] text-[#344054]">
              Automate prospecting, personalize outreach, and book 5&times; more
              meetings&mdash;before your competition even logs in.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="flex flex-row items-center rounded-[1000px] bg-[#155EEF] py-3 pr-2.5 pl-5 no-underline"
          style={{ width: 150.578, height: 52 }}
        >
          <span className="text-[16px] font-semibold leading-none tracking-[-0.32px] text-white">
            Get Started
          </span>
          <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white">
            <ArrowIcon />
          </span>
        </a>

        {/* Hero Animation Area */}
        <div className="relative mt-8 flex w-full items-center justify-center" style={{ height: 500 }}>
          {/* Floating Avatars with real Lottie-extracted positions */}
          {HERO_AVATARS.map((avatar, i) => (
            <div
              key={i}
              className="hero-floating-avatar"
              style={{
                position: "absolute",
                top: avatar.top,
                left: avatar.left,
                animationDelay: avatar.delay,
                zIndex: 4,
              }}
            >
              <Image
                src={avatar.src}
                alt={`Avatar ${i + 1}`}
                width={51}
                height={51}
                className="rounded-full"
                style={{ width: 51, height: 51, objectFit: "cover" }}
              />
            </div>
          ))}

          {/* Real Lottie Radar Animation (extracted from source) */}
          <div style={{ position: "relative", width: 465, height: 465, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LottieAnimation
              src="/lottie/radar.json"
              style={{ width: 465, height: 465, position: "absolute" }}
            />
            {/* Center logo */}
            <div style={{ position: "relative", zIndex: 5 }}>
              <Image
                src="/images/hero-omni-logo.png"
                alt="Omni Agent"
                width={151}
                height={151}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>

          {/* Processing Animation (Lottie) — overlaid on the radar */}
          <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translateX(-50%)", zIndex: 6, width: 235, height: 156 }}>
            <LottieAnimation
              src="/lottie/processing-animation.json"
              style={{ width: 235, height: 156 }}
            />
          </div>

          {/* Prospect Discovery Label */}
          <div
            className="absolute flex items-center gap-2"
            style={{ bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 5 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#12B76A]" />
            <span className="text-[14px] font-medium text-[#344054]">
              Prospect Discovery
            </span>
          </div>
        </div>

        {/* Activity Pills Row */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {ACTIVITY_PILLS.map((pill) => (
            <div
              key={pill.label}
              className="flex items-center gap-2 rounded-full border border-[#E4E7EC] bg-white px-3 py-1.5"
            >
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: pill.color }} />
              <span className={`text-[14px] font-semibold text-[#191A1C] ${pill.strikethrough ? "line-through" : ""}`}>
                {pill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
