import { siteConfig } from "@/lib/seo/siteConfig";

/**
 * Build a mailto: URL to the brand inbox, pre-filled with a subject and a
 * readable body assembled from form fields. Used as a graceful fallback when
 * the API submission cannot be completed.
 */
export function buildMailto(
  subject: string,
  fields: Record<string, string | undefined>,
): string {
  const body = Object.entries(fields)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${siteConfig.contactEmail}?${params.toString()}`;
}
