"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { newsletterSchema } from "@/lib/validation/newsletter.schema";
import { buildMailto } from "@/lib/utils/mailto";
import { useFormSubmit } from "./useFormSubmit";
import { cn } from "@/lib/utils/cn";

interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const { status, fieldErrors, submit } = useFormSubmit({
    schema: newsletterSchema,
    endpoint: "/api/newsletter",
    buildMailto: (data) => buildMailto("Newsletter signup, Horpiano", { Email: data.email }),
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      email,
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value ?? "",
    };
    await submit(data);
  }

  if (status === "success") {
    return (
      <p
        role="status"
        aria-live="polite"
        className={cn(
          "flex items-center gap-2 rounded-md bg-white/10 px-4 py-3 text-sm font-medium text-gold-100",
          className,
        )}
      >
        <CheckCircle2 className="h-5 w-5 text-gold-300" aria-hidden="true" />
        You&apos;re subscribed. Watch your inbox for author insights.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("flex flex-col gap-3", className)} noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={fieldErrors.email ? true : undefined}
            className="h-12 w-full rounded-md border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/50 backdrop-blur transition focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30"
          />
          {/* Honeypot */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold-gradient px-6 font-semibold text-navy-900 transition hover:shadow-gold-glow disabled:opacity-60"
        >
          {status === "submitting" ? "Subscribing..." : "Subscribe"}
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      {fieldErrors.email && (
        <p role="alert" className="text-sm font-medium text-gold-200">
          {fieldErrors.email}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-gold-200">
          Something went wrong. Please email us at horpianog@gmail.com.
        </p>
      )}
    </form>
  );
}
