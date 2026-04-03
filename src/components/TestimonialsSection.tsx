import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                              */
/* ------------------------------------------------------------------ */

function ArrowCircle() {
  return (
    <span className="flex items-center justify-center" style={{ width: 28, height: 28 }}>
      <span
        className="flex items-center justify-center"
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "rgb(255, 255, 255)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M 9 3.333 L 13.667 8 L 9 12.667 M 2.333 8 L 13.333 8"
            stroke="#155EEF"
            strokeWidth="1.33"
            strokeMiterlimit="10"
          />
        </svg>
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface Testimonial {
  readonly image: string;
  readonly quote: string;
  readonly name: string;
  readonly role: string;
}

const TESTIMONIALS: readonly Testimonial[] = [
  {
    image: "/images/person-man-suit.jpg",
    quote:
      "Switching from manual outreach to Omni SDR was like upgrading from a bicycle to a bullet train. My team now books meetings while we sleep!",
    name: "James R.",
    role: "Founder of LeadFlow",
  },
  {
    image: "/images/person-woman-smiling.jpg",
    quote:
      "What used to take me an entire week is now done before my coffee gets cold. Omni SDR is a no-brainer.",
    name: "Samantha K.",
    role: "Growth Lead at BrightWave",
  },
  {
    image: "/images/person-man-glasses.jpg",
    quote:
      "Before Omni SDR, my inbox was chaos. Now, AI handles the follow-ups and I only talk to people ready to buy.",
    name: "Daniel Ming",
    role: "Account Executive at FinEdge",
  },
];

/* ------------------------------------------------------------------ */
/*  TestimonialCard                                                     */
/* ------------------------------------------------------------------ */

function TestimonialCard({ testimonial }: { readonly testimonial: Testimonial }) {
  return (
    <div
      className="flex flex-col"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 20,
        padding: 10,
        width: 363,
        maxWidth: "100%",
        gap: 10,
      }}
    >
      {/* Portrait */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: 14, height: 380 }}
      >
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Quote */}
      <div className="flex flex-col gap-4 px-3 pt-2 pb-4">
        <h5
          style={{
            fontSize: 22.6,
            fontWeight: 500,
            color: "rgb(12, 17, 29)",
            lineHeight: "31.64px",
            letterSpacing: "-0.452px",
            margin: 0,
          }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </h5>

        {/* Person Info */}
        <div className="flex flex-col gap-1">
          <h6
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "rgb(12, 17, 29)",
              lineHeight: "26px",
              letterSpacing: "-0.4px",
              margin: 0,
            }}
          >
            {testimonial.name}
          </h6>
          <p
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "rgb(52, 64, 84)",
              lineHeight: "25.6px",
              letterSpacing: "-0.32px",
              margin: 0,
            }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                      */
/* ------------------------------------------------------------------ */

export default function TestimonialsSection() {
  return (
    <section
      className="flex w-full justify-center"
      style={{
        backgroundColor: "rgb(244, 248, 255)",
        padding: "70px 20px 40px",
      }}
    >
      <div
        className="flex w-full flex-col"
        style={{ maxWidth: 1150, gap: 47 }}
      >
        {/* ---- Header Row ---- */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col" style={{ gap: 8 }}>
            <h2
              style={{
                fontSize: 37.6,
                fontWeight: 700,
                color: "rgb(24, 34, 48)",
                lineHeight: "45.12px",
                letterSpacing: "-0.752px",
              }}
            >
              Teams trust Omni SDR
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "rgb(71, 84, 103)",
                lineHeight: "25.6px",
                letterSpacing: "-0.32px",
                maxWidth: 681,
              }}
            >
              Real results&mdash;from startups to enterprises&mdash;showing that
              smarter automation not only pays for itself but drives lasting
              growth.
            </p>
          </div>

          {/* Get Started button */}
          <a
            href="#"
            className="flex shrink-0 items-center no-underline"
            style={{
              borderRadius: 1000,
              padding: "4px 4px 4px 12px",
              height: 36,
              backgroundColor: "rgb(21, 94, 239)",
            }}
          >
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "rgb(255, 255, 255)",
                lineHeight: "25.6px",
                letterSpacing: "-0.32px",
                paddingLeft: 2,
              }}
            >
              Get Started
            </span>
            <ArrowCircle />
          </a>
        </div>

        {/* ---- Cards ---- */}
        <div
          className="flex flex-col gap-6 md:flex-row"
          style={{ gap: 47, padding: "0 5px" }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
