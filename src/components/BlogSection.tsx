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

interface BlogPost {
  readonly image: string;
  readonly category: string;
  readonly title: string;
  readonly description?: string;
  readonly author?: string;
  readonly authorImage?: string;
  readonly date: string;
}

const FEATURED_POST: BlogPost = {
  image: "/images/blog-featured.png",
  category: "Agent Use Cases",
  title: "How Customer Support Agents Can Cut Response Times by 60%",
  description:
    "Discover how AI-powered customer support agents can automate ticket triage, provide instant answers, and dramatically reduce average handling times without compromising service quality.",
  author: "Adam Guild",
  authorImage: "/images/blog-author.jpg",
  date: "Aug 9, 2025",
};

const SMALL_POSTS: readonly BlogPost[] = [
  {
    image: "/images/blog-thumb-1.jpg",
    category: "Agent Use Cases",
    title: "Using AI Sales Agents to Boost Lead Conversion Rates",
    date: "Aug 9, 2025",
  },
  {
    image: "/images/blog-thumb-2.png",
    category: "Automation Tips",
    title: "5 Automation Workflows Every Business Should Implement in 2025",
    date: "Aug 9, 2025",
  },
  {
    image: "/images/blog-thumb-3.jpg",
    category: "Automation Tips",
    title: "How to Integrate AI Agents with Your Existing Tools",
    date: "Aug 7, 2025",
  },
];

/* ------------------------------------------------------------------ */
/*  Small Blog Card                                                     */
/* ------------------------------------------------------------------ */

function SmallBlogCard({ post }: { readonly post: BlogPost }) {
  return (
    <div className="flex gap-5">
      {/* Thumbnail */}
      <div
        className="relative shrink-0 overflow-hidden"
        style={{ width: 200, height: 150, borderRadius: 12 }}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        {/* Read time badge */}
        <span
          className="absolute right-2 bottom-2 rounded-full px-2 py-0.5"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            fontSize: 14,
            fontWeight: 500,
            color: "rgb(255, 255, 255)",
            lineHeight: "20px",
          }}
        >
          min read
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center gap-2">
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "rgb(21, 94, 239)",
            lineHeight: "17.6px",
          }}
        >
          {post.category}
        </span>
        <h3
          style={{
            fontSize: 19,
            fontWeight: 600,
            color: "rgb(12, 17, 29)",
            lineHeight: "24.4px",
            letterSpacing: "-0.4px",
            margin: 0,
          }}
        >
          {post.title}
        </h3>
        <span
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: "rgb(71, 84, 103)",
            lineHeight: "21.75px",
            letterSpacing: "-0.3px",
          }}
        >
          {post.date}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                      */
/* ------------------------------------------------------------------ */

export default function BlogSection() {
  return (
    <section
      className="flex w-full justify-center"
      style={{
        backgroundColor: "rgb(244, 248, 255)",
        padding: "70px 15px 0px",
      }}
    >
      <div
        className="flex w-full flex-col"
        style={{ maxWidth: 1150 }}
      >
        {/* ---- Header ---- */}
        <div className="flex flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <h2
              style={{
                fontSize: 37.6,
                fontWeight: 700,
                color: "rgb(0, 0, 0)",
                lineHeight: "45.12px",
                letterSpacing: "-0.752px",
              }}
            >
              Blog
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "rgb(71, 84, 103)",
                lineHeight: "25.6px",
                letterSpacing: "-0.32px",
              }}
            >
              Ideas, how-tos, and product updates
            </p>
          </div>

          {/* Read the blog button */}
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
              Read the blog
            </span>
            <ArrowCircle />
          </a>
        </div>

        {/* ---- Content Grid ---- */}
        <div className="grid gap-8 pb-16 md:grid-cols-2">
          {/* Featured Card */}
          <div className="flex flex-col gap-4">
            {/* Image */}
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: 16, height: 400 }}
            >
              <Image
                src={FEATURED_POST.image}
                alt={FEATURED_POST.title}
                fill
                className="object-cover"
              />
              {/* Read time badge */}
              <span
                className="absolute right-3 bottom-3 rounded-full px-3 py-1"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgb(255, 255, 255)",
                  lineHeight: "20px",
                }}
              >
                min read
              </span>
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-3">
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "rgb(21, 94, 239)",
                  lineHeight: "17.6px",
                }}
              >
                {FEATURED_POST.category}
              </span>
              <h3
                style={{
                  fontSize: 32.6,
                  fontWeight: 600,
                  color: "rgb(25, 26, 28)",
                  lineHeight: "39.12px",
                  letterSpacing: "-0.652px",
                  margin: 0,
                }}
              >
                {FEATURED_POST.title}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "rgb(24, 34, 48)",
                  lineHeight: "25.6px",
                  letterSpacing: "-0.32px",
                  margin: 0,
                }}
              >
                {FEATURED_POST.description}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2">
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
                    fontSize: 16,
                    fontWeight: 500,
                    color: "rgb(25, 26, 28)",
                    lineHeight: "25.6px",
                    letterSpacing: "-0.32px",
                  }}
                >
                  {FEATURED_POST.author}
                </span>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "rgb(24, 34, 48)",
                    lineHeight: "25.6px",
                    letterSpacing: "-0.32px",
                  }}
                >
                  {FEATURED_POST.date}
                </span>
              </div>
            </div>
          </div>

          {/* Small Cards Column */}
          <div className="flex flex-col justify-between gap-6">
            {SMALL_POSTS.map((post) => (
              <SmallBlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
