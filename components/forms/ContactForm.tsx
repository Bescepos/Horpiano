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
      buildMailto(data.subject || "New message via Horpiano", {
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
        <h3 className="mt-4 font-serif text-2xl text-navy-900">Message sent</h3>
        <p className="mt-2 text-ink-muted">
          Thank you for reaching out. We&apos;ll get back to you at the email you provided
          within one business day.
        </p>
        <Button onClick={reset} variant="secondary" className="mt-6">
          Send another message
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
        hint="Optional — what is this about?"
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
          {status === "submitting" ? "Sending..." : "Send Message"}
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
