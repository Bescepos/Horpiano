"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { buttonVariants } from "@/components/ui/Button";
import { siteConfig } from "@/lib/seo/siteConfig";
import { cn } from "@/lib/utils/cn";

const desktopLinks = siteConfig.nav.filter((l) => l.href !== "/");

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 16);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] transition-all duration-300",
        scrolled
          ? "border-b border-gray-line/80 bg-off-white/85 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <Logo onDark={onDark} />

        <div className="hidden items-center gap-8 lg:flex">
          {desktopLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={active}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "link-underline text-[0.95rem] font-medium transition-colors",
                  onDark
                    ? "text-white/85 hover:text-white"
                    : "text-navy-700 hover:text-navy-900",
                  active && (onDark ? "text-gold-300" : "text-gold-700"),
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/consultation"
            className={cn(
              buttonVariants({ variant: "primary", size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden",
              onDark
                ? "border-white/25 text-white hover:bg-white/10"
                : "border-navy-200 text-navy-800 hover:bg-navy-50",
            )}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={siteConfig.nav}
        pathname={pathname}
      />
    </header>
  );
}
