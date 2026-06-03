import { resources } from "@/data/resources";
import type { Resource, ResourceCategory } from "@/lib/types";

export function getAllResources(): Resource[] {
  return [...resources].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
}

export function getFeaturedResources(limit = 3): Resource[] {
  const featured = getAllResources().filter((r) => r.featured);
  const pool = featured.length >= limit ? featured : getAllResources();
  return pool.slice(0, limit);
}

export function getLatestResources(limit = 3): Resource[] {
  return getAllResources().slice(0, limit);
}

/** Case-insensitive search across title, excerpt, and tags + optional category filter. */
export function filterResources(
  all: Resource[],
  { query, category }: { query: string; category: ResourceCategory | "all" },
): Resource[] {
  const q = query.trim().toLowerCase();
  return all.filter((r) => {
    const matchesCategory = category === "all" || r.category === category;
    if (!matchesCategory) return false;
    if (!q) return true;
    const haystack = [r.title, r.excerpt, ...r.tags].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}
