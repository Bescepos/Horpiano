import { Reveal } from "@/components/motion/Reveal";
import type { ProcessStep } from "@/lib/types";

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="relative mx-auto max-w-3xl">
      <div
        className="absolute left-[1.45rem] top-3 bottom-3 w-px bg-gray-line"
        aria-hidden="true"
      />
      {steps.map((step, i) => (
        <li key={step.step} className="relative pb-10 last:pb-0">
          <Reveal variant="fade-up" delay={i * 0.05}>
            <div className="flex gap-6">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-300/60 bg-white font-serif text-lg font-semibold text-gold-700 shadow-soft">
                {String(step.step).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-serif text-xl text-navy-900">{step.title}</h3>
                  {step.durationLabel && (
                    <span className="rounded-pill bg-navy-50 px-3 py-0.5 text-xs font-medium text-navy-600">
                      {step.durationLabel}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-ink-muted">{step.description}</p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
