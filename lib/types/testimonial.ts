import type { ServiceSlug } from "./service";

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole?: string;
  rating?: number;
  /** Two-letter initials used for the avatar monogram */
  initials: string;
  relatedService?: ServiceSlug;
}
