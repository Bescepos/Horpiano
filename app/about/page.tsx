import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { GlassCard } from "@/components/ui/GlassCard";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { TrustStats } from "@/components/sections/TrustStats";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { getIcon } from "@/lib/icons";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Horpiano is a premium author-services agency on a mission to empower writers to successfully write, publish, market, and grow their literary careers.",
  path: "/about",
});

const values = [
  {
    icon: "verified",
    title: "Excellence",
    description: "We hold every manuscript, cover, and campaign to a professional standard.",
  },
  {
    icon: "shield",
    title: "Integrity",
    description: "Honest advice, transparent pricing, and your ownership protected, always.",
  },
  {
    icon: "branding",
    title: "Creativity",
    description: "Original thinking and craft that helps your work stand apart.",
  },
  {
    icon: "handshake",
    title: "Professionalism",
    description: "Reliable, respectful partnership at every stage of your journey.",
  },
  {
    icon: "growth",
    title: "Author Success",
    description: "Your goals drive ours; we measure our work by your results.",
  },
];

const team = [
  { initials: "AR", name: "Adaeze Roberts", role: "Founder & Publishing Director", bio: "Two decades guiding authors from first draft to lasting careers." },
  { initials: "JM", name: "Jonah Mercer", role: "Head of Editorial", bio: "Developmental editor with a love for shaping unforgettable stories." },
  { initials: "LC", name: "Lena Cruz", role: "Creative & Design Lead", bio: "Award-minded designer crafting covers that sell." },
  { initials: "TS", name: "Theo S-Adjei", role: "Marketing Strategist", bio: "Data-driven campaigns that connect books with readers." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        eyebrow="About Horpiano"
        title="A partner devoted to"
        highlight="author success"
        subtitle="We bring together editors, designers, marketers, and strategists under one roof, so writers never have to navigate publishing alone."
      />

      {/* Story */}
      <Section background="white" spacing="lg">
        <Container size="narrow">
          <Reveal>
            <SectionHeading align="left" eyebrow="Our Story" title="Built for the modern author" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal-light">
              <p>
                Horpiano was founded on a simple belief: every author deserves a team of
                experts in their corner. Too many brilliant manuscripts never reach readers
               , not for lack of talent, but for lack of guidance through a complex,
                ever-changing industry.
              </p>
              <p>
                We set out to change that by uniting the craft of a literary agency with the
                strategy of a modern publishing consultancy. From editing and design to
                publishing, marketing, and long-term career growth, we walk every step of the
                journey alongside the writers we serve.
              </p>
              <p>
                Today, Horpiano supports authors across genres and around the world, helping
                them turn ideas into published, growing literary careers.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <TrustStats />

      {/* Mission & Vision */}
      <Section background="navy" spacing="lg" className="overflow-hidden">
        <AuroraBackground grid={false} />
        <Container className="relative">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <GlassCard className="h-full p-8 sm:p-10">
                <span className="eyebrow text-gold-300">Our Mission</span>
                <p className="mt-4 font-serif text-2xl leading-relaxed text-white sm:text-3xl">
                  &ldquo;To empower authors with the expertise, resources, and professional
                  support needed to successfully write, publish, market, and grow their
                  literary careers.&rdquo;
                </p>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.1}>
              <GlassCard className="h-full p-8 sm:p-10">
                <span className="eyebrow text-gold-300">Our Vision</span>
                <p className="mt-4 font-serif text-2xl leading-relaxed text-white sm:text-3xl">
                  A world where every author has the guidance and tools to share their story
                  with confidence, and build a career that lasts.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="white" spacing="lg">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core Values"
              title="The principles behind every project"
            />
          </Reveal>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = getIcon(value.icon);
              return (
                <StaggerItem key={value.title}>
                  <Card className="h-full" interactive>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-serif text-xl text-navy-900">{value.title}</h3>
                    <p className="mt-2 text-ink-muted">{value.description}</p>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Team */}
      <Section background="light" spacing="lg">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Team"
              title="The specialists in your corner"
              subtitle="A multidisciplinary team united by one goal: your success as an author."
            />
          </Reveal>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <Card className="h-full text-center" interactive>
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 font-serif text-2xl text-gold-200">
                    {member.initials}
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-navy-900">{member.name}</h3>
                  <p className="text-sm font-medium text-gold-700">{member.role}</p>
                  <p className="mt-3 text-sm text-ink-muted">{member.bio}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
