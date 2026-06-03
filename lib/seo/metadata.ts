import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

interface BuildMetadataInput {
  title: string;
  description?: string;
  path?: string;
  /** When true the title is used verbatim (no "| Horpiano" suffix). */
  absoluteTitle?: boolean;
}

/** Centralized per-page metadata builder (canonical, OpenGraph, Twitter cards). */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  absoluteTitle = false,
}: BuildMetadataInput): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
