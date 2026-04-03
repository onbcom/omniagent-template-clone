import { Calendar, Video } from "lucide-react";

function MeetingEntry({
  name,
  time,
  avatarColor,
}: {
  name: string;
  time: string;
  avatarColor: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-[#E4E7EC] bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: avatarColor }}
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-medium text-[#344054]">{name}</p>
          <p className="text-xs text-[#667085]">{time}</p>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] bg-white px-3 py-1.5 text-xs font-medium text-[#344054] transition-colors hover:bg-[#F9FAFB]"
      >
        <Video className="h-3.5 w-3.5" />
        Join Via
      </button>
    </div>
  );
}

function TabButton({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={`rounded-md px-3 py-1 text-xs font-medium ${
        active
          ? "bg-[#155EEF] text-white"
          : "bg-[#F2F4F7] text-[#667085]"
      }`}
    >
      {label}
    </span>
  );
}

export default function EnterpriseTrustSection() {
  return (
    <section className="w-full bg-[#F4F8FF] px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Enterprise Trust Banner */}
        <div className="rounded-2xl border border-[#E4E7EC] bg-white px-6 py-10 text-center sm:px-12 sm:py-14">
          <h2
            className="mx-auto max-w-2xl text-2xl font-semibold leading-tight sm:text-[28px]"
            style={{ color: "#0C111D" }}
          >
            Built for enterprise scale and trust
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed"
            style={{ color: "#475467" }}
          >
            Omni SDR meets the highest security, uptime, and support
            standards&mdash;so your revenue engine never slows down, no matter
            how fast you grow.
          </p>
          <div className="mt-8">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-full bg-[#155EEF] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#1249CC]"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Dashboard Mockup Card */}
        <div
          className="mt-12 overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
        >
          <div className="overflow-x-auto">
            <div className="min-w-[720px] p-6 sm:p-10">
              {/* Top row: Stat + Meeting Card */}
              <div className="grid grid-cols-12 gap-6">
                {/* Left: 5x Stat */}
                <div className="col-span-4 flex flex-col items-center justify-center rounded-2xl border border-[#E4E7EC] bg-[#F9FAFB] p-8">
                  <span className="text-6xl font-bold text-[#155EEF]">5x</span>
                  <p className="mt-2 text-center text-sm text-[#667085]">
                    More qualified meetings booked
                  </p>
                </div>

                {/* Right: Meeting Detail Card */}
                <div className="col-span-8 rounded-2xl border border-[#E4E7EC] bg-white p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-lg font-semibold text-[#0C111D]">
                        Discovery Call
                      </p>
                      <p className="mt-0.5 text-sm text-[#667085]">
                        30 Min Meeting
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-[#667085]" />
                      <span className="text-xs text-[#667085]">Today</span>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="mt-5 flex gap-2">
                    <TabButton label="Agenda" active />
                    <TabButton label="KPI" />
                    <TabButton label="QnA" />
                  </div>

                  {/* Meeting entries */}
                  <div className="mt-5 space-y-3">
                    <MeetingEntry
                      name="Alec Whitten"
                      time="9:30 am"
                      avatarColor="#7C3AED"
                    />
                    <MeetingEntry
                      name="Lyle Kaufman"
                      time="9:30 am"
                      avatarColor="#F59E0B"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="mt-8 text-center">
                <p className="text-lg font-semibold text-[#0C111D]">
                  Calendar Booking on Autopilot
                </p>
                <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[#667085]">
                  Schedules meetings the moment a lead qualifies&mdash;often
                  while your team sleeps. No back-and-forth, no missed windows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
