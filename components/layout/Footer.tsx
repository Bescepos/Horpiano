import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { siteConfig } from "@/lib/seo/siteConfig";
import { getAllServices } from "@/lib/data/getService";

const initials: Record<string, string> = {
  instagram: "Ig",
  linkedin: "in",
  x: "X",
  facebook: "f",
};

export function Footer() {
  const serviceLinks = getAllServices().slice(0, 6);
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-4">
            <Logo onDark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
              {siteConfig.description}
            </p>
            <div className="mt-7">
              <p className="font-serif text-lg text-white">Author insights, in your inbox</p>
              <p className="mt-1 text-sm text-navy-300">
                Writing tips, publishing guides, and marketing strategies.
              </p>
              <NewsletterForm className="mt-4 max-w-md" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            {/* Quick links */}
            <nav aria-label="Footer navigation">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-300">
                Explore
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {siteConfig.nav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-navy-200 transition-colors hover:text-gold-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="Services">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-300">
                Services
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {serviceLinks.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-navy-200 transition-colors hover:text-gold-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="font-medium text-gold-200 transition-colors hover:text-gold-100"
                  >
                    All services →
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-300">
                Get in touch
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="inline-flex items-center gap-2 text-navy-200 transition-colors hover:text-gold-200"
                  >
                    <Mail className="h-4 w-4 text-gold-400" aria-hidden="true" />
                    {siteConfig.contactEmail}
                  </a>
                </li>
                <li className="text-navy-300">Worldwide · Remote-first</li>
              </ul>

              <h2 className="mt-7 text-sm font-semibold uppercase tracking-wider text-gold-300">
                Follow
              </h2>
              <ul className="mt-4 flex items-center gap-2.5">
                {siteConfig.social.map((s) => (
                  <li key={s.platform}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-navy-100 transition-colors hover:border-gold-300/60 hover:bg-white/5 hover:text-gold-200"
                    >
                      {initials[s.platform] ?? s.label.charAt(0)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-navy-300 sm:flex-row">
          <p>© {year} emilybyron. All Rights Reserved.</p>
          <p className="font-serif italic text-navy-200">
            From idea to published success.
          </p>
        </div>
      </div>
    </footer>
  );
}
