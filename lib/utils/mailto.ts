import { siteConfig } from "@/lib/seo/siteConfig";

/**
 * Build a mailto: URL to the brand inbox (horpianog@gmail.com), pre-filled with
 * a subject and a readable body assembled from the submitted form fields.
 *
 * Uses encodeURIComponent (not URLSearchParams) so spaces become %20 and line
 * breaks become %0A — the encoding mail clients expect, avoiding "+" artifacts.
 */
export function buildMailto(
  subject: string,
  fields: Record<string, string | undefined>,
): string {
  const body = Object.entries(fields)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return `mailto:${siteConfig.contactEmail}?${query}`;
}
