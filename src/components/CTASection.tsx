import Image from "next/image";

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
        d="M 9 3.333 L 13.667 8 L 9 12.667 M 2.333 8 L 13.333 8"
        stroke="hsl(0, 0%, 100%)"
        strokeWidth="1.33"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export default function CTASection() {
  return (
    <section
      className="flex w-full justify-center"
      style={{
        backgroundColor: "rgb(244, 248, 255)",
        padding: "10px 0px 29px",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: "rgb(21, 94, 239)",
          borderRadius: 20,
          padding: "61px 40px",
          width: 1110,
          maxWidth: "100%",
        }}
      >
        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-start"
          style={{ width: "100%", maxWidth: 1030 }}
        >
          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2
              style={{
                fontSize: 37.6,
                fontWeight: 700,
                color: "rgb(255, 255, 255)",
                lineHeight: "45.12px",
                letterSpacing: "-0.752px",
              }}
            >
              Prospect Smarter. Book Faster.
            </h2>

            {/* Get Started Button (white bg) */}
            <a
              href="#"
              className="flex items-center no-underline"
              style={{
                borderRadius: 1000,
                padding: "4px 4px 4px 12px",
                height: 36,
                width: "fit-content",
                backgroundColor: "rgb(255, 255, 255)",
                position: "relative",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "rgb(25, 26, 28)",
                  lineHeight: "25.6px",
                  letterSpacing: "-0.32px",
                  paddingLeft: 2,
                }}
              >
                Get Started
              </span>
              <span
                className="ml-1.5 flex items-center justify-center"
                style={{
                  width: 28,
                  height: 28,
                }}
              >
                <span
                  className="flex items-center justify-center"
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "rgb(21, 94, 239)",
                  }}
                >
                  <ArrowIcon />
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Decorative Images */}
        <div
          className="pointer-events-none absolute top-0 right-0"
          style={{ width: 621, height: "100%" }}
          aria-hidden="true"
        >
          <Image
            src="/images/cta-decoration-right.png"
            alt=""
            width={820}
            height={874}
            className="absolute right-0 bottom-0 h-auto opacity-60"
            style={{ width: 820, maxWidth: "none" }}
          />
        </div>
        <div
          className="pointer-events-none absolute top-0 left-0"
          style={{ width: 300, height: "100%" }}
          aria-hidden="true"
        >
          <Image
            src="/images/cta-decoration-left.png"
            alt=""
            width={400}
            height={400}
            className="absolute left-0 bottom-0 h-auto opacity-40"
            style={{ width: 400, maxWidth: "none" }}
          />
        </div>
      </div>
    </section>
  );
}
