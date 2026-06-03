import type { ServiceSlug } from "./service";

export type StoryKind = "success-story" | "featured-book" | "case-study";

export interface StoryMetric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface Story {
  id: string;
  slug: string;
  kind: StoryKind;
  /** Book or project title */
  title: string;
  author: string;
  genre?: string;
  /** Hex tones used to generate the SVG cover mockup */
  cover: {
    from: string;
    to: string;
  };
  summary: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  metrics?: StoryMetric[];
  servicesUsed?: ServiceSlug[];
  featured?: boolean;
  publishedAt?: string;
}
