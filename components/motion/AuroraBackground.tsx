import { cn } from "@/lib/utils/cn";

interface AuroraBackgroundProps {
  className?: string;
  /** Show the subtle grid overlay (best on dark surfaces). */
  grid?: boolean;
}

/**
 * Decorative blurred navy/gold blobs for dark hero/CTA surfaces.
 * Purely ornamental, hidden from assistive technology and non-interactive.
 */
export function AuroraBackground({ className, grid = true }: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {grid && <div className="absolute inset-0 bg-grid opacity-60" />}
      <div className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-navy-500/40 blur-3xl animate-float-slow" />
      <div className="absolute right-[-6rem] top-10 h-[24rem] w-[24rem] rounded-full bg-gold-500/20 blur-3xl animate-float" />
      <div className="absolute bottom-[-8rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-navy-400/30 blur-3xl animate-float-slow" />
    </div>
  );
}
