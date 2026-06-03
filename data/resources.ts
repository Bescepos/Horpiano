import type { Resource, ResourceCategoryMeta } from "@/lib/types";

export const resourceCategories: ResourceCategoryMeta[] = [
  {
    id: "writing-tips",
    label: "Writing Tips",
    description: "Craft advice to help you write better and finish faster.",
  },
  {
    id: "publishing-guides",
    label: "Publishing Guides",
    description: "Step-by-step guidance through the publishing maze.",
  },
  {
    id: "author-branding",
    label: "Author Branding",
    description: "Build a name and platform readers remember.",
  },
  {
    id: "marketing-strategies",
    label: "Marketing Strategies",
    description: "Proven ways to get your book into more hands.",
  },
  {
    id: "industry-insights",
    label: "Industry Insights",
    description: "Trends and analysis from inside publishing.",
  },
];

export const resources: Resource[] = [
  {
    id: "r1",
    slug: "beat-writers-block-for-good",
    title: "How to Beat Writer's Block for Good",
    excerpt:
      "Practical, repeatable techniques to get unstuck and keep your draft moving — even on the hard days.",
    category: "writing-tips",
    tags: ["drafting", "productivity", "habits"],
    readingTimeMins: 6,
    publishedAt: "2026-05-18",
    featured: true,
    accent: { from: "#1E3354", to: "#0A1320" },
  },
  {
    id: "r2",
    slug: "self-publishing-vs-traditional",
    title: "Self-Publishing vs. Traditional: Which Is Right for You?",
    excerpt:
      "A clear-eyed comparison of control, royalties, timelines, and prestige to help you choose your path.",
    category: "publishing-guides",
    tags: ["self-publishing", "traditional", "strategy"],
    readingTimeMins: 9,
    publishedAt: "2026-05-09",
    featured: true,
    accent: { from: "#A87C20", to: "#43320F" },
  },
  {
    id: "r3",
    slug: "author-website-essentials",
    title: "The 7 Essentials Every Author Website Needs",
    excerpt:
      "From your email capture to your book pages, here's what turns a visitor into a lifelong reader.",
    category: "author-branding",
    tags: ["website", "platform", "email"],
    readingTimeMins: 7,
    publishedAt: "2026-04-27",
    featured: true,
    accent: { from: "#27416A", to: "#C8992E" },
  },
  {
    id: "r4",
    slug: "book-launch-timeline",
    title: "The 90-Day Book Launch Timeline",
    excerpt:
      "A week-by-week plan for a launch that builds real momentum instead of fizzling on day one.",
    category: "marketing-strategies",
    tags: ["launch", "planning", "promotion"],
    readingTimeMins: 11,
    publishedAt: "2026-04-15",
    accent: { from: "#516E9E", to: "#101D30" },
  },
  {
    id: "r5",
    slug: "amazon-keywords-that-sell",
    title: "Choosing Amazon Keywords That Actually Sell",
    excerpt:
      "Stop guessing. Here's how to research and select the keywords that make your book discoverable.",
    category: "marketing-strategies",
    tags: ["amazon", "seo", "metadata"],
    readingTimeMins: 8,
    publishedAt: "2026-04-02",
    accent: { from: "#0A1320", to: "#33517F" },
  },
  {
    id: "r6",
    slug: "what-editors-wish-you-knew",
    title: "What Editors Wish Every Author Knew",
    excerpt:
      "Insider perspective on the editing process — and how to get far more value from your edit.",
    category: "writing-tips",
    tags: ["editing", "revision", "craft"],
    readingTimeMins: 6,
    publishedAt: "2026-03-21",
    accent: { from: "#1E3354", to: "#27416A" },
  },
  {
    id: "r7",
    slug: "building-author-brand-from-scratch",
    title: "Building Your Author Brand From Scratch",
    excerpt:
      "A beginner-friendly framework for defining who you are as an author and showing up consistently.",
    category: "author-branding",
    tags: ["branding", "positioning", "voice"],
    readingTimeMins: 10,
    publishedAt: "2026-03-08",
    accent: { from: "#D9AF45", to: "#A87C20" },
  },
  {
    id: "r8",
    slug: "isbn-explained",
    title: "ISBNs Explained: Everything Authors Need to Know",
    excerpt:
      "What an ISBN is, how many you need, and the decisions that affect your rights and distribution.",
    category: "publishing-guides",
    tags: ["isbn", "metadata", "distribution"],
    readingTimeMins: 5,
    publishedAt: "2026-02-25",
    accent: { from: "#27416A", to: "#0A1320" },
  },
  {
    id: "r9",
    slug: "audiobook-boom",
    title: "Inside the Audiobook Boom — and How to Ride It",
    excerpt:
      "Why listening is the fastest-growing format and how to add an audio edition without the headache.",
    category: "industry-insights",
    tags: ["audiobooks", "trends", "formats"],
    readingTimeMins: 7,
    publishedAt: "2026-02-11",
    accent: { from: "#33517F", to: "#101D30" },
  },
  {
    id: "r10",
    slug: "growing-an-email-list",
    title: "Growing an Email List Readers Actually Open",
    excerpt:
      "Your list is the one audience you own. Here's how to build it and keep it engaged.",
    category: "marketing-strategies",
    tags: ["email", "newsletter", "engagement"],
    readingTimeMins: 9,
    publishedAt: "2026-01-29",
    accent: { from: "#A87C20", to: "#634914" },
  },
  {
    id: "r11",
    slug: "publishing-trends-2026",
    title: "Publishing Trends Shaping 2026",
    excerpt:
      "The shifts in reader behavior, formats, and discovery that smart authors are planning around.",
    category: "industry-insights",
    tags: ["trends", "strategy", "market"],
    readingTimeMins: 8,
    publishedAt: "2026-01-12",
    accent: { from: "#1E3354", to: "#C8992E" },
  },
  {
    id: "r12",
    slug: "write-a-memoir-that-resonates",
    title: "How to Write a Memoir That Resonates",
    excerpt:
      "Turning lived experience into a story readers connect with — structure, honesty, and craft.",
    category: "writing-tips",
    tags: ["memoir", "structure", "voice"],
    readingTimeMins: 10,
    publishedAt: "2025-12-20",
    accent: { from: "#516E9E", to: "#27416A" },
  },
];
