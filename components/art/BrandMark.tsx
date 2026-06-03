import { cn } from "@/lib/utils/cn";

interface BrandMarkProps {
  className?: string;
}

/** Horpiano monogram — an open-book / "H" mark in brand gold. */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="Horpiano"
    >
      <defs>
        <linearGradient id="hp-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E4C46B" />
          <stop offset="50%" stopColor="#C8992E" />
          <stop offset="100%" stopColor="#A87C20" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="#101D30" />
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10.5"
        fill="none"
        stroke="url(#hp-gold)"
        strokeOpacity="0.5"
      />
      {/* Open book pages forming an implied H */}
      <path
        d="M20 11c-2.6-1.8-5.6-2.4-8.6-2.1-.5 0-.9.4-.9.9v17.8c0 .6.5 1 1 .9 2.7-.3 5.4.2 7.7 1.8.5.3 1.1.3 1.6 0 2.3-1.6 5-2.1 7.7-1.8.5.1 1-.3 1-.9V9.8c0-.5-.4-.9-.9-.9-3-.3-6 .3-8.6 2.1Z"
        fill="none"
        stroke="url(#hp-gold)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <line x1="20" y1="11" x2="20" y2="31" stroke="url(#hp-gold)" strokeWidth="1.8" />
    </svg>
  );
}
