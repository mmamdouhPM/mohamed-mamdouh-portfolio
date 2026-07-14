"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Search, ClipboardList, Calculator, PlayCircle, CheckCircle2, Rocket, Handshake, LifeBuoy } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { processSteps } from "@/lib/data";

const iconMap = {
  Search, ClipboardList, Calculator, PlayCircle, CheckCircle2, Rocket, Handshake, LifeBuoy,
} as const;

export function Methodology() {
  const lineRef = useRef(null);
  const inView = useInView(lineRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="methodology" aria-labelledby="method-heading" className="py-24 md:py-40">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <Reveal className="mb-16 max-w-[62ch]">
          <p className="eyebrow">Method</p>
          <h2 id="method-heading" className="font-display text-3xl font-medium sm:text-4xl">
            How I Manage Projects
          </h2>
          <p className="mt-4 text-lg text-fog">
            Eight stages, one continuous thread of ownership — from the first discovery call to long after
            launch day.
          </p>
        </Reveal>

        <div ref={lineRef} className="relative pl-2">
          <div className="absolute left-[23px] top-2 bottom-2 w-px bg-hairline" aria-hidden />
          <motion.div
            className="absolute left-[23px] top-2 w-px bg-brass"
            style={{ height: "0%" }}
            animate={{ height: inView || shouldReduceMotion ? "97%" : "0%" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          />
          <ol className="space-y-10">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <motion.li
                  key={step.index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex items-start gap-6"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-hairline bg-charcoal text-fog transition-all duration-300 ease-out-expo group-hover:border-brass group-hover:bg-brass/10 group-hover:text-brass group-hover:shadow-[0_0_0_4px_rgba(201,151,63,0.08)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="pt-1.5">
                    <div className="font-mono text-xs text-brass">{step.index}</div>
                    <h3 className="mt-1 font-display text-lg text-bone sm:text-xl">{step.phase}</h3>
                    <p className="mt-1 max-w-[56ch] text-sm text-fog">{step.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
