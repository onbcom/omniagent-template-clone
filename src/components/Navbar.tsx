"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Why", href: "#ai-comparison" },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 15,
        left: 52,
        right: 52,
        zIndex: 10,
        height: 49,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1200,
          height: 53,
          padding: "10px 20px 10px 10px",
          borderRadius: 13,
          overflow: "hidden",
          margin: "0 auto",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.66)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(26px)" : "blur(0px)",
          WebkitBackdropFilter: isScrolled ? "blur(26px)" : "blur(0px)",
          boxShadow: isScrolled
            ? "rgba(123, 130, 156, 0.17) 0px 4px 4px 0px"
            : "rgba(123, 130, 156, 0) 0px 4px 4px 0px",
          border: isScrolled
            ? "1px solid rgba(218, 225, 232, 1)"
            : "1px solid rgba(218, 225, 232, 0)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            width: 154,
            height: 33,
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/omni-logo.png"
            alt="Omni Agent logo"
            width={154}
            height={33}
            style={{ width: 154, height: 33, objectFit: "contain" }}
            priority
          />
        </a>

        {/* Desktop Nav Links — hidden below 768px */}
        <div
          className="hidden md:flex"
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 47,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "rgb(52, 64, 84)",
                letterSpacing: "normal",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgb(52, 64, 84)",
              letterSpacing: "normal",
              cursor: "default",
            }}
          >
            Resources
          </span>
        </div>

        {/* Desktop CTA — hidden below 768px */}
        <a
          href="#"
          className="hidden md:inline-flex"
          style={{
            backgroundColor: "rgb(21, 94, 239)",
            borderRadius: 52,
            padding: "8px 16px",
            fontSize: 14,
            fontWeight: 500,
            color: "rgb(255, 255, 255)",
            letterSpacing: "-0.28px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Get started
        </a>

        {/* Mobile Hamburger Button — visible below 768px */}
        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          className="flex md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(52, 64, 84)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileOpen ? (
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

      {/* Mobile Slide-Down Panel — visible below 768px */}
      <div
        className="block md:hidden"
        style={{
          maxWidth: 1200,
          margin: "8px auto 0",
          borderRadius: 13,
          backgroundColor: "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(26px)",
          WebkitBackdropFilter: "blur(26px)",
          border: "1px solid rgba(218, 225, 232, 1)",
          boxShadow: "rgba(123, 130, 156, 0.17) 0px 4px 4px 0px",
          overflow: "hidden",
          maxHeight: isMobileOpen ? 400 : 0,
          opacity: isMobileOpen ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          padding: isMobileOpen ? "20px" : "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMobile}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "rgb(52, 64, 84)",
                letterSpacing: "normal",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgb(52, 64, 84)",
              letterSpacing: "normal",
              cursor: "default",
            }}
          >
            Resources
          </span>
          <a
            href="#"
            onClick={closeMobile}
            style={{
              display: "inline-block",
              backgroundColor: "rgb(21, 94, 239)",
              borderRadius: 52,
              padding: "8px 16px",
              fontSize: 14,
              fontWeight: 500,
              color: "rgb(255, 255, 255)",
              letterSpacing: "-0.28px",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}
