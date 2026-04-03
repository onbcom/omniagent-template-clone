import Image from "next/image";

export default function CTASection() {
  return (
    <section
      className="relative w-full overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(135deg, #155EEF 0%, #1E40AF 50%, #155EEF 100%)",
      }}
    >
      {/* Left decorative image */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2">
        <Image
          src="/images/cta-decoration-left.png"
          alt=""
          width={300}
          height={400}
          className="h-auto w-auto"
          aria-hidden="true"
        />
      </div>

      {/* Right decorative image */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
        <Image
          src="/images/cta-decoration-right.png"
          alt=""
          width={300}
          height={400}
          className="h-auto w-auto"
          aria-hidden="true"
        />
      </div>

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center px-6 text-center">
        <h2 className="text-[32px] font-bold leading-[1.2] text-white md:text-[42px]">
          Prospect Smarter. Book Faster.
        </h2>

        <a
          href="#"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#155EEF] transition hover:bg-gray-100"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
