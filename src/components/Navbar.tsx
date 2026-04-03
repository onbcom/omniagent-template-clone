"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Why", href: "#ai-comparison" },
] as const;

const resourceLinks = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "FAQs", href: "#faq" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          {/* Resources dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-[#344054] transition-colors hover:text-[#155EEF]"
              onClick={() => setResourcesOpen((prev) => !prev)}
            >
              Resources
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${resourcesOpen ? "rotate-180" : ""}`}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {resourcesOpen && (
              <div className="absolute top-full left-1/2 mt-2 w-44 -translate-x-1/2 rounded-xl border border-[#E4E7EC] bg-white py-2 shadow-lg">
                {resourceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-[#344054] transition-colors hover:bg-[#F9FAFB] hover:text-[#155EEF]"
                    onClick={() => setResourcesOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Right CTA - hidden on mobile */}
        <div className="hidden items-center md:flex">
          <a
            href="#hero"
            className="rounded-full bg-[#155EEF] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1350D4]"
          >
            Get started
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
            {resourceLinks.map((link) => (
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
          <div className="mt-4">
            <a
              href="#hero"
              className="block rounded-full bg-[#155EEF] px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#1350D4]"
              onClick={() => setMobileOpen(false)}
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
