import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { Accordion } from "@/components/ui/Accordion";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { getIcon } from "@/lib/icons";
import {
  allServiceSlugs,
  getServiceBySlug,
  getAllServices,
} from "@/lib/data/getService";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import { siteConfig } from "@/lib/seo/siteConfig";

export const dynamicParams = false;

export function generateStaticParams() {
  return allServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo?.title ?? service.title,
    description: service.seo?.description ?? service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getAllServices()
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const Icon = getIcon(service.icon);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(service),
          faqJsonLd(service.faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
        eyebrow={service.title}
        title={service.hero.heading}
        subtitle={service.hero.subheading}
      >
        <Button href={siteConfig.bookingUrl} size="lg">
          Book a Consultation
        </Button>
        <Button href="/contact" variant="secondary-dark" size="lg">
          Ask a Question
        </Button>
      </PageHero>

      {/* Overview */}
      <Section background="white" spacing="lg">
        <Container size="narrow">
          <Reveal>
            <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-gold-300">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <SectionHeading
              align="left"
              eyebrow="Overview"
              title={service.tagline}
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal-light">
              {service.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Benefits */}
      <Section background="light" spacing="lg">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Benefits"
              title="What you gain"
              subtitle={`The advantages of choosing Horpiano for ${service.title.toLowerCase()}.`}
            />
          </Reveal>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <Card className="flex h-full gap-4" padding="md">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-navy-900">{benefit.title}</h3>
                    <p className="mt-1.5 text-ink-muted">{benefit.description}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Process */}
      <Section background="white" spacing="lg">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="A clear, collaborative process"
              subtitle="Know exactly what to expect at every step."
            />
          </Reveal>
          <div className="mt-14">
            <ProcessSteps steps={service.process} />
          </div>
        </Container>
      </Section>

      {/* Sub-services */}
      <Section background="cream" spacing="lg">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What's Included"
              title={`${service.title}, in detail`}
              subtitle="A complete menu of options, tailored to your project."
            />
          </Reveal>
          <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub) => (
              <StaggerItem key={sub.title}>
                <div className="flex h-full flex-col rounded-xl border border-gold-200/60 bg-white p-5 shadow-soft">
                  <h3 className="font-serif text-lg text-navy-900">{sub.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{sub.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* FAQs */}
      <Section background="white" spacing="lg">
        <Container size="narrow">
          <Reveal>
            <SectionHeading
              eyebrow="FAQs"
              title="Questions, answered"
            />
          </Reveal>
          <div className="mt-10">
            <Accordion
              items={service.faqs.map((faq, i) => ({
                id: `faq-${i}`,
                question: faq.question,
                answer: faq.answer,
              }))}
              defaultOpenId="faq-0"
            />
          </div>
        </Container>
      </Section>

      {/* Related */}
      <Section background="light" spacing="lg">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Keep Exploring" title="Related services" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {related.map((rel) => {
              const RelIcon = getIcon(rel.icon);
              return (
                <Button
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  variant="secondary"
                  className="h-auto flex-col items-start gap-3 rounded-2xl px-6 py-6 text-left"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <RelIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-lg text-navy-900">{rel.title}</span>
                </Button>
              );
            })}
          </div>
        </Container>
      </Section>

      <FinalCTA heading={service.cta.heading} body={service.cta.body} />
    </>
  );
}
