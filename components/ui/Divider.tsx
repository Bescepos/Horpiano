import { cn } from "@/lib/utils/cn";

interface DividerProps {
  variant?: "line" | "gold" | "ornament";
  className?: string;
  onDark?: boolean;
}

export function Divider({ variant = "line", className, onDark }: DividerProps) {
  if (variant === "gold") {
    return (
      <span
        className={cn("block h-px w-16 bg-gold-gradient", className)}
        aria-hidden="true"
      />
    );
  }

  if (variant === "ornament") {
    return (
      <div
        className={cn("flex items-center justify-center gap-4", className)}
        aria-hidden="true"
      >
        <span
          className={cn(
            "h-px w-16 bg-gradient-to-r from-transparent",
            onDark ? "to-white/30" : "to-gray-line",
          )}
        />
        <span className="rotate-45 text-gold-500">◆</span>
        <span
          className={cn(
            "h-px w-16 bg-gradient-to-l from-transparent",
            onDark ? "to-white/30" : "to-gray-line",
          )}
        />
      </div>
    );
  }

  return (
    <hr
      className={cn("border-0 border-t", onDark ? "border-white/10" : "border-gray-line", className)}
    />
  );
}
