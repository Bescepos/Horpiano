"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { easePremium } from "@/components/motion/motion.config";

export interface AccordionItemData {
  id: string;
  question: ReactNode;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  type?: "single" | "multiple";
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({
  items,
  type = "single",
  defaultOpenId,
  className,
}: AccordionProps) {
  const reduce = useReducedMotion();
  const baseId = useId();
  const [open, setOpen] = useState<Set<string>>(
    new Set(defaultOpenId ? [defaultOpenId] : []),
  );

  const toggle = (id: string) => {
    setOpen((prev) => {
      const nextRaw = new Set(prev);
      const isOpen = nextRaw.has(id);
      if (type === "single") {
        nextRaw.clear();
        if (!isOpen) nextRaw.add(id);
      } else {
        if (isOpen) nextRaw.delete(id);
        else nextRaw.add(id);
      }
      return nextRaw;
    });
  };

  return (
    <div className={cn("divide-y divide-gray-line/80 rounded-2xl border border-gray-line/80 bg-white", className)}>
      {items.map((item) => {
        const isOpen = open.has(item.id);
        const headerId = `${baseId}-${item.id}-header`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-navy-50/50"
              >
                <span className="font-serif text-lg text-navy-900">{item.question}</span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-300/60 text-gold-600 transition-transform duration-300",
                    isOpen && "rotate-45 bg-gold-50",
                  )}
                  aria-hidden="true"
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: easePremium }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 text-ink-muted leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
