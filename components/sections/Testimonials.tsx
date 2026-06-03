import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { Reveal } from "@/components/motion/Reveal";
import { Carousel } from "@/components/motion/Carousel";
import { GlassCard } from "@/components/ui/GlassCard";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/lib/types";

function Slide({ t }: { t: Testimonial }) {
  return (
    <GlassCard intensity="medium" className="mx-auto max-w-3xl p-8 sm:p-12">
      <Quote className="h-10 w-10 text-gold-400/80" aria-hidden="true" />
      {typeof t.rating === "number" && (
        <div className="mt-4 flex items-center gap-1 text-gold-400" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
          ))}
        </div>
      )}
      <blockquote className="mt-5 font-serif text-xl leading-relaxed text-white sm:text-2xl">
        “{t.quote}”
      </blockquote>
      <div className="mt-8 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-navy-500 to-navy-700 text-sm font-semibold text-gold-200">
          {t.initials}
        </span>
        <div>
          <p className="font-semibold text-white">{t.authorName}</p>
          {t.authorRole && <p className="text-sm text-navy-200">{t.authorRole}</p>}
        </div>
      </div>
    </GlassCard>
  );
}

export function Testimonials() {
  return (
    <Section background="aurora" spacing="lg" className="overflow-hidden">
      <AuroraBackground />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            onDark
            eyebrow="Testimonials"
            title="Authors who found their success with us"
            subtitle="The relationships we build matter as much as the results we deliver."
          />
        </Reveal>

        <div className="mt-14">
          <Carousel
            ariaLabel="Author testimonials"
            slides={testimonials.map((t) => (
              <Slide key={t.id} t={t} />
            ))}
          />
        </div>
      </Container>
    </Section>
  );
}
