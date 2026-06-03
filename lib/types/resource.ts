export type ResourceCategory =
  | "writing-tips"
  | "publishing-guides"
  | "author-branding"
  | "marketing-strategies"
  | "industry-insights";

export interface ResourceCategoryMeta {
  id: ResourceCategory;
  label: string;
  description: string;
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: ResourceCategory;
  tags: string[];
  readingTimeMins: number;
  publishedAt: string;
  featured?: boolean;
  /** Hex tones used for the generated card artwork */
  accent: {
    from: string;
    to: string;
  };
}
