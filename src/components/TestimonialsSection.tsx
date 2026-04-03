const testimonials = [
  {
    quote:
      "Switching from manual outreach to Omni SDR was like upgrading from a bicycle to a bullet train. My team now books meetings while we sleep!",
    name: "James R.",
    role: "Founder of LeadFlow",
  },
  {
    quote:
      "What used to take me an entire week is now done before my coffee gets cold. Omni SDR is a no-brainer.",
    name: "Samantha K.",
    role: "Growth Lead at BrightWave",
  },
  {
    quote:
      "Before Omni SDR, my inbox was chaos. Now, AI handles the follow-ups and I only talk to people ready to buy.",
    name: "Daniel Ming",
    role: "Account Executive at FinEdge",
  },
  {
    quote:
      "We went live in 48 hours. Research time dropped 80% and Omni SDR booked 27 meetings in the first month.",
    name: "Elena Tan",
    role: "Head of Marketing, CircuitFlow",
  },
  {
    quote:
      "Personalization at scale. Positive reply rate jumped from 2% to 7.6% and we opened 14 net-new opps in Q1.",
    name: "Marco Alvarez",
    role: "Co-founder, RenderKit",
  },
  {
    quote:
      "The guardrails are gold\u2014started in approve-to-send, then moved to auto. Bounces down 61%, complaints near zero, inboxing held steady.",
    name: "Maya R.",
    role: "RevOps Lead, Northbeam Labs",
  },
  {
    quote:
      "Omni SDR re-engaged our \u2018no response\u2019 list. 18% revived, $1.2M pipeline influenced, and our AEs only see qualified replies.",
    name: "Diego Morales",
    role: "Co-founder, FreightOSX",
  },
] as const;

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div
      className="shrink-0 w-[350px] rounded-2xl p-6"
      style={{
        backgroundColor: "#2A2B2D",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
          {role}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#191A1C" }}>
      <div className="max-w-4xl mx-auto text-center px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Teams trust Omni SDR
        </h2>
        <p
          className="text-base md:text-lg mb-8 max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Real results&mdash;from startups to enterprises&mdash;showing that
          smarter automation not only pays for itself but drives lasting growth.
        </p>
        <a
          href="#get-started"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>

      <div className="overflow-hidden">
        <div className="animate-marquee flex gap-6 w-max">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
          {testimonials.map((t, i) => (
            <TestimonialCard key={`dup-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
