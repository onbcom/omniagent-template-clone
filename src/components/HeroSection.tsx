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
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 50%, #F4F8FF 100%)",
      }}
    >
      {/* Subtle radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(21,94,239,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(21,94,239,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-[120px] pb-20 text-center">
        {/* Tag pill */}
        <span className="mb-6 inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-[#344054] shadow-sm ring-1 ring-[#E4E7EC] backdrop-blur">
          24/7 AI Sales Agent
        </span>

        {/* Main heading */}
        <h1
          className="text-[36px] font-semibold leading-[1.2] tracking-[-1.12px] text-[#0C111D] md:text-[56px]"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          Sales Engine that
          <br />
          <em className="not-italic text-[#155EEF]">Never</em> Sleeps
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-[560px] text-lg leading-7 text-[#475467]">
          Automate prospecting, personalize outreach, and book 5x more
          meetings&mdash;before your competition even logs in.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#155EEF] px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[#1350D4]"
        >
          Get Started
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
          <p className="text-sm text-[#475467]">
            Built for enterprise scale and trust
          </p>
        </div>
      </div>
    </section>
  );
}
