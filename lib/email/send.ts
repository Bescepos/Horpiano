import { siteConfig } from "@/lib/seo/siteConfig";

export interface EmailPayload {
  /** Logical form source, e.g. "contact" | "consultation" | "newsletter". */
  source: string;
  /** Reply-to address supplied by the visitor. */
  replyTo?: string;
  subject: string;
  /** Flat record of field label -> value to render into the message body. */
  fields: Record<string, string | undefined>;
}

export interface SendResult {
  ok: boolean;
  /** True when a real provider handled delivery; false when only queued/logged. */
  delivered: boolean;
}

/**
 * Provider-agnostic email adapter.
 *
 * Today this records the submission server-side and reports success without an
 * external dependency, so the site is fully self-contained. To enable real
 * delivery, implement a single provider call below (e.g. SMTP / transactional
 * API) guarded by an environment variable — no form or route changes required.
 */
export async function sendEmail(payload: EmailPayload): Promise<SendResult> {
  const to = siteConfig.contactEmail;

  const lines = Object.entries(payload.fields)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`);

  // Server-side record of the inbound submission.
  console.info(
    `[inbound:${payload.source}] -> ${to}\nSubject: ${payload.subject}\n${lines.join("\n")}`,
  );

  // No external provider configured: accept and queue for the brand inbox.
  return { ok: true, delivered: false };
}
