"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface BlogPost {
  readonly image: string;
  readonly category: string;
  readonly title: string;
  readonly date: string;
  readonly readTime: string;
  readonly description?: string;
  readonly author?: string;
  readonly authorImage?: string;
}

const CATEGORIES = [
  "All",
  "Agent Use Cases",
  "Automation Tips",
  "AI Trends",
  "Productivity Hacks",
] as const;

const BLOG_POSTS: readonly BlogPost[] = [
  {
    image: "/images/blog-thumb-1.jpg",
    category: "Agent Use Cases",
    title: "How Customer Support Agents Can Cut Response Times by 60%",
    date: "Aug 9, 2025",
    readTime: "5 min",
  },
  {
    image: "/images/blog-thumb-2.png",
    category: "Agent Use Cases",
    title: "Using AI Sales Agents to Boost Lead Conversion Rates",
    date: "Aug 9, 2025",
    readTime: "3 min",
  },
  {
    image: "/images/blog-thumb-3.jpg",
    category: "Automation Tips",
    title:
      "5 Automation Workflows Every Business Should Implement in 2025",
    date: "Aug 9, 2025",
    readTime: "2 min",
  },
  {
    image: "/images/feature-large.jpg",
    category: "Automation Tips",
    title: "How to Integrate AI Agents with Your Existing Tools",
    date: "Aug 7, 2025",
    readTime: "4 min",
  },
  {
    image: "/images/enterprise-bg.jpg",
    category: "AI Trends",
    title:
      "AI Trends \u2014 The Rise of Multi-Agent Systems in 2025",
    date: "Jul 17, 2025",
    readTime: "3 min",
  },
  {
    image: "/images/blog-featured.png",
    category: "Productivity Hacks",
    title:
      "Productivity Hacks \u2014 How AI Agents Can Free Up 15 Hours a Week",
    date: "Jun 26, 2025",
    readTime: "2 min",
  },
];

const FEATURED_POST: BlogPost = {
  image: "/images/blog-featured.png",
  category: "Agent Use Cases",
  title: "How Customer Support Agents Can Cut Response Times by 60%",
  description:
    "Discover how AI-powered customer support agents can automate ticket triage, provide instant answers, and dramatically reduce average handling times without compromising service quality.",
  author: "Adam Guild",
  authorImage: "/images/blog-author.jpg",
  date: "Aug 9, 2025",
  readTime: "5 min",
};

/* ------------------------------------------------------------------ */
/*  Blog Card                                                           */
/* ------------------------------------------------------------------ */

function BlogCard({ post }: { readonly post: BlogPost }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(16, 24, 40, 0.1), 0 1px 2px rgba(16, 24, 40, 0.06)",
      }}
    >
      {/* Image */}
      <div className="relative" style={{ height: 200 }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        {/* Read time badge */}
        <span
          className="absolute right-3 bottom-3 rounded-full px-2.5 py-0.5"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            fontSize: 14,
            fontWeight: 500,
            color: "#ffffff",
            lineHeight: "20px",
          }}
        >
          {post.readTime} read
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2" style={{ padding: "16px 20px 20px" }}>
        {/* Category pill */}
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#155EEF",
            backgroundColor: "#EBF1FF",
            borderRadius: 9999,
            padding: "2px 10px",
            width: "fit-content",
            lineHeight: "20px",
          }}
        >
          {post.category}
        </span>

        {/* Title */}
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#0C111D",
            lineHeight: "24px",
            letterSpacing: "-0.36px",
            margin: 0,
          }}
        >
          {post.title}
        </h3>

        {/* Date */}
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#667085",
            lineHeight: "20px",
          }}
        >
          {post.date}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Search Icon                                                         */
