"use client";

import { useState } from "react";
import type { ZodTypeAny } from "zod";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface UseFormSubmitOptions {
  schema: ZodTypeAny;
  endpoint: string;
  /** Builds a mailto: link (addressed to the brand inbox) from the submitted data. */
  buildMailto: (data: Record<string, string>) => string;
  /**
   * "mailto" (default): submission opens the visitor's email client with a
   * message pre-addressed to horpianog@gmail.com, so it reaches the inbox with
   * no backend email provider. The API route is still pinged best-effort for a
   * server-side record. "api": post to the route and rely on it for delivery.
   */
  deliverVia?: "mailto" | "api";
}

/**
 * Shared form-submission hook: client-side zod validation, then either open a
 * mailto to the brand inbox (default) or POST to a route handler.
 */
export function useFormSubmit({
  schema,
  endpoint,
  buildMailto,
  deliverVia = "mailto",
}: UseFormSubmitOptions) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [mailtoHref, setMailtoHref] = useState("");

  async function submit(data: Record<string, string>): Promise<boolean> {
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !errs[key]) errs[key] = issue.message;
      }
      setFieldErrors(errs);
      setStatus("idle");
      return false;
    }

    setFieldErrors({});
    const href = buildMailto(data);
    setMailtoHref(href);

    if (deliverVia === "mailto") {
      setStatus("submitting");
      // Best-effort server-side record; never blocks the mailto flow.
      try {
        void fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
        });
      } catch {
        /* ignore */
      }
      // Open the visitor's email client addressed to the brand inbox.
      if (typeof window !== "undefined") {
        window.location.href = href;
      }
      setStatus("success");
      return true;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      return false;
    }
  }

  function reset() {
    setStatus("idle");
    setFieldErrors({});
    setMailtoHref("");
  }

  return { status, fieldErrors, mailtoHref, submit, reset };
}
