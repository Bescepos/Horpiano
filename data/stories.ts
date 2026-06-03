import type { Story } from "@/lib/types";

export const stories: Story[] = [
  {
    id: "s1",
    slug: "the-quiet-tide",
    kind: "featured-book",
    title: "The Quiet Tide",
    author: "Eleanor Hayes",
    genre: "Literary Fiction",
    cover: { from: "#1E3354", to: "#0A1320" },
    summary:
      "A debut literary novel rescued from a stalled draft and shaped into a category bestseller.",
    challenge:
      "Eleanor had a finished but unfocused manuscript and no clear path to publication after two agent rejections.",
    solution:
      "A developmental edit tightened the narrative, followed by a custom cover, KDP and IngramSpark setup, and a coordinated launch campaign.",
    outcome:
      "The Quiet Tide reached #1 in its Amazon category in launch week and earned over 400 reviews in its first three months.",
    metrics: [
      { label: "Category rank", value: 1, prefix: "#" },
      { label: "Reviews in 90 days", value: 420, suffix: "+" },
      { label: "Copies sold", value: 12000, suffix: "+" },
    ],
    servicesUsed: ["editorial", "design", "publishing", "marketing"],
    featured: true,
    publishedAt: "2025-09-12",
  },
  {
    id: "s2",
    slug: "build-to-lead",
    kind: "case-study",
    title: "Build to Lead",
    author: "Marcus Bell",
    genre: "Business",
    cover: { from: "#A87C20", to: "#43320F" },
    summary:
      "A time-strapped founder became a published authority through a fully ghostwritten business book.",
    challenge:
      "Marcus had two decades of leadership insight but zero time to write and no framework for the book.",
    solution:
      "Through structured interviews our ghostwriter built his voice profile and delivered a complete manuscript, followed by branding and a media kit.",
    outcome:
      "Build to Lead became a calling card that landed Marcus keynote invitations and a 3x increase in inbound consulting leads.",
    metrics: [
      { label: "Months to manuscript", value: 5 },
      { label: "Keynote invitations", value: 14, suffix: "+" },
      { label: "Lead increase", value: 300, suffix: "%" },
    ],
    servicesUsed: ["ghostwriting", "branding", "publishing"],
    featured: true,
    publishedAt: "2025-06-03",
  },
  {
    id: "s3",
    slug: "ember-and-ash",
    kind: "featured-book",
    title: "Ember & Ash",
    author: "Amara Stone",
    genre: "Fantasy",
    cover: { from: "#27416A", to: "#C8992E" },
    summary:
      "A self-published fantasy series launched with a scroll-stopping cover and a wide distribution strategy.",
    challenge:
      "Amara's first book had strong writing but a homemade cover and almost no visibility.",
    solution:
      "A new genre-aware cover, professional formatting, and an Amazon advertising campaign repositioned the title for its true audience.",
    outcome:
      "Sales increased fivefold within two months and the series built a waiting list of readers for book two.",
    metrics: [
      { label: "Sales increase", value: 500, suffix: "%" },
      { label: "Newsletter subscribers", value: 8000, suffix: "+" },
      { label: "Series rank", value: 3, prefix: "#" },
    ],
    servicesUsed: ["design", "marketing", "web-technology"],
    featured: true,
    publishedAt: "2025-03-21",
  },
  {
    id: "s4",
    slug: "the-long-way-home",
    kind: "success-story",
    title: "The Long Way Home",
    author: "Sophie Laurent",
    genre: "Memoir",
    cover: { from: "#516E9E", to: "#101D30" },
    summary:
      "A deeply personal memoir guided from first idea to a polished, widely-read audiobook edition.",
    challenge:
      "Sophie wanted to tell a sensitive personal story but struggled with structure and emotional distance.",
    solution:
      "Memoir-specialist editing shaped the narrative, paired with author branding and a self-narrated audiobook.",
    outcome:
      "The memoir resonated with readers worldwide and the audiobook became Sophie's best-selling format.",
    metrics: [
      { label: "Audiobook listeners", value: 9500, suffix: "+" },
      { label: "Average rating", value: 5, prefix: "" },
      { label: "Speaking invitations", value: 20, suffix: "+" },
    ],
    servicesUsed: ["editorial", "branding", "audiobooks"],
    featured: false,
    publishedAt: "2025-01-15",
  },
  {
    id: "s5",
    slug: "midnight-protocol",
    kind: "featured-book",
    title: "Midnight Protocol",
    author: "David Okafor",
    genre: "Thriller",
    cover: { from: "#0A1320", to: "#33517F" },
    summary:
      "A thriller relaunch that revived a quiet backlist title into a steady bestseller.",
    challenge:
      "David's well-written thriller had launched without marketing and sold only a handful of copies.",
    solution:
      "A refreshed cover, optimized metadata, and a sustained advertising campaign reintroduced the book to thriller readers.",
    outcome:
      "Monthly sales grew tenfold and held, turning a dormant title into a reliable income stream.",
    metrics: [
      { label: "Monthly sales growth", value: 900, suffix: "%" },
      { label: "Reviews earned", value: 650, suffix: "+" },
      { label: "Months profitable", value: 12, suffix: "+" },
    ],
    servicesUsed: ["design", "marketing", "publishing"],
    featured: false,
    publishedAt: "2024-11-08",
  },
  {
    id: "s6",
    slug: "small-hands-big-dreams",
    kind: "success-story",
    title: "Small Hands, Big Dreams",
    author: "Grace Adeyemi",
    genre: "Children's",
    cover: { from: "#D9AF45", to: "#A87C20" },
    summary:
      "A children's picture book brought to life with specialist editing, illustration coordination, and print design.",
    challenge:
      "Grace had a heartfelt story but no experience with the unique demands of children's publishing.",
    solution:
      "Children's-book editing tuned the read-aloud rhythm, paired with interior design and print-ready formatting.",
    outcome:
      "The book was picked up by local schools and became a staple in classroom reading lists.",
    metrics: [
      { label: "Schools adopting", value: 60, suffix: "+" },
      { label: "Copies printed", value: 7000, suffix: "+" },
      { label: "Reprints", value: 3 },
    ],
    servicesUsed: ["editorial", "design", "publishing"],
    featured: false,
    publishedAt: "2024-08-19",
  },
];
