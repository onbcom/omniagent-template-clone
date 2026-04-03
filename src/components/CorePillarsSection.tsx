import Image from "next/image";

const pillars = [
  {
    title: "Instant Lead Routing",
    description:
      "Routes qualified leads to the right representative in seconds.",
    icon: "/images/agent-icon-1.png",
  },
  {
    title: "Automated Sequences",
    description:
      "Omnichannel workflows engage prospects 24/7 while reps close.",
    icon: "/images/agent-icon-2.png",
  },
  {
    title: "Real-Time Insights",
    description:
      "Live metrics show replies and bookings, driving quick optimization.",
    icon: "/images/agent-icon-3.png",
  },
  {
    title: "Native Integrations",
    description:
      "Bidirectional CRM and Slack sync keeps data clean, actionable.",
    icon: "/images/agent-icon-4.png",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "SOC 2-Type II, GDPR-ready—your data stays safe always.",
    icon: "/images/agent-icon-5.png",
  },
  {
    title: "Scalable Architecture",
    description:
      "Built to grow with your team—from startup to enterprise scale.",
    icon: "/images/agent-icon-6.png",
  },
] as const;

export function CorePillarsSection() {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
          {/* Left: Heading + CTA */}
          <div className="flex flex-col items-start">
            <h2 className="text-[36px] font-semibold leading-[1.2] tracking-[-0.72px] text-[#0C111D]">
              Core Pillars of Omni SDR
            </h2>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#155EEF] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1350D4]"
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: 2x3 grid of cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-[#E4E7EC] bg-white p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F8FF]">
                  <Image
                    src={pillar.icon}
                    alt={pillar.title}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0C111D]">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-[1.6] text-[#475467]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
