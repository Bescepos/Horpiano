export interface ArticleSection {
  heading: string;
  body: string[];
}

export interface ArticleContent {
  intro: string;
  sections: ArticleSection[];
  takeaways: string[];
}

/** Concise, practical article bodies keyed by resource slug. */
export const resourceArticles: Record<string, ArticleContent> = {
  "beat-writers-block-for-good": {
    intro:
      "Writer's block is rarely a lack of ideas — it's usually friction, perfectionism, or fatigue. The goal isn't to wait for inspiration, but to build a process that keeps you moving even when motivation dips.",
    sections: [
      {
        heading: "Lower the stakes of the first draft",
        body: [
          "Your first draft only has to exist, not impress. Give yourself explicit permission to write badly — you can't edit a blank page.",
          "Try a timed sprint: set a timer for 25 minutes and write without stopping or deleting. Momentum beats polish at this stage.",
        ],
      },
      {
        heading: "Make starting easy",
        body: [
          "End each session mid-sentence so you always have an obvious place to pick up. Starting is the hardest part, so remove the friction.",
          "Keep a running 'parking lot' note for tangents and ideas, so you can capture them without derailing your flow.",
        ],
      },
      {
        heading: "Protect your energy",
        body: [
          "Write at the time of day when your focus is highest, and guard that window from email and notifications.",
          "If you're truly stuck on a scene, skip ahead. You don't have to write in order.",
        ],
      },
    ],
    takeaways: [
      "Permission to write badly unlocks momentum.",
      "Short, timed sprints beat waiting for inspiration.",
      "Stop mid-sentence to make tomorrow's start effortless.",
    ],
  },
  "self-publishing-vs-traditional": {
    intro:
      "There's no universally 'right' way to publish — only the right fit for your goals. Understanding the real trade-offs helps you choose with confidence rather than fear of missing out.",
    sections: [
      {
        heading: "Control and royalties",
        body: [
          "Self-publishing gives you full control over cover, timing, price, and rights — and significantly higher per-copy royalties.",
          "Traditional publishing trades much of that control for an advance, established distribution, and the validation of a publisher's name.",
        ],
      },
      {
        heading: "Speed and effort",
        body: [
          "Self-publishing can move from finished manuscript to market in weeks, but you (or your team) handle every step.",
          "Traditional publishing can take one to two years and requires querying agents, but the heavy lifting of production is handled for you.",
        ],
      },
      {
        heading: "How to decide",
        body: [
          "Ask what matters most: control and speed, or prestige and bookstore presence. Many authors today build hybrid careers across both.",
          "Whichever you choose, professional editing and design are non-negotiable for a competitive book.",
        ],
      },
    ],
    takeaways: [
      "Self-publishing maximizes control, speed, and royalties.",
      "Traditional publishing offers advances and prestige, at the cost of control and time.",
      "Quality production matters regardless of path.",
    ],
  },
  "author-website-essentials": {
    intro:
      "Your website is the one platform you truly own — no algorithm, no rules but yours. A focused author site turns curious visitors into subscribers, and subscribers into lifelong readers.",
    sections: [
      {
        heading: "Capture and connect",
        body: [
          "An email signup with a compelling incentive (a free chapter or short story) should be front and center.",
          "Make your books easy to find and buy, with clear links to every retailer.",
        ],
      },
      {
        heading: "Build trust",
        body: [
          "A warm, professional author bio and photo (or brand mark) help readers feel they know you.",
          "Reviews, press, and a simple contact path all reinforce credibility.",
        ],
      },
      {
        heading: "Keep it fast and simple",
        body: [
          "A clean, fast, mobile-friendly site outperforms a cluttered one every time.",
          "Update it when you launch — a current site signals an active, serious author.",
        ],
      },
    ],
    takeaways: [
      "Lead with an email capture and a strong incentive.",
      "Make your books effortless to find and buy.",
      "Fast, clean, and current beats flashy.",
    ],
  },
  "book-launch-timeline": {
    intro:
      "A great launch isn't a single day — it's a campaign. Spreading your effort across the months before and after publication turns a one-day spike into lasting momentum.",
    sections: [
      {
        heading: "8–12 weeks out",
        body: [
          "Finalize your cover and metadata, set up pre-orders, and start building your launch team and reviewer list.",
          "Begin teasing the book to your email list and social channels.",
        ],
      },
      {
        heading: "Launch week",
        body: [
          "Concentrate reviews, promotions, and outreach into a tight window to drive retailer ranking.",
          "Make it easy for your audience to buy and share with ready-made links and graphics.",
        ],
      },
      {
        heading: "After launch",
        body: [
          "Sustain momentum with ads, ongoing outreach, and follow-up to readers who engaged.",
          "Capture lessons for your next launch — every campaign teaches you something.",
        ],
      },
    ],
    takeaways: [
      "Start the campaign 8–12 weeks before publication.",
      "Concentrate activity in launch week for ranking impact.",
      "Plan deliberately for the post-launch tail.",
    ],
  },
  "amazon-keywords-that-sell": {
    intro:
      "Keywords and categories are how readers discover your book on Amazon. Choosing them strategically is one of the highest-leverage, lowest-cost moves you can make.",
    sections: [
      {
        heading: "Think like a reader",
        body: [
          "List the words a reader would actually type to find a book like yours — themes, tropes, comparisons, and reader intent.",
          "Specific, relevant phrases usually outperform broad, competitive single words.",
        ],
      },
      {
        heading: "Research before you commit",
        body: [
          "Study bestsellers in your niche to see the language and categories they use.",
          "Test and refine — keywords and categories aren't set in stone.",
        ],
      },
      {
        heading: "Use every slot wisely",
        body: [
          "Fill all your keyword fields and choose the most relevant, least-saturated categories you qualify for.",
          "Revisit your choices periodically as the market shifts.",
        ],
      },
    ],
    takeaways: [
      "Match the language real readers search for.",
      "Specific phrases beat broad, competitive terms.",
      "Treat keywords and categories as ongoing experiments.",
    ],
  },
  "what-editors-wish-you-knew": {
    intro:
      "Editing is a collaboration, not a verdict. Understanding how editors work helps you get dramatically more value from the relationship — and a stronger book.",
    sections: [
      {
        heading: "Self-edit first",
        body: [
          "Send your strongest possible draft. Fixing obvious issues yourself frees your editor to focus on the deeper craft.",
          "Take time away from the manuscript before your final read — distance reveals problems.",
        ],
      },
      {
        heading: "Know the levels",
        body: [
          "Developmental, line, copy, and proofreading solve different problems. Booking the wrong one wastes time and money.",
          "When unsure, a manuscript evaluation points you to the right level.",
        ],
      },
      {
        heading: "Stay open, stay you",
        body: [
          "Approach feedback with curiosity; the goal is your vision, realized more fully.",
          "You're still the author — discuss changes you disagree with rather than silently accepting or rejecting them.",
        ],
      },
    ],
    takeaways: [
      "Submit your best self-edited draft.",
      "Match the editing level to your manuscript's needs.",
      "Editing is a partnership toward your vision.",
    ],
  },
  "building-author-brand-from-scratch": {
    intro:
      "An author brand isn't a logo — it's the consistent promise your name makes to readers. Even with one book, defining it early makes everything you do more effective.",
    sections: [
      {
        heading: "Define your promise",
        body: [
          "Clarify what you write, who it's for, and the feeling readers can expect from you.",
          "A focused promise is more memorable than trying to be everything to everyone.",
        ],
      },
      {
        heading: "Show up consistently",
        body: [
          "Use a cohesive look, voice, and message across your website, covers, and social profiles.",
          "Consistency builds recognition, and recognition builds trust.",
        ],
      },
      {
        heading: "Lead with value",
        body: [
          "Share insight, stories, and generosity rather than constant promotion.",
          "Relationships, not reach alone, turn readers into a loyal following.",
        ],
      },
    ],
    takeaways: [
      "A brand is a clear, consistent promise to readers.",
      "Cohesion across platforms builds recognition.",
      "Lead with value, not constant selling.",
    ],
  },
  "isbn-explained": {
    intro:
      "ISBNs are the quiet infrastructure of publishing. Understanding them helps you make smart decisions about rights, distribution, and how your book appears in the world.",
    sections: [
      {
        heading: "What an ISBN is",
        body: [
          "An ISBN is a unique identifier for a specific edition and format of your book.",
          "Each format — eBook, paperback, hardcover, audiobook — typically needs its own ISBN.",
        ],
      },
      {
        heading: "Who should own it",
        body: [
          "Owning your ISBNs lets you list yourself as the publisher of record and keeps you flexible.",
          "Free ISBNs from a platform are convenient but can tie you to that platform as publisher.",
        ],
      },
      {
        heading: "Plan ahead",
        body: [
          "Decide on your formats early so you register the right identifiers from the start.",
          "Keep a simple record of which ISBN maps to which edition.",
        ],
      },
    ],
    takeaways: [
      "Each format/edition needs its own ISBN.",
      "Owning your ISBNs preserves flexibility and control.",
      "Plan formats early and track them carefully.",
    ],
  },
  "audiobook-boom": {
    intro:
      "Audio is the fastest-growing format in publishing, opening a large and loyal audience. Adding an audiobook can meaningfully expand both your reach and your revenue.",
    sections: [
      {
        heading: "Why audio matters now",
        body: [
          "Listeners consume books during commutes, workouts, and chores — time print and eBooks can't reach.",
          "Audiobook buyers are often voracious, high-value readers.",
        ],
      },
      {
        heading: "Narration choices",
        body: [
          "A professional narrator who fits your book can elevate the experience dramatically.",
          "For memoir and nonfiction, author narration can add authenticity — if it suits your voice.",
        ],
      },
      {
        heading: "Getting it right",
        body: [
          "Quality production and proper distribution are essential to compete.",
          "Coordinating the moving parts is where expert help pays off.",
        ],
      },
    ],
    takeaways: [
      "Audio reaches readers other formats can't.",
      "Narrator fit makes or breaks the experience.",
      "Production quality and distribution are non-negotiable.",
    ],
  },
  "growing-an-email-list": {
    intro:
      "Your email list is the one audience you own outright. Unlike social platforms, it isn't subject to algorithms — making it the most reliable engine for long-term book sales.",
    sections: [
      {
        heading: "Give a reason to subscribe",
        body: [
          "Offer something genuinely valuable — a free story, a sample chapter, or a useful guide.",
          "Make the signup prominent and the benefit crystal clear.",
        ],
      },
      {
        heading: "Welcome and nurture",
        body: [
          "A warm welcome sequence sets expectations and builds the relationship from day one.",
          "Show up consistently with value, not just promotions.",
        ],
      },
      {
        heading: "Respect the inbox",
        body: [
          "Email people as if writing to a friend — personal, generous, and never spammy.",
          "A smaller, engaged list outperforms a large, indifferent one.",
        ],
      },
    ],
    takeaways: [
      "An email list is the audience you truly own.",
      "Offer real value to earn the subscribe.",
      "Engagement matters more than raw size.",
    ],
  },
  "publishing-trends-2026": {
    intro:
      "Publishing keeps evolving, and the authors who thrive are those who plan around where the market is heading — not where it's been.",
    sections: [
      {
        heading: "Discovery is shifting",
        body: [
          "Readers increasingly discover books through community, recommendations, and short-form video.",
          "Authors who build genuine audiences own their discovery rather than renting it.",
        ],
      },
      {
        heading: "Formats are multiplying",
        body: [
          "Audio continues its rapid growth, and special editions deepen reader loyalty.",
          "Meeting readers in their preferred format expands your reach.",
        ],
      },
      {
        heading: "Direct relationships win",
        body: [
          "Owned channels — email and your website — grow in value as platforms change.",
          "The strongest careers are built on direct reader relationships.",
        ],
      },
    ],
    takeaways: [
      "Community and video shape discovery.",
      "Multiple formats expand your audience.",
      "Owned channels are your most durable asset.",
    ],
  },
  "write-a-memoir-that-resonates": {
    intro:
      "A memoir isn't a diary — it's a crafted story drawn from your life. The art lies in finding the universal truth inside your personal experience.",
    sections: [
      {
        heading: "Find the throughline",
        body: [
          "A memoir needs a focus — a question, transformation, or theme — not your entire life.",
          "Choose the moments that serve that throughline and let the rest go.",
        ],
      },
      {
        heading: "Write with honesty and craft",
        body: [
          "Readers connect with vulnerability and specificity, not perfection.",
          "Use scene, detail, and reflection to make your experience vivid and meaningful.",
        ],
      },
      {
        heading: "Make it universal",
        body: [
          "The best memoirs help readers see their own lives more clearly.",
          "Ask what your story offers a reader who has never lived it.",
        ],
      },
    ],
    takeaways: [
      "Build the memoir around a single throughline.",
      "Honesty and specificity create connection.",
      "Turn personal experience into universal meaning.",
    ],
  },
};

export function getArticle(slug: string): ArticleContent | undefined {
  return resourceArticles[slug];
}
