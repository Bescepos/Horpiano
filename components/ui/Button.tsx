import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-tight transition-all duration-300 ease-premium disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-gold-gradient text-navy-900 shadow-sm hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "border border-navy-200 bg-white text-navy-900 hover:border-navy-300 hover:bg-navy-50",
        "secondary-dark":
          "border border-white/30 bg-white/5 text-white backdrop-blur hover:border-gold-300/60 hover:bg-white/10",
        ghost: "text-navy-700 hover:bg-navy-50",
        "ghost-dark": "text-white/90 hover:bg-white/10",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-[0.95rem]",
        lg: "h-14 px-9 text-base",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  external?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant, size, fullWidth, className, children } = props;
  const classes = cn(buttonVariants({ variant, size, fullWidth }), className);

  if ("href" in props && props.href !== undefined) {
    const { href, external } = props;
    const isInternal = href.startsWith("/") && !external;

    if (isInternal) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    const openNewTab = external || /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(openNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  const {
    variant: _variant,
    size: _size,
    fullWidth: _fullWidth,
    className: _className,
    children: _children,
    type = "button",
    ...rest
  } = props as ButtonAsButton;
  void _variant;
  void _size;
  void _fullWidth;
  void _className;
  void _children;

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
