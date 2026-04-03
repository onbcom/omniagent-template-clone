import Image from "next/image";

function NetworkDiagram() {
  return (
    <svg
      width="320"
      height="240"
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      aria-hidden="true"
    >
      {/* Connection lines */}
      <line x1="160" y1="60" x2="80" y2="120" stroke="#D0D5DD" strokeWidth="1.5" />
      <line x1="160" y1="60" x2="240" y2="100" stroke="#D0D5DD" strokeWidth="1.5" />
      <line x1="160" y1="60" x2="160" y2="140" stroke="#D0D5DD" strokeWidth="1.5" />
      <line x1="80" y1="120" x2="60" y2="190" stroke="#D0D5DD" strokeWidth="1.5" />
      <line x1="80" y1="120" x2="140" y2="190" stroke="#D0D5DD" strokeWidth="1.5" />
      <line x1="240" y1="100" x2="260" y2="170" stroke="#D0D5DD" strokeWidth="1.5" />
      <line x1="240" y1="100" x2="200" y2="180" stroke="#D0D5DD" strokeWidth="1.5" />
      <line x1="160" y1="140" x2="140" y2="190" stroke="#D0D5DD" strokeWidth="1.5" />
      <line x1="160" y1="140" x2="200" y2="180" stroke="#D0D5DD" strokeWidth="1.5" />

      {/* Primary node (center top) */}
      <circle cx="160" cy="60" r="16" fill="#155EEF" />
      <circle cx="160" cy="60" r="8" fill="white" />

      {/* Secondary nodes */}
      <circle cx="80" cy="120" r="12" fill="#155EEF" opacity="0.8" />
      <circle cx="80" cy="120" r="5" fill="white" />

      <circle cx="240" cy="100" r="12" fill="#155EEF" opacity="0.8" />
      <circle cx="240" cy="100" r="5" fill="white" />

      <circle cx="160" cy="140" r="12" fill="#155EEF" opacity="0.7" />
      <circle cx="160" cy="140" r="5" fill="white" />

      {/* Tertiary nodes */}
      <circle cx="60" cy="190" r="8" fill="#155EEF" opacity="0.5" />
      <circle cx="60" cy="190" r="3.5" fill="white" />

      <circle cx="140" cy="190" r="8" fill="#155EEF" opacity="0.5" />
      <circle cx="140" cy="190" r="3.5" fill="white" />

      <circle cx="200" cy="180" r="8" fill="#155EEF" opacity="0.5" />
      <circle cx="200" cy="180" r="3.5" fill="white" />

      <circle cx="260" cy="170" r="8" fill="#155EEF" opacity="0.5" />
      <circle cx="260" cy="170" r="3.5" fill="white" />

      {/* Decorative small dots */}
      <circle cx="40" cy="80" r="3" fill="#155EEF" opacity="0.2" />
      <circle cx="280" cy="60" r="3" fill="#155EEF" opacity="0.2" />
      <circle cx="300" cy="140" r="3" fill="#155EEF" opacity="0.15" />
      <circle cx="30" cy="160" r="3" fill="#155EEF" opacity="0.15" />
      <circle cx="120" cy="40" r="2.5" fill="#155EEF" opacity="0.2" />
      <circle cx="220" cy="210" r="2.5" fill="#155EEF" opacity="0.15" />
    </svg>
  );
}

function GaugeIllustration() {
  return (
    <svg
      width="240"
      height="160"
      viewBox="0 0 240 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-[240px]"
      aria-hidden="true"
    >
      {/* Background arc track */}
      <path
        d="M40 130 A80 80 0 0 1 200 130"
        stroke="#E4E7EC"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />

      {/* Green zone (low range) */}
      <path
        d="M40 130 A80 80 0 0 1 68 72"
        stroke="#F04438"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />

      {/* Yellow zone (mid range) */}
      <path
        d="M68 72 A80 80 0 0 1 120 50"
        stroke="#F79009"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />

      {/* Green/blue zone (high range - where needle points) */}
      <path
        d="M120 50 A80 80 0 0 1 200 130"
        stroke="#155EEF"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />

      {/* Needle pointing to high performance zone */}
      <line
        x1="120"
        y1="130"
        x2="185"
        y2="75"
        stroke="#0C111D"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Center circle */}
      <circle cx="120" cy="130" r="8" fill="#0C111D" />
      <circle cx="120" cy="130" r="4" fill="white" />

      {/* Tick labels */}
      <text x="30" y="148" fill="#98A2B3" fontSize="11" fontFamily="sans-serif">0</text>
      <text x="112" y="38" fill="#98A2B3" fontSize="11" fontFamily="sans-serif">50</text>
      <text x="200" y="148" fill="#98A2B3" fontSize="11" fontFamily="sans-serif">100</text>

      {/* Performance score */}
      <text x="120" y="118" fill="#155EEF" fontSize="20" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
        99.9%
      </text>
    </svg>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="mb-12 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#E4E7EC] bg-white px-4 py-1.5 text-sm font-medium text-[#475467]">
            Fueling growth for innovative teams worldwide
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1: Scale Stats - full width */}
          <div className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white p-8 md:col-span-2">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <p className="text-[72px] font-bold leading-none text-[#155EEF]">
                  &gt;1M
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#0C111D]">
                  Scale That Humans Can&apos;t Match
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-[1.6] text-[#475467]">
                  Omni SDR delivers over one million personalized touches each
                  month, engaging prospects at machine speed. Your team can focus
                  entirely on closing deals while outreach runs on autopilot.
                </p>
              </div>
              <div className="w-full flex-shrink-0 md:w-[320px]">
                <NetworkDiagram />
              </div>
            </div>
          </div>

          {/* Card 2: Integrations */}
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-8">
            <h3 className="text-2xl font-semibold text-[#0C111D]">
              Integrations That Just Work
            </h3>
            <p className="mt-3 text-base leading-[1.6] text-[#475467]">
              Seamlessly connect with the tools your team already relies on,
              without complicated setup or costly delays. Enjoy smooth workflows
              and instant compatibility from day one.
            </p>
            <div className="mt-6">
              <Image
                src="/images/integration-icons.png"
                alt="Integration icons showing supported app logos"
                width={480}
                height={240}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>

          {/* Card 3: Enterprise-Grade Performance */}
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-8">
            <h3 className="text-2xl font-semibold text-[#0C111D]">
              Enterprise-Grade Performance
            </h3>
            <p className="mt-3 text-base leading-[1.6] text-[#475467]">
              With millisecond-level API calls and elastic scaling, Omni SDR
              easily handles sudden traffic spikes. Your pipeline remains fast,
              stable, and reliable—even during peak launch days.
            </p>
            <div className="mt-8 flex justify-center">
              <GaugeIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
