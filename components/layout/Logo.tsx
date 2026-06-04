import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  /** Kept for API compatibility; the framed logo reads on light and dark surfaces. */
  onDark?: boolean;
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Emily Byron Literary Services, home"
      className={cn("group inline-flex items-center", className)}
    >
      <span className="inline-flex items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-elevated ring-1 ring-gold-400/50 transition-shadow duration-300 group-hover:shadow-gold-glow">
        <Image
          src="/logo.jpg"
          alt="Emily Byron Literary Services"
          width={720}
          height={800}
          priority
          className="h-12 w-auto rounded-md sm:h-14 lg:h-16"
        />
      </span>
    </Link>
  );
}
