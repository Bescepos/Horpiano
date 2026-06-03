import Link from "next/link";
import { BrandMark } from "@/components/art/BrandMark";
import { siteConfig } from "@/lib/seo/siteConfig";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  onDark?: boolean;
  className?: string;
}

export function Logo({ onDark, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name}, home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <BrandMark className="h-9 w-9 transition-transform duration-300 group-hover:-rotate-3" />
      <span
        className={cn(
          "font-serif text-2xl font-semibold tracking-tight transition-colors",
          onDark ? "text-white" : "text-navy-900",
        )}
      >
        Horpiano
      </span>
    </Link>
  );
}
