"use client";

import { CheckCircle2, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Input, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { contactSchema } from "@/lib/validation/contact.schema";
import { buildMailto } from "@/lib/utils/mailto";
import { useFormSubmit } from "./useFormSubmit";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const { status, fieldErrors, mailtoHref, submit, reset } = useFormSubmit({
    schema: contactSchema,
    endpoint: "/api/contact",
    buildMailto: (data) =>
      buildMailto(data.subject || "New message via emilybyron", {
        Name: data.name,
        Email: data.email,
        Subject: data.subject,
        Message: data.message,
      }),
  });

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    await submit({
      ...values,
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value ?? "",
    });
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-success/30 bg-success/5 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" aria-hidden="true" />
        <h3 className="mt-4 font-serif text-2xl text-navy-900">Almost there</h3>
        <p className="mt-2 text-ink-muted">
          We&apos;ve opened a pre-filled email to horpianog@gmail.com in your mail app.
          Press send to deliver your message and we&apos;ll reply within one business day.
        </p>
        <p className="mt-3 text-sm text-ink-muted">
          Mail app didn&apos;t open?{" "}
          <a
            href={mailtoHref}
            className="font-semibold text-gold-700 underline hover:text-gold-800"
          >
            Open it manually
          </a>
          .
        </p>
        <Button onClick={reset} variant="secondary" className="mt-6">
          Start over
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Name"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          onChange={set("name")}
          error={fieldErrors.name}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={set("email")}
          error={fieldErrors.email}
        />
      </div>
      <Input
        label="Subject"
        name="subject"
        value={values.subject}
        onChange={set("subject")}
        error={fieldErrors.subject}
        hint="Optional, what is this about?"
      />
      <Textarea
        label="Message"
        name="message"
        required
        rows={6}
        value={values.message}
        onChange={set("message")}
        error={fieldErrors.message}
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

      {status === "error" && (
        <div role="alert" className="rounded-md border border-error/30 bg-error/5 p-4 text-sm text-error">
          We couldn&apos;t submit your message just now. Please try again, or{" "}
          <a href={mailtoHref} className="font-semibold underline">
            email us directly
          </a>
          .
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Submitting..." : "Submit"}
          <Mail className="h-4 w-4" aria-hidden="true" />
        </Button>
        <p className="text-sm text-ink-muted">
          Prefer email? Write to{" "}
          <a
            href="mailto:horpianog@gmail.com"
            className="font-medium text-gold-700 hover:text-gold-800"
          >
            horpianog@gmail.com
          </a>
        </p>
      </div>
    </form>
  );
}
