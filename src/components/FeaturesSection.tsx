import Image from "next/image";

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
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-8 md:col-span-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}
