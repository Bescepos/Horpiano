import { Star } from "lucide-react";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { BookCoverMock } from "@/components/art/BookCoverMock";
import { GlassCard } from "@/components/ui/GlassCard";

const avatars = ["EH", "MB", "PN", "DO", "SL"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
      <AuroraBackground />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Copy */}
        <div>
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
              Premium Author Services
            </span>
          </Reveal>

          <Reveal variant="fade-up" delay={0.05}>
            <h1 className="mt-6 font-serif text-display-lg leading-[1.05] text-white text-shadow-soft sm:text-display-xl lg:text-display-2xl">
              Transform Your Manuscript Into a{" "}
              <GradientText>Published Success Story</GradientText>
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
              Professional editing, ghostwriting, publishing, branding, marketing, and
              author development services designed to help writers succeed.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/consultation" size="lg">
                Book a Consultation
              </Button>
              <Button href="/services" variant="secondary-dark" size="lg">
                Explore Services
              </Button>
            </div>
          </Reveal>

          <Reveal variant="fade" delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <div className="flex -space-x-3">
                {avatars.map((a, i) => (
                  <span
                    key={a}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy-900 bg-gradient-to-br from-navy-500 to-navy-700 text-xs font-semibold text-gold-200"
                    style={{ zIndex: avatars.length - i }}
                  >
                    {a}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold-400" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-navy-200">
                  Trusted by 2,000+ authors worldwide
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal variant="scale" delay={0.2} className="relative hidden lg:block">
          <div className="relative mx-auto h-[30rem] w-full max-w-md">
            <div className="absolute left-2 top-6 w-44 rotate-[-8deg] animate-float-slow">
              <BookCoverMock
                title="The Quiet Tide"
                author="Eleanor Hayes"
                from="#1E3354"
                to="#0A1320"
              />
            </div>
            <div className="absolute right-2 top-0 w-48 rotate-[6deg] animate-float">
              <BookCoverMock
                title="Ember & Ash"
                author="Amara Stone"
                from="#27416A"
                to="#C8992E"
              />
            </div>
            <div className="absolute bottom-2 left-1/2 w-44 -translate-x-1/2 rotate-[-2deg] animate-float-slow">
              <BookCoverMock
                title="Build to Lead"
                author="Marcus Bell"
                from="#A87C20"
                to="#43320F"
              />
            </div>

            <GlassCard className="absolute -bottom-2 -right-4 max-w-[12rem] p-4" intensity="strong">
              <p className="font-serif text-3xl text-white">98%</p>
              <p className="mt-1 text-xs text-navy-100">
                Client satisfaction across every project
              </p>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
