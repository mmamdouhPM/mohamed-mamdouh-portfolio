"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { contact } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="pt-[168px] pb-24 md:pt-[192px] md:pb-32">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <motion.div
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1.15fr_0.85fr] md:gap-12"
        >
          <div>
            <motion.p variants={item} className="eyebrow">
              Software Project Manager
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display text-[2.75rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              Mohamed
              <br />
              Mamdouh
            </motion.h1>
            <motion.p variants={item} className="mt-4 flex items-center gap-2 font-mono text-base text-brass">
              <span className="h-px w-6 bg-brass" aria-hidden />
              PMP® Certified · Project Management Institute
            </motion.p>
            <motion.p variants={item} className="mt-8 max-w-[44ch] text-lg text-bone sm:text-xl leading-relaxed">
              I&apos;ve sat in the design chair, the marketing chair, and the operations chair — now I run the room
              where all three have to{" "}
              <em className="font-display italic text-brass-bright font-normal">agree</em>
              .
            </motion.p>
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <Button asChild className="bg-[#25D366] text-ink hover:bg-[#2be07a] hover:shadow-[0_0_0_1px_rgba(37,211,102,0.4),0_12px_24px_rgba(37,211,102,0.18)]">
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent("whatsapp_click", { location: "hero" });
                    trackEvent("hero_cta_click", { cta: "whatsapp" });
                  }}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                onClick={() => trackEvent("hero_cta_click", { cta: "view_work" })}
              >
                <a href="#work">View Work</a>
              </Button>
            </motion.div>
            <motion.div variants={item} className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="/resume.pdf"
                download="Mohamed_Mamdouh_Resume.pdf"
                onClick={() => trackEvent("resume_download", { location: "hero" })}
                className="group relative w-fit pb-1 font-mono text-xs uppercase tracking-wider text-fog transition-colors hover:text-brass-bright"
              >
                Download Résumé
                <span className="absolute bottom-0 left-0 h-px w-0 bg-brass transition-all duration-300 ease-out-expo group-hover:w-full" />
              </a>
              <a
                href="#pmp-certification"
                className="group relative w-fit pb-1 font-mono text-xs uppercase tracking-wider text-fog transition-colors hover:text-brass-bright"
              >
                View PMP® Certificate
                <span className="absolute bottom-0 left-0 h-px w-0 bg-brass transition-all duration-300 ease-out-expo group-hover:w-full" />
              </a>
            </motion.div>
            <motion.div
              variants={item}
              className="mt-16 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fogdim"
            >
              <span className="h-px w-8 bg-fogdim animate-pulse-line" aria-hidden />
              Scroll to explore
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-lg border border-hairline"
          >
            <Image
              src="/photo.jpg"
              alt="Portrait of Mohamed Mamdouh, PMP® certified Software Project Manager"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover grayscale contrast-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/85" />
            <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between font-mono text-xs uppercase tracking-wider text-fog">
              <span>Cairo, Egypt</span>
              <span className="text-brass">PMP®</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
