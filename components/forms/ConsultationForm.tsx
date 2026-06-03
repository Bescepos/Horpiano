"use client";

import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Input, Textarea, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { consultationSchema } from "@/lib/validation/consultation.schema";
import { buildMailto } from "@/lib/utils/mailto";
import { useFormSubmit } from "./useFormSubmit";
import { getAllServices } from "@/lib/data/getService";

const serviceOptions = getAllServices().map((s) => ({
  label: s.title,
  value: s.title,
}));

const allOptions = [...serviceOptions, { label: "Not sure yet, help me decide", value: "Undecided" }];

export function ConsultationForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    bookTitle: "",
    genre: "",
    service: "",
    description: "",
  });

  const { status, fieldErrors, mailtoHref, submit, reset } = useFormSubmit({
    schema: consultationSchema,
    endpoint: "/api/consultation",
    buildMailto: (data) =>
      buildMailto("Consultation request, Horpiano", {
        Name: data.name,
        Email: data.email,
        "Book Title": data.bookTitle,
        Genre: data.genre,
        "Service Needed": data.service,
        "Project Description": data.description,
      }),
  });

  const set =
    (key: keyof typeof values) =>
    (e: { target: { value: string } }) =>
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
        <h3 className="mt-4 font-serif text-2xl text-navy-900">Consultation requested</h3>
        <p className="mt-2 text-ink-muted">
          Thank you. We&apos;ve received your details and will reach out within one business
          day to schedule your consultation.
        </p>
        <Button onClick={reset} variant="secondary" className="mt-6">
          Submit another request
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Book Title"
          name="bookTitle"
          value={values.bookTitle}
          onChange={set("bookTitle")}
          error={fieldErrors.bookTitle}
          hint="Optional"
        />
        <Input
          label="Genre"
          name="genre"
          value={values.genre}
          onChange={set("genre")}
          error={fieldErrors.genre}
          hint="Optional"
        />
      </div>
      <Select
        label="Service Needed"
        name="service"
        required
        options={allOptions}
        placeholder="Select a service"
        value={values.service}
        onChange={set("service")}
        error={fieldErrors.service}
      />
      <Textarea
        label="Project Description"
        name="description"
        required
        rows={6}
        value={values.description}
        onChange={set("description")}
        error={fieldErrors.description}
        hint="Tell us about your book, your goals, and where you are in the process."
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
          We couldn&apos;t submit your request just now. Please try again, or{" "}
          <a href={mailtoHref} className="font-semibold underline">
            email us directly
          </a>
          .
        </div>
      )}

      <Button type="submit" size="lg" fullWidth disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Request My Consultation"}
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />
      </Button>
    </form>
  );
}
