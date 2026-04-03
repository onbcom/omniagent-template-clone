"use client";

import Image from "next/image";

const footerColumns = [
  {
    title: "WHY OMNI AGENT",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Manual vs AI", href: "#ai-comparison" },
      { label: "FAQs", href: "#faq" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
] as const;

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: YouTubeIcon, label: "YouTube", href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="w-full bg-[#191A1C] px-6 pt-[60px] pb-8">
      <div className="mx-auto max-w-6xl">
        {/* Top area */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Left: Logo + tagline + CTA */}
          <div className="md:col-span-4">
            <Image
              src="/images/omni-wordmark.png"
              alt="Omni Agent"
              width={145}
              height={32}
              className="h-auto w-[145px]"
            />
            <p className="mt-4 text-sm text-white/60">
              Prospect Smarter. Book Faster.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#155EEF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1350D4]"
            >
              Get Started
            </a>
          </div>

          {/* Nav columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="md:col-span-2">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe column */}
          <div className="md:col-span-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
              Subscribe for Update
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#155EEF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1350D4]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 md:flex-row md:justify-between">
          {/* Copyright */}
          <p className="text-sm text-white/60">
            &copy; Omni Agent 2025. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Platform Terms
            </a>
            <span className="text-white/20" aria-hidden="true">
              |
            </span>
            <a
              href="#"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Privacy
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white transition hover:opacity-80"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
