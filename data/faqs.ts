import type { FAQItem, FAQCategoryMeta } from "@/lib/types";

export const faqCategories: FAQCategoryMeta[] = [
  { id: "publishing", label: "Publishing" },
  { id: "editing", label: "Editing" },
  { id: "ghostwriting", label: "Ghostwriting" },
  { id: "marketing", label: "Marketing" },
  { id: "copyright", label: "Copyright" },
  { id: "audiobooks", label: "Audiobooks" },
  { id: "branding", label: "Branding" },
];

export const faqs: FAQItem[] = [
  // Publishing
  {
    id: "f-pub-1",
    category: "publishing",
    question: "Do I keep the rights to my book?",
    answer:
      "Yes. We specialize in self-publishing and assisted models where you retain full ownership of your work and earn the maximum available royalties. Your book is always yours.",
  },
  {
    id: "f-pub-2",
    category: "publishing",
    question: "Which platforms will my book be available on?",
    answer:
      "We typically publish to Amazon KDP for reach and IngramSpark for bookstore and library distribution, then extend to other retailers as your strategy requires.",
  },
  {
    id: "f-pub-3",
    category: "publishing",
    question: "How long does it take to publish a book?",
    answer:
      "Once your manuscript is final, setup and launch typically take two to four weeks. The full journey from draft to published depends on the editing and design your book needs.",
  },
  {
    id: "f-pub-4",
    category: "publishing",
    question: "Do you handle the technical setup for me?",
    answer:
      "Completely. We can manage accounts, ISBNs, metadata, file uploads, and proofs end to end, so you simply review and approve before launch.",
  },
  // Editing
  {
    id: "f-edit-1",
    category: "editing",
    question: "How do I know which type of editing I need?",
    answer:
      "Start with a manuscript evaluation. We assess your draft and recommend the right level — developmental, line, copy, or proofreading — so you only pay for the editing you actually need.",
  },
  {
    id: "f-edit-2",
    category: "editing",
    question: "Will editing change my writing voice?",
    answer:
      "No. Our editors strengthen clarity and craft while preserving your voice. Substantive changes are suggested with tracked changes, never imposed.",
  },
  {
    id: "f-edit-3",
    category: "editing",
    question: "What's the difference between line and copy editing?",
    answer:
      "Line editing focuses on style, flow, and the artistry of your sentences. Copy editing focuses on grammar, consistency, and correctness. Many manuscripts benefit from both.",
  },
  // Ghostwriting
  {
    id: "f-ghost-1",
    category: "ghostwriting",
    question: "Will the book really sound like me?",
    answer:
      "Yes. We build a voice profile from interviews and your existing writing, then draft to it. Most clients say the finished book reads exactly as they would have written it.",
  },
  {
    id: "f-ghost-2",
    category: "ghostwriting",
    question: "Is the ghostwriting process confidential?",
    answer:
      "Entirely. You are the sole credited author and our involvement stays private. Our agreements protect your authorship and full ownership.",
  },
  {
    id: "f-ghost-3",
    category: "ghostwriting",
    question: "How long does a ghostwritten book take?",
    answer:
      "Most full-length books take three to six months depending on length, research, and your availability for interviews and chapter reviews.",
  },
  // Marketing
  {
    id: "f-mkt-1",
    category: "marketing",
    question: "When should I start marketing my book?",
    answer:
      "Ideally before launch. Pre-launch momentum — list building, early reviews, and buzz — makes the launch itself far more effective. We can also revive sales for existing titles.",
  },
  {
    id: "f-mkt-2",
    category: "marketing",
    question: "Can you guarantee my book becomes a bestseller?",
    answer:
      "No ethical partner can guarantee a result. We focus on the data-driven activities that maximize your realistic chances of strong, sustainable sales.",
  },
  {
    id: "f-mkt-3",
    category: "marketing",
    question: "Which marketing channels work best?",
    answer:
      "It depends on your genre and audience. We identify the highest-leverage channels for your specific book rather than spreading effort thin across everything at once.",
  },
  // Copyright
  {
    id: "f-copy-1",
    category: "copyright",
    question: "Do I need to register my copyright?",
    answer:
      "Your work is protected the moment it's created, but formal registration can strengthen your legal position. We'll explain the practical benefits for your situation.",
  },
  {
    id: "f-copy-2",
    category: "copyright",
    question: "Can you review my publishing contract?",
    answer:
      "Yes. We review agreements and explain the key terms — rights, royalties, territories, and reversion — in plain language so you can sign with confidence.",
  },
  {
    id: "f-copy-3",
    category: "copyright",
    question: "Is your rights support the same as legal advice?",
    answer:
      "We provide practical, informational guidance to help you understand copyright and contracts. For binding legal advice on complex matters, we'll recommend a licensed attorney.",
  },
  // Audiobooks
  {
    id: "f-audio-1",
    category: "audiobooks",
    question: "Should I narrate my own audiobook?",
    answer:
      "Sometimes — especially for memoir and nonfiction. We advise honestly based on your book and comfort, and help you cast a professional narrator when that's the better fit.",
  },
  {
    id: "f-audio-2",
    category: "audiobooks",
    question: "Where will my audiobook be distributed?",
    answer:
      "We support distribution to the major audiobook platforms so your title reaches the widest possible listening audience.",
  },
  // Branding
  {
    id: "f-brand-1",
    category: "branding",
    question: "I only have one book — do I need an author brand?",
    answer:
      "Even more so. A strong author brand helps a single title punch above its weight and creates the foundation for everything you publish next.",
  },
  {
    id: "f-brand-2",
    category: "branding",
    question: "Do you build the author website too?",
    answer:
      "Yes. Author website development is central to our branding work, paired with a media kit, professional bios, and optimized profiles.",
  },
];
