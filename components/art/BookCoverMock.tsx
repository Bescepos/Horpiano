import { cn } from "@/lib/utils/cn";

interface BookCoverMockProps {
  title: string;
  author: string;
  from: string;
  to: string;
  className?: string;
}

/** Self-contained, gradient book-cover mockup rendered from data (no external images). */
export function BookCoverMock({
  title,
  author,
  from,
  to,
  className,
}: BookCoverMockProps) {
  return (
    <div
      className={cn(
        "relative aspect-[2/3] w-full overflow-hidden rounded-r-lg rounded-l-sm shadow-elevated ring-1 ring-black/10",
        className,
      )}
      style={{ backgroundImage: `linear-gradient(150deg, ${from}, ${to})` }}
      role="img"
      aria-label={`${title} by ${author}, book cover`}
    >
      {/* Spine highlight */}
      <div className="absolute inset-y-0 left-0 w-2 bg-black/25" aria-hidden="true" />
      <div className="absolute inset-y-0 left-2 w-px bg-white/20" aria-hidden="true" />
      {/* Sheen */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col items-center justify-between px-5 py-8 text-center">
        <span className="h-px w-12 bg-gold-400/80" aria-hidden="true" />
        <div className="flex flex-1 flex-col items-center justify-center">
          <h3 className="font-serif text-lg font-semibold leading-tight text-white sm:text-xl">
            {title}
          </h3>
          <span className="mt-3 h-px w-8 bg-gold-300/70" aria-hidden="true" />
        </div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-200">
          {author}
        </p>
      </div>
    </div>
  );
}
