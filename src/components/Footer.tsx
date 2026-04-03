import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Social icon SVGs                                                    */
/* ------------------------------------------------------------------ */

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#182230" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="#182230" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="#182230" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#182230" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#182230" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#182230" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M 9 3.333 L 13.667 8 L 9 12.667 M 2.333 8 L 13.333 8"
        stroke="hsl(0, 0%, 100%)"
        strokeWidth="1.33"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface NavColumn {
  readonly label: string;
  readonly links: readonly string[];
}

const NAV_COLUMNS: readonly NavColumn[] = [
  {
    label: "WHY OMNI AGENT",
    links: ["Pricing", "Manual vs AI", "FAQs"],
  },
  {
    label: "RESOURCES",
    links: ["Blog", "Case Studies", "Contact Us"],
  },
];

const SOCIAL_ICONS = [
  { name: "Instagram", icon: <InstagramIcon /> },
  { name: "X", icon: <XIcon /> },
  { name: "LinkedIn", icon: <LinkedInIcon /> },
  { name: "YouTube", icon: <YouTubeIcon /> },
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function Footer() {
  return (
    <footer
      className="flex w-full justify-center"
      style={{ backgroundColor: "rgb(244, 248, 255)" }}
    >
      <div
        className="flex w-full flex-col"
        style={{
          maxWidth: 1150,
          padding: "10px 20px 20px",
        }}
      >
        {/* ---- Top Row ---- */}
        <div className="flex flex-col gap-10 py-10 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex flex-col gap-4" style={{ width: 435 }}>
            <Image
              src="/images/omni-logo.png"
              alt="Omni Agent logo"
              width={100}
              height={18}
              className="h-auto"
              style={{ width: 100 }}
            />
          </div>

          {/* Nav Columns */}
          <div className="flex gap-16">
            {NAV_COLUMNS.map((col) => (
              <div key={col.label} className="flex flex-col gap-3">
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "rgb(71, 84, 103)",
                    lineHeight: "17.6px",
                  }}
                >
                  {col.label}
                </p>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="no-underline"
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "rgb(24, 34, 48)",
                      lineHeight: "25.6px",
                      letterSpacing: "-0.32px",
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Subscribe */}
          <div className="flex flex-col gap-3" style={{ width: 343 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "rgb(71, 84, 103)",
                lineHeight: "17.6px",
              }}
            >
              SUBSCRIBE FOR UPDATE
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-l-xl border border-[#E4E7EC] bg-white px-4 py-3 text-[14px] font-medium text-[#182230] outline-none"
                style={{ height: 50 }}
              />
              <button
                type="button"
                className="flex items-center justify-center rounded-r-xl"
                style={{
                  backgroundColor: "rgb(21, 94, 239)",
                  padding: 12,
                  width: 88,
                  height: 50,
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "rgb(255, 255, 255)",
                    lineHeight: "25.6px",
                    letterSpacing: "-0.32px",
                  }}
                >
                  Submit
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ---- Divider ---- */}
        <div
          className="w-full"
          style={{ borderTop: "1px solid rgb(228, 231, 236)" }}
        />

        {/* ---- Bottom Row ---- */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          {/* Copyright */}
          <p
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "rgb(102, 112, 133)",
              lineHeight: "20px",
            }}
          >
            &copy; Omni Agent 2025. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="no-underline"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "rgb(102, 112, 133)",
                lineHeight: "20px",
              }}
            >
              Platform Terms
            </a>
            <a
              href="#"
              className="no-underline"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "rgb(102, 112, 133)",
                lineHeight: "20px",
              }}
            >
              Privacy
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2">
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="flex items-center justify-center no-underline"
                style={{
                  width: 31,
                  height: 30,
                  backgroundColor: "rgb(255, 255, 255)",
                  borderRadius: 8,
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
