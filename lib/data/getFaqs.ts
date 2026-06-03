import { faqs } from "@/data/faqs";
import type { FAQCategory, FAQItem } from "@/lib/types";

export function getAllFaqs(): FAQItem[] {
  return faqs;
}

export function getFaqsByCategory(category: FAQCategory): FAQItem[] {
  return faqs.filter((f) => f.category === category);
}

export function getFeaturedFaqs(limit = 6): FAQItem[] {
  return faqs.slice(0, limit);
}
