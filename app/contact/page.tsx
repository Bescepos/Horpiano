import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import { WhatsAppIcon, TelegramIcon } from "@/components/art/ChatIcons";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/lib/seo/siteConfig";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with emilybyron. Email horpianog@gmail.com or send us a message, we typically respond within one business day.",
  path: "/contact",
});

const socialInitials: Record<string, string> = {
  instagram: "Ig",
  linkedin: "in",
  x: "X",
  facebook: "f",
};

export default function ContactPage() {
  const waHref = siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp}` : "#";
  const tgHref = siteConfig.telegram ? `https://t.me/${siteConfig.telegram}` : "#";

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        eyebrow="Contact"
        title="Let's start a"
        highlight="conversation"
        subtitle="Questions about your project, our services, or where to begin? We'd love to hear from you."
      />

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <Card padding="lg">
                <h2 className="font-serif text-2xl text-navy-900">Send us a message</h2>
                <p className="mt-2 text-ink-muted">
                  Fill out the form and we&apos;ll get back to you shortly.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-8">
                <SectionHeading
                  align="left"
                  as="h2"
                  eyebrow="Reach us"
                  title="Other ways to connect"
                />

                <ul className="space-y-4">
                  <li className="flex items-start gap-4 rounded-2xl border border-gray-line/70 bg-white p-5 shadow-soft">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-navy-900">Email</p>
                      <a
                        href={`mailto:${siteConfig.contactEmail}`}
                        className="block text-gold-700 transition-colors hover:text-gold-800"
                      >
                        {siteConfig.contactEmail}
                      </a>
                      {siteConfig.secondaryEmail ? (
                        <a
                          href={`mailto:${siteConfig.secondaryEmail}`}
                          className="block text-gold-700 transition-colors hover:text-gold-800"
                        >
                          {siteConfig.secondaryEmail}
                        </a>
                      ) : null}
                    </div>
                  </li>
                  {siteConfig.whatsapp ? (
                    <li className="flex items-start gap-4 rounded-2xl border border-gray-line/70 bg-white p-5 shadow-soft">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                        <WhatsAppIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-navy-900">WhatsApp</p>
                        <a
                          href={waHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-700 transition-colors hover:text-gold-800"
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </li>
                  ) : null}
                  {siteConfig.telegram ? (
                    <li className="flex items-start gap-4 rounded-2xl border border-gray-line/70 bg-white p-5 shadow-soft">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                        <TelegramIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-navy-900">Telegram</p>
                        <a
                          href={tgHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-700 transition-colors hover:text-gold-800"
                        >
                          Message on Telegram
                        </a>
                      </div>
                    </li>
                  ) : null}
                  <li className="flex items-start gap-4 rounded-2xl border border-gray-line/70 bg-white p-5 shadow-soft">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-navy-900">Location</p>
                      <p className="text-ink-muted">Remote-first · Serving authors worldwide</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 rounded-2xl border border-gray-line/70 bg-white p-5 shadow-soft">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-navy-900">Response time</p>
                      <p className="text-ink-muted">Within one business day</p>
                    </div>
                  </li>
                </ul>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
                    Follow along
                  </p>
                  <ul className="mt-3 flex items-center gap-2.5">
                    {siteConfig.social.map((s) => (
                      <li key={s.platform}>
                        <a
                          href={s.href}
                          aria-label={s.label}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-sm font-semibold text-navy-700 transition-colors hover:border-gold-300 hover:bg-navy-50 hover:text-gold-700"
                        >
                          {socialInitials[s.platform] ?? s.label.charAt(0)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-ink-muted">
                  Working on a specific book?{" "}
                  <Link
                    href="/consultation"
                    className="font-medium text-gold-700 transition-colors hover:text-gold-800"
                  >
                    Share the details in our consultation form
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <FinalCTA
        heading="Prefer to talk it through?"
        body="Book a free consultation and we'll help you find the right starting point for your book."
        buttonLabel="Book a Consultation"
      />
    </>
  );
}
