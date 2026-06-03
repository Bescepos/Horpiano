import { services } from "@/data/services";
import type { Service, ServiceSlug } from "@/lib/types";

export function getAllServices(): Service[] {
  return [...services].sort((a, b) => a.order - b.order);
}

export function allServiceSlugs(): ServiceSlug[] {
  return services.map((s) => s.slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(limit?: number): Service[] {
  const featured = getAllServices().filter((s) => s.featured);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}
