import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-pill font-semibold leading-none",
  {
    variants: {
      variant: {
        gold: "bg-gold-100 text-gold-800",
        navy: "bg-navy-900 text-white",
        soft: "bg-navy-50 text-navy-700",
        outline: "border border-navy-200 text-navy-700",
        "glass": "border border-white/20 bg-white/10 text-white backdrop-blur",
      },
      size: {
        sm: "px-3 py-1 text-xs",
        md: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: { variant: "soft", size: "md" },
  },
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, variant, size, className }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>{children}</span>
  );
}
