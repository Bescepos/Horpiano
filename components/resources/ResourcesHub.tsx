"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ResourceCard } from "./ResourceCard";
import { filterResources } from "@/lib/data/getResources";
import { cn } from "@/lib/utils/cn";
import type { Resource, ResourceCategory, ResourceCategoryMeta } from "@/lib/types";

interface ResourcesHubProps {
  resources: Resource[];
  categories: ResourceCategoryMeta[];
  featured: Resource[];
}

type Filter = ResourceCategory | "all";

export function ResourcesHub({ resources, categories, featured }: ResourcesHubProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Filter>("all");

  const results = useMemo(
    () => filterResources(resources, { query, category }),
    [resources, query, category],
  );

  const isDefaultView = query.trim() === "" && category === "all";

  const pills: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.id as Filter, label: c.label })),
  ];

  return (
    <div>
      {/* Search */}
      <div className="mx-auto max-w-xl">
        <label htmlFor="resource-search" className="sr-only">
          Search resources
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
          <input
            id="resource-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search writing tips, guides, and more..."
            className="w-full rounded-pill border border-gray-line bg-white py-3.5 pl-12 pr-12 text-charcoal shadow-soft transition focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted hover:bg-light-gray"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Category pills */}
      <div
        className="mt-6 flex flex-wrap justify-center gap-2.5"
        role="tablist"
        aria-label="Resource categories"
      >
        {pills.map((pill) => {
          const isActive = category === pill.id;
          return (
            <button
              key={pill.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setCategory(pill.id)}
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

      {/* Featured (default view only) */}
      {isDefaultView && featured.length > 0 && (
        <div className="mt-16">
          <h2 className="flex items-center gap-3 font-serif text-2xl text-navy-900">
            <span className="h-px w-8 bg-gold-gradient" aria-hidden="true" />
            Featured
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {featured.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-2xl text-navy-900">
            {isDefaultView ? "All resources" : "Results"}
          </h2>
          <p className="text-sm text-ink-muted" aria-live="polite">
            {results.length} {results.length === 1 ? "article" : "articles"}
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-line bg-white py-16 text-center">
            <p className="font-serif text-xl text-navy-900">No articles found</p>
            <p className="mt-2 text-ink-muted">
              Try a different search term or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="mt-5 font-semibold text-gold-700 hover:text-gold-800"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
