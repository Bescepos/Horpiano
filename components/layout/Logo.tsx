import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  /** Kept for API compatibility; the image logo reads on light and dark surfaces. */
  onDark?: boolean;
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Emily Byron Literary Services, home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/logo.jpg"
        alt="Emily Byron Literary Services"
        width={720}
        height={800}
        priority
        className="h-12 w-auto rounded-lg sm:h-14"
      />
    </Link>
  );
}
