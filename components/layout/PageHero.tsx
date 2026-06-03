import type { ReactNode } from "react";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { GradientText } from "@/components/ui/GradientText";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  /** Phrase within the title to render in gold gradient (optional). */
  highlight?: string;
  subtitle?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  crumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
      <AuroraBackground />
      <div className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        {crumbs && (
          <Reveal variant="fade">
            <div className="mb-6 flex justify-center">
              <Breadcrumbs trail={crumbs} onDark />
            </div>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal variant="fade">
            <span className="eyebrow inline-flex items-center gap-3 text-gold-300">
              <span className="h-px w-8 bg-gold-gradient" aria-hidden="true" />
              {eyebrow}
              <span className="h-px w-8 bg-gold-gradient" aria-hidden="true" />
            </span>
          </Reveal>
        )}
        <Reveal variant="fade-up" delay={0.05}>
          <h1 className="mt-6 font-serif text-display-lg leading-tight text-white sm:text-display-xl">
            {title}
            {highlight && (
              <>
                {" "}
                <GradientText>{highlight}</GradientText>
              </>
            )}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal variant="fade-up" delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
              {subtitle}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal variant="fade-up" delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
