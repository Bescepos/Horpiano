"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getIcon } from "@/lib/icons";
import { easePremium } from "./motion.config";

export interface TimelineStep {
  icon: string;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

/** Scroll-driven vertical journey timeline with a filling gold progress line. */
export function Timeline({ steps }: TimelineProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 55%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      {/* Track */}
      <div
        className="absolute left-[27px] top-2 bottom-2 w-px bg-navy-200 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-x-0 top-0 w-px origin-top bg-gold-gradient"
          style={{
            height: "100%",
            scaleY: reduce ? 1 : scaleY,
          }}
        />
      </div>

      <ol className="space-y-10 md:space-y-16">
        {steps.map((step, i) => {
          const Icon = getIcon(step.icon);
          const alignRight = i % 2 === 1;
          return (
            <li key={step.title} className="relative">
              <div
                className={[
                  "flex items-start gap-6 md:w-1/2",
                  alignRight
                    ? "md:ml-auto md:flex-row md:pl-12"
                    : "md:flex-row-reverse md:pr-12 md:text-right",
                ].join(" ")}
              >
                {/* Node */}
                <div className="relative z-10 shrink-0">
                  <motion.div
                    initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, ease: easePremium }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-300/50 bg-navy-900 text-gold-300 shadow-gold-glow"
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.55, ease: easePremium, delay: 0.05 }}
                  className="flex-1"
                >
                  <span className="font-serif text-sm font-semibold text-gold-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-serif text-xl text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-ink-muted">{step.description}</p>
                </motion.div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
