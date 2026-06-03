export type FAQCategory =
  | "publishing"
  | "editing"
  | "ghostwriting"
  | "marketing"
  | "copyright"
  | "audiobooks"
  | "branding";

export interface FAQCategoryMeta {
  id: FAQCategory;
  label: string;
}

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
}
