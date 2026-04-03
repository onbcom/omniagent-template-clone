import Image from "next/image";

const activityPills = [
  { label: "Qualified Leads", dotColor: "#12B76A", eliminated: false },
  { label: "Recovered orders", dotColor: "#12B76A", eliminated: false },
  { label: "Scheduled Callbacks", dotColor: "#12B76A", eliminated: false },
  {
    label: "Generic inquiry emails",
    dotColor: "#F04438",
    eliminated: true,
  },
] as const;

const avatarCount = 8;

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* White top area with content */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-[120px] pb-8 text-center">
        {/* Tag pill */}
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-[#344054] shadow-sm ring-1 ring-[#E4E7EC] backdrop-blur">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 1L9.79 5.52L14.66 5.83L10.93 9.08L12.08 13.82L8 11.27L3.92 13.82L5.07 9.08L1.34 5.83L6.21 5.52L8 1Z" fill="#155EEF" opacity="0.6"/>
          </svg>
          24/7 AI Sales Agent
        </span>

        {/* Main heading */}
        <h1 className="text-[36px] font-semibold leading-[1.2] tracking-[-1.12px] text-[#0C111D] md:text-[56px]">
          Sales Engine that
          <br />
          <span className="relative inline-flex items-center">
            <em className="not-italic text-[#155EEF]">Never</em>
            <svg className="mx-2 inline-block h-8 w-8 text-[#155EEF] md:h-10 md:w-10" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M10 16C10 12.686 12.686 10 16 10C19.314 10 22 12.686 22 16C22 19.314 19.314 22 16 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M16 22C12.686 22 10 19.314 10 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
            </svg>
          </span>
          Sleeps
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-[560px] text-lg leading-7 text-[#475467]">
          Automate prospecting, personalize outreach, and book 5&times; more
          meetings&mdash;before your competition even logs in.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#155EEF] px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[#1350D4]"
        >
          Get Started
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Activity feed pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {activityPills.map((pill) => (
            <span
              key={pill.label}
              className={`inline-flex items-center gap-2 rounded-full border border-[#E4E7EC] bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur ${
                pill.eliminated
                  ? "text-[#344054] line-through"
                  : "text-[#344054]"
              }`}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: pill.dotColor }}
                aria-hidden="true"
              />
              {pill.label}
            </span>
          ))}
        </div>

        {/* Avatar row */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex items-center">
            {Array.from({ length: avatarCount }, (_, i) => (
              <div
                key={i}
                className={`relative h-10 w-10 overflow-hidden rounded-full border-2 border-white ${
                  i > 0 ? "-ml-2" : ""
                }`}
              >
                <Image
                  src={`/images/avatar-${i + 1}.png`}
                  alt={`User avatar ${i + 1}`}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blue watercolor gradient background transition */}
      <div className="relative h-[500px] w-full overflow-hidden">
        {/* Watercolor background image */}
        <Image
          src="/images/hero-watercolor-bg.png"
          alt=""
          fill
          className="object-cover object-top"
          aria-hidden="true"
          priority
        />
        {/* Blue overlay gradient */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(21,94,239,0.15) 30%, rgba(21,94,239,0.25) 60%, rgba(244,248,255,0.95) 100%)",
          }}
        />
        {/* Circular processing graphic */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[200px] w-[200px]">
            <Image
              src="/images/hero-circle-graphic.png"
              alt="Processing indicator"
              fill
              className="object-contain"
            />
            <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#12B76A] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#12B76A]" />
                Processing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise trust text */}
      <div className="bg-[#F4F8FF] py-4 text-center">
        <p className="text-sm text-[#475467]">
          Built for enterprise scale and trust
        </p>
      </div>
    </section>
  );
}
