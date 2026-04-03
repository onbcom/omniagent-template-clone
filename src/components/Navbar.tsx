"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Why", href: "#ai-comparison" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#E4E7EC] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#hero" className="flex-shrink-0">
          <Image
            src="/images/omni-logo.png"
            alt="Omni Agent logo"
            width={100}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </a>

        {/* Center nav links - hidden on mobile */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#344054] transition-colors hover:text-[#155EEF]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right buttons - hidden on mobile */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#pricing"
            className="rounded-full border border-[#E4E7EC] px-4 py-2 text-sm font-medium text-[#344054] transition-colors hover:bg-gray-50"
          >
            Buy Template
          </a>
          <a
            href="#pricing"
            className="rounded-full border border-[#E4E7EC] px-4 py-2 text-sm font-medium text-[#344054] transition-colors hover:bg-gray-50"
          >
            Use for Free
          </a>
          <a
            href="#hero"
            className="rounded-full bg-[#155EEF] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1350D4]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#344054]"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-[#E4E7EC] bg-white px-6 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-[#344054] transition-colors hover:text-[#155EEF]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="#pricing"
              className="rounded-full border border-[#E4E7EC] px-4 py-2 text-center text-sm font-medium text-[#344054] transition-colors hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Buy Template
            </a>
            <a
              href="#pricing"
              className="rounded-full border border-[#E4E7EC] px-4 py-2 text-center text-sm font-medium text-[#344054] transition-colors hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Use for Free
            </a>
            <a
              href="#hero"
              className="rounded-full bg-[#155EEF] px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#1350D4]"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