/* ------------------------------------------------------------------ */

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                                 */
/* ------------------------------------------------------------------ */

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <>
      <Navbar />
      <main
        style={{
          backgroundColor: "#F4F8FF",
          minHeight: "100vh",
        }}
      >
        {/* ============================================================ */}
        {/*  Hero Area                                                    */}
        {/* ============================================================ */}
        <section
          className="flex w-full justify-center"
          style={{ padding: "140px 20px 0" }}
        >
          <div
            className="flex w-full flex-col items-center"
            style={{ maxWidth: 1150 }}
          >
            {/* Heading */}
            <h1
              style={{
                fontSize: 37.6,
                fontWeight: 700,
                color: "#182230",
                lineHeight: "45.12px",
                letterSpacing: "-0.752px",
                textAlign: "center",
                margin: 0,
              }}
            >
              Insights &amp; Strategies for the AI Agent Era
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#475467",
                lineHeight: "25.6px",
                letterSpacing: "-0.32px",
                textAlign: "center",
                maxWidth: 600,
                margin: "16px 0 0",
              }}
            >
              Discover expert tips, actionable guides, and the latest trends in
              AI agents, automation, and workflow optimization. Learn how to get
              the most out of your agent and stay ahead in a rapidly evolving
              landscape.
            </p>

            {/* Search Bar */}
            <div
              className="flex items-center"
              style={{
                maxWidth: 400,
                width: "100%",
                marginTop: 28,
                backgroundColor: "#ffffff",
                borderRadius: 12,
                border: "1px solid #E4E7EC",
                padding: "10px 14px",
                gap: 8,
              }}
            >
              <SearchIcon />
              <input
                type="text"
                placeholder="Search for Blogs..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#182230",
                  lineHeight: "20px",
                }}
              />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  Category Filter Tabs                                         */}
        {/* ============================================================ */}
        <section
          className="flex w-full justify-center"
          style={{ padding: "32px 20px 0" }}
        >
          <div
            className="flex w-full flex-wrap justify-center gap-3"
            style={{ maxWidth: 1150 }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: "20px",
                  borderRadius: 9999,
                  padding: "6px 16px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  backgroundColor:
                    activeCategory === cat ? "#155EEF" : "#ffffff",
                  color:
                    activeCategory === cat ? "#ffffff" : "#344054",
                  boxShadow:
                    activeCategory === cat
                      ? "none"
                      : "0 1px 2px rgba(16, 24, 40, 0.05)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/*  Blog Grid                                                    */}
        {/* ============================================================ */}
        <section
          className="flex w-full justify-center"
          style={{ padding: "40px 20px 0" }}
        >
          <div
            className="grid w-full gap-6"
            style={{
              maxWidth: 1150,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {filteredPosts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/*  Featured Blog                                                */}
        {/* ============================================================ */}
        <section
          className="flex w-full justify-center"
          style={{ padding: "60px 20px 60px" }}
        >
          <div
            className="flex w-full flex-col"
            style={{ maxWidth: 1150 }}
          >
            {/* Section heading */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#182230",
                lineHeight: "28px",
                letterSpacing: "-0.44px",
                margin: "0 0 20px",
              }}
            >
              Featured Blog
            </h2>

            {/* Featured card */}
            <div
              className="flex flex-col overflow-hidden md:flex-row"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 16,
                boxShadow:
                  "0 1px 3px rgba(16, 24, 40, 0.1), 0 1px 2px rgba(16, 24, 40, 0.06)",
              }}
            >
              {/* Image (left) */}
              <div
                className="relative"
                style={{
                  width: "50%",
                  minHeight: 320,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={FEATURED_POST.image}
                  alt={FEATURED_POST.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content (right) */}
              <div
                className="flex flex-col justify-center gap-3"
                style={{ padding: "32px 36px", flex: 1 }}
              >
                {/* Category pill */}
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#155EEF",
                    backgroundColor: "#EBF1FF",
                    borderRadius: 9999,
                    padding: "2px 10px",
                    width: "fit-content",
                    lineHeight: "20px",
                  }}
                >
                  {FEATURED_POST.category}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#0C111D",
                    lineHeight: "32px",
                    letterSpacing: "-0.48px",
                    margin: 0,
                  }}
                >
                  {FEATURED_POST.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#475467",
                    lineHeight: "25.6px",
                    letterSpacing: "-0.32px",
                    margin: 0,
                  }}
                >
                  {FEATURED_POST.description}
                </p>

                {/* Author / Date / Read time */}
                <div
                  className="flex items-center gap-3"
                  style={{ marginTop: 8 }}
                >
                  {FEATURED_POST.authorImage && (
                    <Image
                      src={FEATURED_POST.authorImage}
                      alt={FEATURED_POST.author ?? ""}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                  )}
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#182230",
                      lineHeight: "20px",
                    }}
                  >
                    {FEATURED_POST.author}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#667085",
                      lineHeight: "20px",
                    }}
                  >
                    {FEATURED_POST.date}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5"
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#667085",
                      backgroundColor: "#F4F8FF",
                      lineHeight: "18px",
                    }}
                  >
                    {FEATURED_POST.readTime} read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA + Footer                                                 */}
        {/* ============================================================ */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
