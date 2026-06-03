import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { Divider } from "@/components/ui/Divider";
import { StoryCard } from "@/components/stories/StoryCard";
import { CaseStudy } from "@/components/stories/CaseStudy";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustStats } from "@/components/sections/TrustStats";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { stories } from "@/data/stories";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Success Stories",
  description:
    "Featured books, published authors, and case studies from emilybyron, real results across editing, ghostwriting, design, publishing, and marketing.",
  path: "/success-stories",
});

export default function SuccessStoriesPage() {
  const caseStudies = stories.filter((s) => s.challenge).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Success Stories", path: "/success-stories" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Success Stories", path: "/success-stories" },
        ]}
        eyebrow="Success Stories"
        title="Real authors,"
        highlight="real results"
        subtitle="From debut novels to business bestsellers, explore the books and authors we've helped bring to the world."
      />

      <TrustStats />

      {/* Featured books & authors */}
      <Section background="white" spacing="lg">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Featured Books & Authors"
              title="Books we're proud to have shaped"
            />
          </Reveal>
          <StaggerContainer className="mt-14 grid gap-6 lg:grid-cols-2">
            {stories.map((story) => (
              <StaggerItem key={story.id} className="h-full">
                <StoryCard story={story} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Case studies */}
      <Section background="light" spacing="lg">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Case Studies"
              title="A closer look at the journey"
              subtitle="How strategy, craft, and partnership turned manuscripts into milestones."
            />
          </Reveal>
          <div className="mt-16 space-y-16">
            {caseStudies.map((story, i) => (
              <div key={story.id}>
                <CaseStudy story={story} reversed={i % 2 === 1} />
                {i < caseStudies.length - 1 && (
                  <Divider variant="ornament" className="mt-16" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Testimonials />

      <FinalCTA
        heading="Your success story starts here"
        body="Join the authors who turned their manuscripts into published, growing careers."
      />
    </>
  );
}
