import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { resources, resourceCategories } from "@/data/resources";
import { getArticle } from "@/data/resourceArticles";
import { getAllResources } from "@/lib/data/getResources";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { siteConfig } from "@/lib/seo/siteConfig";

export const dynamicParams = false;

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}

const categoryLabel = (id: string) =>
  resourceCategories.find((c) => c.id === id)?.label ?? id;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  return buildMetadata({
    title: resource.title,
    description: resource.excerpt,
    path: `/resources/${resource.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const article = getArticle(slug);

  const related = getAllResources()
    .filter((r) => r.slug !== resource.slug)
    .sort((a, b) => (a.category === resource.category ? -1 : 0) - (b.category === resource.category ? -1 : 0))
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.excerpt,
    datePublished: resource.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/resources/${resource.slug}`,
  };

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: resource.title, path: `/resources/${resource.slug}` },
          ]),
        ]}
      />

      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: categoryLabel(resource.category), path: "/resources" },
        ]}
        eyebrow={categoryLabel(resource.category)}
        title={resource.title}
        subtitle={resource.excerpt}
      >
        <div className="flex items-center gap-5 text-sm text-navy-200">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold-300" aria-hidden="true" />
            {resource.readingTimeMins} min read
          </span>
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gold-300" aria-hidden="true" />
            <time dateTime={resource.publishedAt}>{formatDate(resource.publishedAt)}</time>
          </span>
        </div>
      </PageHero>

      <Section background="white" spacing="lg">
        <Container size="narrow">
          <Reveal>
            <article className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:font-medium prose-h2:text-[1.75rem] prose-p:leading-[1.8]">
              {article ? (
                <>
                  <p className="lead text-xl text-charcoal-light">{article.intro}</p>
                  {article.sections.map((section) => (
                    <section key={section.heading}>
                      <h2>{section.heading}</h2>
                      {section.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </section>
                  ))}
                  <div className="mt-10 rounded-2xl border border-gold-200/70 bg-cream p-6 not-prose">
                    <h2 className="font-serif text-xl text-navy-900">Key takeaways</h2>
                    <ul className="mt-4 space-y-2">
                      {article.takeaways.map((t) => (
                        <li key={t} className="flex items-start gap-3 text-charcoal-light">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <p>{resource.excerpt}</p>
              )}
            </article>
          </Reveal>
        </Container>
      </Section>

      {/* Related */}
      <Section background="light" spacing="lg">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Keep Reading" title="Related resources" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA
        heading="Turn insight into action"
        body="Get tailored guidance for your book with a free consultation."
        buttonLabel="Book a Consultation"
      />
    </>
  );
}
