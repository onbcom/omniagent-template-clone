import Image from "next/image";

interface BlogPost {
  category: string;
  title: string;
  description?: string;
  author?: { name: string; avatar: string };
  date: string;
  readTime: string;
  image: string;
}

const featuredPost: BlogPost = {
  category: "Agent Use Cases",
  title: "How Customer Support Agents Can Cut Response Times by 60%",
  description:
    "Discover how AI-powered customer support agents can automate ticket triage, provide instant answers, and dramatically reduce average handling times without compromising service quality.",
  author: { name: "Adam Guild", avatar: "/images/blog-author.jpg" },
  date: "Aug 9, 2025",
  readTime: "5 min read",
  image: "/images/blog-featured.png",
};

const smallPosts: BlogPost[] = [
  {
    category: "Agent Use Cases",
    title: "Using AI Sales Agents to Boost Lead Conversion Rates",
    date: "Aug 9, 2025",
    readTime: "3 min read",
    image: "/images/blog-thumb-1.jpg",
  },
  {
    category: "Automation Tips",
    title:
      "5 Automation Workflows Every Business Should Implement in 2025",
    date: "Aug 9, 2025",
    readTime: "2 min read",
    image: "/images/blog-thumb-2.png",
  },
  {
    category: "Automation Tips",
    title: "How to Integrate AI Agents with Your Existing Tools",
    date: "Aug 7, 2025",
    readTime: "4 min read",
    image: "/images/blog-thumb-3.jpg",
  },
];

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-block bg-[#F4F8FF] text-[#155EEF] text-xs font-medium px-3 py-1 rounded-full">
      {label}
    </span>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <div className="rounded-2xl border border-[#E4E7EC] overflow-hidden bg-white flex flex-col">
      <div className="relative w-full" style={{ aspectRatio: "531 / 280" }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 531px"
        />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <CategoryBadge label={post.category} />
        <h3 className="text-lg font-semibold text-[#0C111D] leading-snug">
          {post.title}
        </h3>
        {post.description && (
          <p className="text-sm text-[#475467] leading-relaxed">
            {post.description}
          </p>
        )}
        <div className="flex items-center gap-3 mt-2">
          {post.author && (
            <>
              <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <span className="text-sm font-medium text-[#0C111D]">
                {post.author.name}
              </span>
            </>
          )}
          <span className="text-sm text-[#667085]">{post.date}</span>
          <span className="text-sm text-[#667085]">&middot;</span>
          <span className="text-sm text-[#667085]">{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}

function SmallCard({ post }: { post: BlogPost }) {
  return (
    <div className="flex gap-4 items-start rounded-2xl border border-[#E4E7EC] bg-white p-4">
      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="flex flex-col gap-1.5 min-w-0">
        <CategoryBadge label={post.category} />
        <h3 className="text-base font-semibold text-[#0C111D] leading-snug">
          {post.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#667085]">{post.date}</span>
          <span className="text-sm text-[#667085]">&middot;</span>
          <span className="text-sm text-[#667085]">{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}

export default function BlogSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
              Blog
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Ideas, how-tos, and product updates
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#155EEF] hover:underline whitespace-nowrap"
          >
            Read the blog
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured card */}
          <FeaturedCard post={featuredPost} />

          {/* Small cards column */}
          <div className="flex flex-col gap-4">
            {smallPosts.map((post) => (
              <SmallCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
