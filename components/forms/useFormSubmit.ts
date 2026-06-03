"use client";

import { useState } from "react";
import type { ZodTypeAny } from "zod";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface UseFormSubmitOptions {
  schema: ZodTypeAny;
  endpoint: string;
  /** Builds a mailto: fallback link from the submitted data. */
  buildMailto: (data: Record<string, string>) => string;
}

/**
 * Shared form-submission hook: client-side zod validation, POST to a route
 * handler, and a mailto: fallback when delivery cannot be completed.
 */
export function useFormSubmit({ schema, endpoint, buildMailto }: UseFormSubmitOptions) {
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
    setStatus("submitting");
    setMailtoHref(buildMailto(data));

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
