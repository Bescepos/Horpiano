"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-off-white px-6 py-32 text-center">
      <div className="max-w-md">
        <h1 className="font-serif text-display-sm text-navy-900">
          Something went wrong
        </h1>
        <p className="mt-4 text-ink-muted">
          We hit an unexpected error. Please try again, or return home.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={reset} size="lg">
            Try again
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
