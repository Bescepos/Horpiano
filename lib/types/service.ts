export type ServiceSlug =
  | "editorial"
  | "ghostwriting"
  | "design"
  | "publishing"
  | "branding"
  | "marketing"
  | "web-technology"
  | "coaching"
  | "audiobooks"
  | "rights"
  | "events";

export interface SubService {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  durationLabel?: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: ServiceSlug;
  /** Short menu/grid label, e.g. "Editorial Services" */
  title: string;
  /** One-line hero subtitle */
  tagline: string;
  /** Icon key resolved via lib/icons */
  icon: string;
  /** Short blurb for cards + meta description fallback */
  summary: string;
  hero: {
    heading: string;
    subheading: string;
  };
  overview: string[];
  benefits: Benefit[];
  process: ProcessStep[];
  subServices: SubService[];
  faqs: ServiceFAQ[];
  cta: {
    heading: string;
    body: string;
  };
  /** Whether this service has a dedicated detail page in the primary set */
  hasDetailPage: boolean;
  featured?: boolean;
  order: number;
  seo?: {
    title?: string;
    description?: string;
  };
}
