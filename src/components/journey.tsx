"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { journeyNodes } from "@/lib/data";

export function Journey() {
  const pathRef = useRef(null);
  const inView = useInView(pathRef, { once: true, amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="journey" aria-labelledby="journey-heading" className="py-24 md:py-40">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <Reveal className="max-w-[62ch]">
          <p className="eyebrow">The Bridge</p>
          <h2 id="journey-heading" className="font-display text-3xl font-medium sm:text-4xl">
            Four disciplines, one operator.
          </h2>
          <p className="mt-4 text-lg text-fog">
            Most project managers arrive at delivery from one direction. I arrived from four — which means when a
            developer, a designer, a marketer, or a client pushes back, I&apos;ve usually stood exactly where
            they&apos;re standing.
          </p>
        </Reveal>

        <div ref={pathRef} className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          <div className="absolute left-[6%] right-[6%] top-[19px] hidden h-px bg-hairline lg:block" aria-hidden />
          <motion.div
            className="absolute left-[6%] top-[19px] hidden h-px bg-brass lg:block"
            initial={{ width: "0%" }}
            animate={{ width: inView || shouldReduceMotion ? "88%" : "0%" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          />
          {journeyNodes.map((n) => (
            <div key={n.index} tabIndex={0} className="group relative z-10 flex flex-col items-center text-center">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-charcoal font-mono text-xs text-fog transition-colors duration-300 group-hover:border-brass group-hover:bg-brass/10 group-hover:text-brass group-focus-visible:border-brass group-focus-visible:bg-brass/10 group-focus-visible:text-brass">
                {n.index}
              </div>
              <div className="mb-1.5 font-display text-lg text-bone">{n.label}</div>
              <div className="mb-2 font-mono text-[0.6875rem] text-fogdim">{n.years}</div>
              <p className="max-w-[22ch] text-sm text-fog opacity-100 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-300 lg:group-hover:max-h-24 lg:group-hover:opacity-100 lg:group-focus-visible:max-h-24 lg:group-focus-visible:opacity-100">
                {n.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
