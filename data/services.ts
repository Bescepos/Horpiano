import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "editorial",
    title: "Editorial Services",
    tagline: "Polish your manuscript to a professional standard.",
    icon: "editorial",
    summary:
      "From big-picture structure to the final comma, our editors refine your manuscript until every page reads with clarity, confidence, and craft.",
    hero: {
      heading: "Editorial Services that elevate every page",
      subheading:
        "Developmental insight, line-level precision, and a meticulous proofread, so your story reaches readers at its very best.",
    },
    overview: [
      "Great books are not written, they are rewritten. Our editorial team works alongside you at every level of the craft, from the architecture of your narrative to the rhythm of a single sentence.",
      "Whether you are shaping a debut novel, a career-defining memoir, or a rigorously researched nonfiction work, we pair you with specialists who understand your genre and respect your voice.",
    ],
    benefits: [
      {
        title: "Genre-matched specialists",
        description:
          "You work with an editor experienced in your category, fiction, nonfiction, memoir, academic, or children's.",
      },
      {
        title: "Voice-preserving edits",
        description:
          "We strengthen your manuscript without overwriting your style. The book still sounds unmistakably like you.",
      },
      {
        title: "Clear, actionable feedback",
        description:
          "Every edit comes with margin notes and an editorial letter so you understand the why behind each change.",
      },
      {
        title: "Submission-ready polish",
        description:
          "Manuscripts leave our desk clean, consistent, and ready for agents, publishers, or self-publishing.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Manuscript review",
        description:
          "We read your work in full and assess structure, pacing, voice, and the level of editing it needs.",
        durationLabel: "3-5 days",
      },
      {
        step: 2,
        title: "Editorial plan",
        description:
          "You receive a tailored scope, timeline, and quote so expectations are aligned before we begin.",
        durationLabel: "1-2 days",
      },
      {
        step: 3,
        title: "The edit",
        description:
          "Tracked changes plus an editorial letter, developmental, line, copy, or proofread as agreed.",
        durationLabel: "2-6 weeks",
      },
      {
        step: 4,
        title: "Review & refine",
        description:
          "We talk through the feedback, answer questions, and complete a clean-up pass on your revisions.",
        durationLabel: "1 week",
      },
    ],
    subServices: [
      { title: "Manuscript Evaluation", description: "A full diagnostic read with a strategic editorial roadmap." },
      { title: "Developmental Editing", description: "Structure, plot, pacing, character, and argument shaped at the macro level." },
      { title: "Line Editing", description: "Sentence-level craft, flow, tone, clarity, and style." },
      { title: "Copy Editing", description: "Grammar, consistency, syntax, and a polished house style." },
      { title: "Proofreading", description: "The final quality pass that catches every lingering error." },
      { title: "Beta Reading", description: "Structured reader feedback before you publish or submit." },
      { title: "Fact Checking", description: "Verification of names, dates, claims, and references." },
      { title: "Fiction Editing", description: "Specialist editing for novels and short fiction across genres." },
      { title: "Nonfiction Editing", description: "Clarity, authority, and logical flow for nonfiction works." },
      { title: "Memoir Editing", description: "Sensitive shaping of true stories and personal narrative." },
      { title: "Children's Book Editing", description: "Age-appropriate language, pacing, and read-aloud rhythm." },
      { title: "Academic Editing", description: "Rigorous editing aligned to scholarly standards and citations." },
    ],
    faqs: [
      {
        question: "Which type of editing do I need?",
        answer:
          "Start with a manuscript evaluation. We assess your draft and recommend the right level (developmental, line, copy, or proofreading) so you never pay for editing you don't need.",
      },
      {
        question: "Will editing change my voice?",
        answer:
          "No. Our editors enhance clarity and craft while preserving the style that makes your writing yours. Every substantive change is suggested, not imposed.",
      },
      {
        question: "How long does an edit take?",
        answer:
          "Timelines depend on word count and depth. A proofread may take a week; a developmental edit of a full novel typically runs four to six weeks.",
      },
    ],
    cta: {
      heading: "Ready for an editor in your corner?",
      body: "Send us your manuscript and we'll recommend the right editorial path forward.",
    },
    hasDetailPage: true,
    featured: true,
    order: 1,
  },
  {
    slug: "ghostwriting",
    title: "Ghostwriting",
    tagline: "Your story, expertly written, in your voice.",
    icon: "ghostwriting",
    summary:
      "Have a powerful story or idea but no time to write it? Our ghostwriters turn your vision into a beautifully crafted manuscript that sounds entirely like you.",
    hero: {
      heading: "Ghostwriting that sounds like you",
      subheading:
        "Partner with a professional writer who captures your voice and transforms your ideas into a finished, publish-ready book.",
    },
    overview: [
      "You have the story, the expertise, or the message, we provide the craft and the discipline to get it written. Our ghostwriters become a seamless extension of your voice.",
      "Through structured interviews, careful research, and collaborative drafting, we produce a manuscript you are proud to put your name on, on a timeline that actually finishes.",
    ],
    benefits: [
      {
        title: "Authentic voice capture",
        description: "Deep interviews and voice analysis ensure the book reads as if you wrote every word.",
      },
      {
        title: "Complete confidentiality",
        description: "Your authorship is total. Our involvement stays private, always.",
      },
      {
        title: "A finished manuscript",
        description: "We carry the project from blank page to polished draft so your book finally exists.",
      },
      {
        title: "Collaborative milestones",
        description: "Regular check-ins and chapter approvals keep you in control throughout.",
      },
    ],
    process: [
      { step: 1, title: "Discovery & vision", description: "We map your goals, audience, message, and the shape of the book.", durationLabel: "1 week" },
      { step: 2, title: "Interviews & research", description: "Recorded sessions and research build the raw material and your voice profile.", durationLabel: "2-4 weeks" },
      { step: 3, title: "Outline & sample", description: "You approve a chapter outline and a sample chapter before full drafting.", durationLabel: "1-2 weeks" },
      { step: 4, title: "Drafting & revision", description: "Chapters delivered on a steady cadence with your feedback woven in.", durationLabel: "3-6 months" },
    ],
    subServices: [
      { title: "Book Ghostwriting", description: "Full-length fiction or nonfiction written in your voice." },
      { title: "Memoir Writing", description: "Your life story shaped into a compelling narrative." },
      { title: "Biography Writing", description: "Researched, vivid accounts of a life or legacy." },
      { title: "Business Book Writing", description: "Thought-leadership books that build authority." },
      { title: "Speech Writing", description: "Memorable talks and keynotes crafted for impact." },
      { title: "Script Writing", description: "Screenplays, stage, and video scripts with structure." },
      { title: "Research Writing", description: "Deeply researched long-form content and reports." },
      { title: "Book Coaching", description: "Guidance and accountability if you'd rather write it yourself." },
    ],
    faqs: [
      { question: "Will the book really sound like me?", answer: "Yes. We study your speech patterns, prior writing, and interviews to build a voice profile, then write to it. Most clients say it reads exactly as they would have written it, only finished." },
      { question: "Is ghostwriting confidential?", answer: "Completely. You are the sole credited author. Our agreements protect your privacy and full ownership of the work." },
      { question: "How long does a ghostwritten book take?", answer: "Most full-length books take three to six months depending on length, research, and your availability for interviews and reviews." },
    ],
    cta: {
      heading: "Let's write the book only you can tell",
      body: "Book a consultation and we'll outline exactly how your ghostwriting project would work.",
    },
    hasDetailPage: true,
    featured: true,
    order: 2,
  },
  {
    slug: "design",
    title: "Book Design & Formatting",
    tagline: "Covers and interiors that look professionally published.",
    icon: "design",
    summary:
      "Readers do judge a book by its cover. We craft striking covers and flawless interiors for print and digital that signal quality at a glance.",
    hero: {
      heading: "Design that makes your book impossible to ignore",
      subheading:
        "Custom covers, elegant interiors, and pixel-perfect formatting for eBook, paperback, and hardcover.",
    },
    overview: [
      "Design is the first promise your book makes to a reader. Our designers create covers that stop the scroll and interiors that feel effortless to read.",
      "Every file we deliver is built to the exact specifications of Amazon KDP, IngramSpark, and major retailers, no rejected uploads, no surprises.",
    ],
    benefits: [
      { title: "Market-aware covers", description: "Designs benchmarked against bestsellers in your genre so your book belongs on the shelf." },
      { title: "Retailer-ready files", description: "Print and digital files built to spec for every major platform." },
      { title: "Readable interiors", description: "Typography and layout tuned for comfort across formats and devices." },
      { title: "Unlimited brand cohesion", description: "Covers, graphics, and promo assets that share one polished identity." },
    ],
    process: [
      { step: 1, title: "Creative brief", description: "We gather your genre, comps, audience, and vision for the look and feel.", durationLabel: "2-3 days" },
      { step: 2, title: "Concepts", description: "You review initial cover directions and choose a path to refine.", durationLabel: "1 week" },
      { step: 3, title: "Refinement", description: "We polish the chosen concept and lay out the interior.", durationLabel: "1-2 weeks" },
      { step: 4, title: "Final files", description: "Print-ready and eBook files delivered, validated against retailer specs.", durationLabel: "2-3 days" },
    ],
    subServices: [
      { title: "Custom Book Cover Design", description: "Original, genre-aware covers that sell." },
      { title: "Interior Layout Design", description: "Beautiful, readable page design for print." },
      { title: "Typesetting", description: "Professional type composition and hierarchy." },
      { title: "eBook Formatting", description: "Reflowable EPUB files for every e-reader." },
      { title: "Paperback Formatting", description: "Print-ready interiors built to trim size." },
      { title: "Hardcover Formatting", description: "Premium layouts and jackets for hardback editions." },
      { title: "Audiobook Cover Design", description: "Square cover art optimized for audio platforms." },
      { title: "Promotional Graphics", description: "Social, ad, and launch assets that match your cover." },
    ],
    faqs: [
      { question: "Do you design for both print and eBook?", answer: "Yes. We deliver matched cover and interior files for eBook, paperback, and hardcover, all validated against the specs of your chosen retailers." },
      { question: "How many cover concepts do I get?", answer: "Packages include multiple initial directions and rounds of refinement on your chosen concept until it's right." },
      { question: "Will the files be accepted by KDP and IngramSpark?", answer: "Always. We build to exact platform specifications and test the files so your upload is approved the first time." },
    ],
    cta: {
      heading: "Give your book the cover it deserves",
      body: "Tell us about your project and we'll design a look readers can't walk past.",
    },
    hasDetailPage: true,
    featured: true,
    order: 3,
  },
  {
    slug: "publishing",
    title: "Publishing Services",
    tagline: "Navigate publishing with an expert guide.",
    icon: "publishing",
    summary:
      "Self-publishing is full of decisions. We manage the technical and strategic details so your book launches correctly on every platform that matters.",
    hero: {
      heading: "Publishing Services from manuscript to marketplace",
      subheading:
        "Setup, distribution, and strategy across Amazon KDP, IngramSpark, and print-on-demand, handled end to end.",
    },
    overview: [
      "Publishing well is a series of small, technical decisions that add up to your book's reach and royalties. We make those decisions with you and execute them flawlessly.",
      "From ISBNs and metadata to distribution and pricing, we set your book up to be discoverable, professional, and profitable from day one.",
    ],
    benefits: [
      { title: "Maximum reach", description: "Your book is set up for the widest profitable distribution across stores and libraries." },
      { title: "Metadata that sells", description: "Categories, keywords, and descriptions tuned for discoverability." },
      { title: "You keep your rights", description: "We guide self-publishing where you retain ownership and royalties." },
      { title: "Zero technical stress", description: "We handle the dashboards, uploads, and validations on your behalf." },
    ],
    process: [
      { step: 1, title: "Publishing strategy", description: "We define platforms, pricing, distribution, and your goals.", durationLabel: "1 week" },
      { step: 2, title: "Setup & metadata", description: "Accounts, ISBNs, categories, and keyword-rich metadata prepared.", durationLabel: "1 week" },
      { step: 3, title: "Upload & proof", description: "Files uploaded, proofs reviewed, and listings perfected.", durationLabel: "1-2 weeks" },
      { step: 4, title: "Launch & distribute", description: "Your book goes live and flows out to retailers and libraries.", durationLabel: "Ongoing" },
    ],
    subServices: [
      { title: "Self-Publishing Assistance", description: "End-to-end guidance through the entire process." },
      { title: "Amazon KDP Publishing", description: "Full setup and optimization on Amazon." },
      { title: "IngramSpark Publishing", description: "Wide print distribution to stores and libraries." },
      { title: "ISBN Registration", description: "Proper identifiers for every edition and format." },
      { title: "Copyright Guidance", description: "Practical support to protect your work." },
      { title: "Print-on-Demand Setup", description: "No-inventory printing configured correctly." },
      { title: "Distribution Setup", description: "Global retail and library distribution channels." },
      { title: "Publishing Consultation", description: "Strategic advice for your unique goals." },
    ],
    faqs: [
      { question: "Do I keep my rights and royalties?", answer: "Yes. We focus on self-publishing and assisted models where you retain full ownership of your work and earn the maximum available royalties." },
      { question: "Which platforms should I publish on?", answer: "It depends on your goals. We typically combine Amazon KDP for reach with IngramSpark for bookstore and library distribution, and advise on what fits your book." },
      { question: "Can you handle the whole setup for me?", answer: "Absolutely. We can manage accounts, ISBNs, metadata, uploads, and proofs end to end so you simply approve and launch." },
    ],
    cta: {
      heading: "Publish with confidence",
      body: "Let's map the right publishing path for your book and your goals.",
    },
    hasDetailPage: true,
    featured: true,
    order: 4,
  },
  {
    slug: "branding",
    title: "Author Branding",
    tagline: "Build a name readers recognize and trust.",
    icon: "branding",
    summary:
      "Your book is one title; your author brand is a career. We craft the identity, website, and presence that turn readers into a loyal following.",
    hero: {
      heading: "Author Branding that builds a lasting career",
      subheading:
        "A distinctive identity, a professional website, and a presence that makes you unforgettable to readers and the industry.",
    },
    overview: [
      "Books sell more when they come from an author readers feel they know. Branding is how you become that author, consistent, credible, and memorable everywhere you appear.",
      "We define your positioning, design your visual identity, and build the digital home base that anchors your entire author career.",
    ],
    benefits: [
      { title: "A clear positioning", description: "We define what you stand for and who you're for, so your message lands." },
      { title: "A professional presence", description: "A polished website and profiles that build instant credibility." },
      { title: "Consistency everywhere", description: "One cohesive identity across covers, social, and media." },
      { title: "Long-term equity", description: "A brand that compounds across every book you publish." },
    ],
    process: [
      { step: 1, title: "Brand discovery", description: "We uncover your story, audience, values, and goals.", durationLabel: "1 week" },
      { step: 2, title: "Strategy & identity", description: "Positioning, messaging, and visual direction defined.", durationLabel: "1-2 weeks" },
      { step: 3, title: "Build & design", description: "Website, media kit, and profiles created and written.", durationLabel: "2-4 weeks" },
      { step: 4, title: "Launch & guidelines", description: "Everything goes live with a guide to keep it consistent.", durationLabel: "1 week" },
    ],
    subServices: [
      { title: "Author Website Development", description: "A beautiful, fast home base for your readers." },
      { title: "Personal Brand Development", description: "A distinctive identity that fits your author career." },
      { title: "Media Kit Creation", description: "Press-ready materials for media and events." },
      { title: "Biography Writing", description: "Compelling author bios for every context." },
      { title: "Professional Profile Optimization", description: "Polished profiles across key platforms." },
      { title: "Brand Strategy Development", description: "A roadmap that aligns every touchpoint." },
    ],
    faqs: [
      { question: "I only have one book, do I need a brand?", answer: "Even more so. A strong author brand helps a single title punch above its weight and lays the foundation for everything you publish next." },
      { question: "Do you build the website too?", answer: "Yes. Author website development is core to our branding work, paired with a media kit, bios, and optimized profiles." },
      { question: "What makes an author brand effective?", answer: "Clarity and consistency. A focused message and a cohesive look across every platform make you recognizable and trustworthy to readers and the industry." },
    ],
    cta: {
      heading: "Become the author readers remember",
      body: "Let's craft a brand that carries your whole career, not just one book.",
    },
    hasDetailPage: true,
    featured: true,
    order: 5,
  },
  {
    slug: "marketing",
    title: "Book Marketing",
    tagline: "Get your book into the right readers' hands.",
    icon: "marketing",
    summary:
      "A great book still needs to be found. Our data-driven campaigns build visibility, reviews, and sales across the channels that move the needle.",
    hero: {
      heading: "Book Marketing that finds your readers",
      subheading:
        "Launch campaigns, advertising, outreach, and reviews, engineered to grow visibility and sales.",
    },
    overview: [
      "Marketing is the bridge between your finished book and the readers waiting for it. We build that bridge with strategy, creativity, and measurable campaigns.",
      "From a high-impact launch to sustained advertising and outreach, we focus on the activities that actually convert attention into sales and lasting readership.",
    ],
    benefits: [
      { title: "Strategy, not guesswork", description: "Campaigns built on your genre, audience, and goals, and measured." },
      { title: "Visibility where it counts", description: "We prioritize the channels most likely to reach your readers." },
      { title: "Social proof that sells", description: "Ethical review campaigns build the credibility buyers look for." },
      { title: "Sustainable momentum", description: "We turn a launch spike into long-term, repeatable sales." },
    ],
    process: [
      { step: 1, title: "Marketing audit", description: "We assess your book, audience, assets, and opportunities.", durationLabel: "1 week" },
      { step: 2, title: "Campaign plan", description: "A clear strategy across launch, ads, outreach, and reviews.", durationLabel: "1 week" },
      { step: 3, title: "Execution", description: "We run the campaigns, create assets, and manage outreach.", durationLabel: "4-8 weeks" },
      { step: 4, title: "Optimize & report", description: "We track performance and double down on what works.", durationLabel: "Ongoing" },
    ],
    subServices: [
      { title: "Book Launch Campaigns", description: "Coordinated launches that maximize week-one impact." },
      { title: "Social Media Marketing", description: "Content and community that grows your audience." },
      { title: "Email Marketing", description: "List building and campaigns that convert." },
      { title: "SEO", description: "Discoverability for your book and author platform." },
      { title: "Press Release Writing", description: "Newsworthy announcements that earn coverage." },
      { title: "Media Outreach", description: "Pitches to relevant press and outlets." },
      { title: "Influencer Outreach", description: "Partnerships with creators in your niche." },
      { title: "Podcast Outreach", description: "Guest spots that put you in front of readers." },
      { title: "Review Campaigns", description: "Ethical campaigns to build authentic reviews." },
      { title: "Amazon Marketing", description: "Ads and optimization within the Amazon ecosystem." },
      { title: "Advertising Campaign Management", description: "Paid campaigns managed for return on spend." },
    ],
    faqs: [
      { question: "When should marketing start?", answer: "Ideally before launch. Pre-launch momentum, list building, reviews, and buzz, makes the launch itself far more effective, but we can also revive sales for existing titles." },
      { question: "Do you guarantee bestseller status?", answer: "No reputable partner can guarantee a title. We focus on the ethical, data-driven activities that maximize your realistic chances of strong, sustainable sales." },
      { question: "Which channels work best?", answer: "It varies by genre and audience. We identify the highest-leverage channels for your book rather than spreading effort thin across all of them." },
    ],
    cta: {
      heading: "Let's get your book discovered",
      body: "Book a consultation for a marketing plan tailored to your title and audience.",
    },
    hasDetailPage: true,
    featured: true,
    order: 6,
  },
  {
    slug: "web-technology",
    title: "Website & Technology",
    tagline: "The digital infrastructure behind a thriving author business.",
    icon: "web-technology",
    summary:
      "From your website to automations and funnels, we build and maintain the technology that lets you sell books and serve readers on autopilot.",
    hero: {
      heading: "Website & Technology built for authors",
      subheading:
        "Websites, automations, funnels, and systems that turn visitors into readers and readers into fans.",
    },
    overview: [
      "Behind every successful author is a set of systems doing quiet, consistent work, capturing emails, selling books, and nurturing readers around the clock.",
      "We design, build, and maintain that infrastructure so the technology serves your writing career instead of getting in its way.",
    ],
    benefits: [
      { title: "Done-for-you setup", description: "We build the site, funnels, and automations end to end." },
      { title: "Reader-to-fan systems", description: "Capture, nurture, and convert readers automatically." },
      { title: "Reliable & maintained", description: "Ongoing maintenance keeps everything fast and secure." },
      { title: "Built to scale", description: "Systems that grow with your list and catalog." },
    ],
    process: [
      { step: 1, title: "Tech audit", description: "We map your goals and the systems you need.", durationLabel: "1 week" },
      { step: 2, title: "Architecture", description: "We design the website, funnel, and automation flow.", durationLabel: "1 week" },
      { step: 3, title: "Build & integrate", description: "We build, connect, and test every piece.", durationLabel: "2-4 weeks" },
      { step: 4, title: "Maintain & improve", description: "Ongoing support, updates, and optimization.", durationLabel: "Ongoing" },
    ],
    subServices: [
      { title: "WordPress Design", description: "Flexible, professional WordPress author sites." },
      { title: "Website Maintenance", description: "Updates, backups, and security handled for you." },
      { title: "CRM Setup", description: "Organize readers, leads, and relationships." },
      { title: "Booking Systems", description: "Let readers and clients schedule with ease." },
      { title: "Email Automation", description: "Welcome sequences and nurture flows that run themselves." },
      { title: "Landing Pages", description: "High-converting pages for launches and lead magnets." },
      { title: "Sales Funnels", description: "Guided journeys that turn interest into sales." },
      { title: "Technical Support", description: "A reliable partner for any technical need." },
    ],
    faqs: [
      { question: "Do I need a website if I'm on Amazon?", answer: "Yes. A website is the one platform you own. It builds your email list, hosts your funnels, and keeps you independent of any single retailer's rules." },
      { question: "Can you maintain my existing site?", answer: "Absolutely. We offer ongoing maintenance, updates, and improvements whether we built your site or not." },
      { question: "What is a sales funnel for an author?", answer: "It's a simple, guided path, often a landing page, free chapter, and email sequence, that turns a curious visitor into an engaged reader and buyer." },
    ],
    cta: {
      heading: "Let technology grow your readership",
      body: "Tell us your goals and we'll build the systems to reach them.",
    },
    hasDetailPage: true,
    featured: false,
    order: 7,
  },
  {
    slug: "coaching",
    title: "Author Consulting & Coaching",
    tagline: "Expert guidance for every stage of your journey.",
    icon: "coaching",
    summary:
      "Sometimes you don't need it done for you, you need a seasoned guide. Our coaching gives you clarity, strategy, and accountability to move forward.",
    hero: {
      heading: "Author Coaching for clarity and momentum",
      subheading:
        "One-to-one guidance, planning, and strategy to help you write, publish, and grow with confidence.",
    },
    overview: [
      "Writing and publishing can feel isolating and overwhelming. A great coach turns that uncertainty into a clear, achievable plan, and keeps you moving.",
      "Whether you're stuck on chapter three or deciding how to build a career, our consultants bring publishing experience and honest, personalized advice.",
    ],
    benefits: [
      { title: "Personalized strategy", description: "Advice shaped to your book, goals, and circumstances." },
      { title: "Real accountability", description: "Regular sessions keep you progressing instead of stalling." },
      { title: "Insider experience", description: "Guidance from people who know the industry from the inside." },
      { title: "Confident decisions", description: "Clarity on the choices that shape your career." },
    ],
    process: [
      { step: 1, title: "Goal session", description: "We define where you are and where you want to go.", durationLabel: "1 session" },
      { step: 2, title: "Custom plan", description: "A clear, prioritized roadmap for your project or career.", durationLabel: "1 week" },
      { step: 3, title: "Ongoing coaching", description: "Regular sessions with feedback and accountability.", durationLabel: "Ongoing" },
      { step: 4, title: "Review & adjust", description: "We measure progress and refine the plan as you grow.", durationLabel: "Ongoing" },
    ],
    subServices: [
      { title: "Publishing Consultation", description: "Expert answers to your publishing questions." },
      { title: "Author Success Coaching", description: "Ongoing coaching toward your bigger goals." },
      { title: "Book Planning Sessions", description: "Turn your idea into a clear, workable plan." },
      { title: "Publishing Strategy Development", description: "A roadmap from manuscript to market." },
      { title: "Manuscript Development Guidance", description: "Support to strengthen your draft as you write." },
      { title: "Career Development Support", description: "Long-term planning for a sustainable author career." },
    ],
    faqs: [
      { question: "How is coaching different from editing?", answer: "Editing improves a finished draft; coaching guides you through the process (planning, decision-making, accountability, and strategy) so you reach the finish line and beyond." },
      { question: "Can coaching be a one-off session?", answer: "Yes. Many authors start with a single consultation to get unstuck, then continue with ongoing coaching if it's helpful." },
      { question: "Who are the coaches?", answer: "Experienced publishing professionals who have guided authors through writing, publishing, and career growth across genres." },
    ],
    cta: {
      heading: "Get a guide for the journey",
      body: "Book a consultation and leave with clarity on your very next step.",
    },
    hasDetailPage: true,
    featured: true,
    order: 8,
  },
  {
    slug: "audiobooks",
    title: "Audiobook Services",
    tagline: "Reach listeners with a professional audio edition.",
    icon: "audiobooks",
    summary:
      "Audiobooks are the fastest-growing format in publishing. We coordinate narration, production, and distribution so your book reaches every listener.",
    hero: {
      heading: "Audiobook Services from script to streaming",
      subheading:
        "Narrator selection, production coordination, and distribution for a professional audio edition.",
    },
    overview: [
      "Millions of readers now prefer to listen. An audiobook opens an entirely new audience and revenue stream for your title.",
      "We coordinate the right narrator, oversee production quality, and handle distribution to the major audio platforms so the process stays simple for you.",
    ],
    benefits: [
      { title: "The right voice", description: "We help you cast a narrator who fits your book and audience." },
      { title: "Studio-quality production", description: "Professional standards from recording to mastering." },
      { title: "Wide distribution", description: "Your audiobook reaches the major listening platforms." },
      { title: "Guided every step", description: "We coordinate the moving parts so you don't have to." },
    ],
    process: [
      { step: 1, title: "Audio strategy", description: "We plan narration style, budget, and distribution.", durationLabel: "1 week" },
      { step: 2, title: "Narrator selection", description: "Auditions and casting to find your ideal voice.", durationLabel: "1-2 weeks" },
      { step: 3, title: "Production", description: "Recording, editing, and mastering managed for quality.", durationLabel: "4-8 weeks" },
      { step: 4, title: "Distribution", description: "Your finished audiobook is published to platforms.", durationLabel: "1-2 weeks" },
    ],
    subServices: [
      { title: "Audiobook Production Coordination", description: "End-to-end management of your audio production." },
      { title: "Narrator Selection Assistance", description: "Auditions and casting for the right voice." },
      { title: "Distribution Support", description: "Publishing to the major audio retailers." },
      { title: "Audio Publishing Consultation", description: "Strategic advice for your audiobook." },
    ],
    faqs: [
      { question: "Should I narrate my own book?", answer: "Sometimes, especially for memoir and nonfiction. We'll advise honestly based on your book and comfort, and help you cast a professional narrator if that's the better fit." },
      { question: "Where will my audiobook be available?", answer: "We support distribution to the major audiobook platforms so your title reaches the widest possible listening audience." },
      { question: "How much does an audiobook cost?", answer: "It depends on length and narration model. We'll outline clear options and budgets during your consultation." },
    ],
    cta: {
      heading: "Give your book a voice",
      body: "Let's plan an audiobook edition that reaches new listeners.",
    },
    hasDetailPage: true,
    featured: false,
    order: 9,
  },
  {
    slug: "rights",
    title: "Legal & Rights Support",
    tagline: "Protect your work and understand your agreements.",
    icon: "rights",
    summary:
      "Your book is valuable intellectual property. We provide practical guidance on copyright, contracts, and rights so you publish protected and informed.",
    hero: {
      heading: "Legal & Rights Support for confident authors",
      subheading:
        "Practical guidance on copyright, agreements, licensing, and rights, so you protect what you create.",
    },
    overview: [
      "Publishing involves contracts and rights decisions that can shape your earnings for years. Understanding them is essential to protecting your work.",
      "We provide clear, practical guidance to help you make informed decisions and avoid common pitfalls. (We provide informational support, not a substitute for licensed legal counsel.)",
    ],
    benefits: [
      { title: "Understand your contracts", description: "Plain-language review of the agreements you're asked to sign." },
      { title: "Protect your IP", description: "Guidance on copyright and safeguarding your work." },
      { title: "Make rights decisions", description: "Clarity on licensing, territories, and formats." },
      { title: "Avoid costly mistakes", description: "Spot the terms that matter before you commit." },
    ],
    process: [
      { step: 1, title: "Needs review", description: "We identify the rights and agreements involved.", durationLabel: "1 week" },
      { step: 2, title: "Guidance session", description: "We explain your options and what to watch for.", durationLabel: "1 session" },
      { step: 3, title: "Document review", description: "We review agreements and flag key terms in plain language.", durationLabel: "1-2 weeks" },
      { step: 4, title: "Recommendations", description: "You leave with clear, practical next steps.", durationLabel: "Ongoing" },
    ],
    subServices: [
      { title: "Copyright Guidance", description: "Practical help to protect and register your work." },
      { title: "Publishing Agreements Review", description: "Plain-language review of contracts and terms." },
      { title: "Licensing Consultation", description: "Guidance on licensing your rights wisely." },
      { title: "Rights Management", description: "Help organizing and tracking your rights." },
      { title: "Intellectual Property Guidance", description: "Understand and safeguard your IP." },
    ],
    faqs: [
      { question: "Is this legal advice?", answer: "We provide informational guidance to help you understand copyright, contracts, and rights. For binding legal advice on complex matters, we'll recommend consulting a licensed attorney." },
      { question: "Do I need to register my copyright?", answer: "Your work is protected on creation, but formal registration can strengthen your position. We'll explain the practical benefits for your situation." },
      { question: "Can you review a publishing contract?", answer: "Yes. We review agreements and explain the key terms, rights, royalties, territories, and reversion, in plain language so you sign with confidence." },
    ],
    cta: {
      heading: "Publish protected and informed",
      body: "Book a consultation to understand your rights and agreements clearly.",
    },
    hasDetailPage: true,
    featured: false,
    order: 10,
  },
  {
    slug: "events",
    title: "Events & Community Support",
    tagline: "Build a community around you and your books.",
    icon: "events",
    summary:
      "Lasting author careers are built on community. We help you plan launches, workshops, and networks that turn readers into a devoted audience.",
    hero: {
      heading: "Events & Community that grow your readership",
      subheading:
        "Launches, workshops, webinars, and reader communities designed to build lasting connection.",
    },
    overview: [
      "The most resilient author careers are powered by community, readers who show up, share your work, and follow you from book to book.",
      "We help you plan the launches, events, and gatherings that create those relationships and keep your audience engaged over time.",
    ],
    benefits: [
      { title: "Memorable launches", description: "Events that turn a publication date into an occasion." },
      { title: "Engaged readers", description: "Communities and workshops that deepen loyalty." },
      { title: "New connections", description: "Networking that opens doors in the literary world." },
      { title: "Sustained growth", description: "Ongoing engagement that compounds over time." },
    ],
    process: [
      { step: 1, title: "Goals & format", description: "We define the event or community and its purpose.", durationLabel: "1 week" },
      { step: 2, title: "Planning", description: "Logistics, promotion, and content mapped out.", durationLabel: "2-3 weeks" },
      { step: 3, title: "Run the event", description: "We help you deliver a smooth, engaging experience.", durationLabel: "Event day" },
      { step: 4, title: "Nurture & grow", description: "Follow-up that turns attendees into a community.", durationLabel: "Ongoing" },
    ],
    subServices: [
      { title: "Book Launch Planning", description: "End-to-end planning for a standout launch." },
      { title: "Author Workshops", description: "Workshops that engage and grow your audience." },
      { title: "Writing Webinars", description: "Online sessions that build authority and reach." },
      { title: "Reader Community Development", description: "Spaces where your readers gather and connect." },
      { title: "Literary Networking Opportunities", description: "Connections across the writing community." },
    ],
    faqs: [
      { question: "Do events have to be in person?", answer: "Not at all. Virtual launches, webinars, and online communities are often more accessible and reach a wider audience. We help with both in-person and digital formats." },
      { question: "How do I keep a community active?", answer: "Consistency and value. We help you plan a rhythm of content, conversation, and events that keeps readers engaged between books." },
      { question: "Is an event worth it for a debut author?", answer: "Yes. A well-planned launch builds early momentum and gives you a core of engaged readers to grow from." },
    ],
    cta: {
      heading: "Build a community that lasts",
      body: "Let's plan the events and connections that grow your readership.",
    },
    hasDetailPage: true,
    featured: false,
    order: 11,
  },
];
