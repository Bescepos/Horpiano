import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";
import { ResourcesHub } from "@/components/resources/ResourcesHub";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { getAllResources, getFeaturedResources } from "@/lib/data/getResources";
import { resourceCategories } from "@/data/resources";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description:
    "Writing tips, publishing guides, author branding, marketing strategies, and industry insights from the emilybyron team.",
  path: "/resources",
});

export default function ResourcesPage() {
  const resources = getAllResources();
  const featured = getFeaturedResources(3);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ]}
        eyebrow="Resources"
        title="The author"
        highlight="knowledge hub"
        subtitle="Practical advice to help you write, publish, market, and grow, from our team of specialists."
      />

      <Section background="white" spacing="lg">
        <Container>
          <ResourcesHub
            resources={resources}
            categories={resourceCategories}
            featured={featured}
          />
        </Container>
      </Section>

      <FinalCTA
        heading="Ready to put it into practice?"
        body="Get personalized guidance for your book with a free consultation."
        buttonLabel="Book a Consultation"
      />
    </>
  );
}
