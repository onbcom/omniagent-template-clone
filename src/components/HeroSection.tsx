import Image from "next/image";

interface ActivityPill {
  readonly label: string;
  readonly color: string;
  readonly strikethrough?: boolean;
}

const ACTIVITY_PILLS: readonly ActivityPill[] = [
  { label: "Qualified Leads", color: "rgb(18, 183, 106)" },
  { label: "Recovered orders", color: "rgb(18, 183, 106)" },
  { label: "Scheduled Callbacks", color: "rgb(18, 183, 106)" },
  {
    label: "Generic inquiry emails",
    color: "rgb(240, 68, 56)",
    strikethrough: true,
  },
];

const AVATAR_COUNT = 8;

function ChainIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block align-middle mx-1"
      aria-hidden="true"
    >
      <path
        d="M15.75 22.5H12C9.51472 22.5 7.5 20.4853 7.5 18C7.5 15.5147 9.51472 13.5 12 13.5H15.75"
        stroke="#155EEF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.25 13.5H24C26.4853 13.5 28.5 15.5147 28.5 18C28.5 20.4853 26.4853 22.5 24 22.5H20.25"
        stroke="#155EEF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 18H22.5"
        stroke="#155EEF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.33337 8H12.6667"
        stroke="#155EEF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66663 4L12.6666 8L8.66663 12"
        stroke="#155EEF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-[2] flex w-full flex-col items-center justify-center bg-[#F4F8FF]"
    >
      <div className="relative z-[3] flex max-w-[1150px] flex-col items-center overflow-hidden pt-[152px] pb-[50px] w-full px-4">
        {/* Hero Text Block */}
        <div className="flex flex-col items-center gap-4 pb-7">
          {/* Tagline Pill */}
          <div
            className="flex h-[34px] items-center rounded-full bg-white px-5"
            style={{
              boxShadow:
                "rgba(204,219,235,0.11) 0px 0.6px 0.6px -0.83px, rgba(204,219,235,0.11) 0px 2.3px 2.3px -1.67px, rgba(204,219,235,0.11) 0px 10px 10px -2.5px",
            }}
          >
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
              Automate prospecting, personalize outreach, and book 5× more
              meetings—before your competition even logs in.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="flex flex-row items-center rounded-[1000px] bg-[#155EEF] pl-5 pr-2.5 pt-3 pb-3 no-underline"
          style={{ width: 150.578, height: 52 }}
        >
          <span className="text-[16px] font-semibold leading-none tracking-[-0.32px] text-white">
            Get Started
          </span>
          <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white">
            <ArrowIcon />
          </span>
        </a>

        {/* Lower Area */}
        <div className="flex w-full flex-col items-center">
          {/* Activity Pills Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {ACTIVITY_PILLS.map((pill) => (
              <div
                key={pill.label}
                className="flex items-center gap-2 rounded-full border border-[#E4E7EC] bg-white px-3 py-1.5"
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: pill.color }}
                />
                <span
                  className={`text-[14px] font-semibold text-[#191A1C] ${
                    pill.strikethrough ? "line-through" : ""
                  }`}
                >
                  {pill.label}
                </span>
              </div>
            ))}
          </div>

          {/* Avatar Stack */}
          <div className="mt-6 flex items-center justify-center">
            {Array.from({ length: AVATAR_COUNT }, (_, i) => (
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

          {/* Processing Graphic */}
          <div className="relative mt-8 flex flex-col items-center">
            <Image
              src="/images/hero-circle-graphic.png"
              alt="Processing circle graphic"
              width={400}
              height={400}
              className="relative z-[2]"
            />
            {/* Processing Label */}
            <div className="relative z-[2] mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#12B76A]" />
              <span className="text-[14px] font-medium text-[#344054]">
                Processing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Watercolor Background */}
      <div className="absolute bottom-[-43px] left-0 z-[1] w-full">
        <Image
          src="/images/hero-watercolor-bg.png"
          alt=""
          width={1920}
          height={600}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
