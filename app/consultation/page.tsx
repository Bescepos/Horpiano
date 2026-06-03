import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/seo/siteConfig";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Book a Consultation",
  description:
    "Book a free, no-obligation consultation with Horpiano. Share your project and get a personalized roadmap to write, publish, and grow.",
  path: "/consultation",
});

const benefits = [
  "A personalized roadmap for your book and goals",
  "Honest, expert advice, with no obligation",
  "Clarity on the services, timeline, and investment",
  "A confident next step, whatever stage you're at",
];

const process = [
  { title: "Share your project", description: "Tell us about your book and goals using the form." },
  { title: "We review & prepare", description: "Our team reviews your details before we connect." },
  { title: "Your consultation", description: "We discuss your project and the best path forward." },
  { title: "Receive your plan", description: "You leave with a clear, tailored recommendation." },
];

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. Your initial consultation is completely free and comes with no obligation to purchase anything.",
  },
  {
    question: "Do I need a finished manuscript?",
    answer:
      "Not at all. Whether you have a polished draft or just an idea, we'll meet you where you are and recommend the right next step.",
  },
  {
    question: "How soon will you respond?",
    answer:
      "We typically reach out within one business day of receiving your request to arrange your consultation.",
  },
  {
    question: "What happens after the consultation?",
    answer:
      "You'll receive a tailored recommendation. If you'd like to proceed, we'll prepare a clear proposal. If not, the advice is yours to keep.",
  },
];

export default function ConsultationPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Consultation", path: "/consultation" },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Consultation", path: "/consultation" },
        ]}
        eyebrow="Consultation"
        title="Book your free"
        highlight="consultation"
        subtitle="Choose a time and book instantly, or share your project details below and we'll be in touch within one business day."
      >
        <Button href={siteConfig.bookingUrl} size="lg">
          Book a time instantly
        </Button>
        <Button href="#consultation-form" variant="secondary-dark" size="lg">
          Share project details
        </Button>
      </PageHero>

      <Section background="white" spacing="lg" id="consultation-form">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <Card padding="lg" tone="light">
                <h2 className="font-serif text-2xl text-navy-900">Tell us about your book</h2>
                <p className="mt-2 text-ink-muted">
                  All fields marked with an asterisk are required.
                </p>
                <div className="mt-6">
                  <ConsultationForm />
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-10">
                <div>
                  <SectionHeading
                    align="left"
                    as="h2"
                    eyebrow="What you get"
                    title="A consultation built around you"
                  />
                  <ul className="mt-6 space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-charcoal-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-navy-900">How it works</h3>
                  <ol className="mt-5 space-y-5">
                    {process.map((step, i) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 font-serif text-sm font-semibold text-gold-300">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-navy-900">{step.title}</p>
                          <p className="text-sm text-ink-muted">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section background="light" spacing="lg">
        <Container size="narrow">
          <Reveal>
            <SectionHeading eyebrow="FAQs" title="Before you book" />
          </Reveal>
          <div className="mt-10">
            <Accordion
              items={faqs.map((f, i) => ({ id: `c-${i}`, question: f.question, answer: f.answer }))}
              defaultOpenId="c-0"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
