"use client";

import { useMemo, useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { cn } from "@/lib/utils/cn";
import { faqs, faqCategories } from "@/data/faqs";
import type { FAQCategory } from "@/lib/types";

type Filter = FAQCategory | "all";

export function FAQExplorer() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(
    () => (active === "all" ? faqs : faqs.filter((f) => f.category === active)),
    [active],
  );

  const pills: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    ...faqCategories.map((c) => ({ id: c.id as Filter, label: c.label })),
  ];

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2.5"
        role="tablist"
        aria-label="FAQ categories"
      >
        {pills.map((pill) => {
          const isActive = active === pill.id;
          return (
            <button
              key={pill.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(pill.id)}
              className={cn(
                "rounded-pill border px-4 py-2 text-sm font-medium transition-all",
                isActive
                  ? "border-transparent bg-navy-900 text-white shadow-soft"
                  : "border-gray-line bg-white text-navy-700 hover:border-gold-300 hover:text-gold-700",
              )}
            >
              {pill.label}
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion
          key={active}
          items={filtered.map((f) => ({
            id: f.id,
            question: f.question,
            answer: f.answer,
          }))}
        />
      </div>
    </div>
  );
}
