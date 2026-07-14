"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/lib/use-active-section";
import { trackEvent } from "@/lib/analytics";

const links = [
  { href: "#work", label: "Work", id: "work" },
  { href: "#journey", label: "Story", id: "journey" },
  { href: "#methodology", label: "Process", id: "methodology" },
  { href: "#timeline", label: "Experience", id: "timeline" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#pmp-certification", label: "Certificate", id: "pmp-certification" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const sectionIds = ["hero", ...links.map((l) => l.id)];

export function Nav() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-hairline/60 bg-ink/72 backdrop-blur-2xl">
      <div className="max-w-container mx-auto flex items-center justify-between px-6 py-[18px] md:px-16">
        <a
          href="#hero"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-hairline font-mono text-sm text-brass transition-all duration-300 ease-out-expo hover:border-brass hover:bg-brass/10 hover:scale-105"
        >
          MM
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative pb-1 text-sm transition-colors duration-300 ${
                  isActive ? "text-brass" : "text-fog hover:text-bone"
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-brass transition-all duration-300 ease-out-expo ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => trackEvent("resume_download", { location: "nav" })}
          >
            <a href="/resume.pdf" download="Mohamed_Mamdouh_Resume.pdf">
              Résumé
            </a>
          </Button>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-[38px] w-[38px] flex-col items-center justify-center gap-[5px] rounded-sm border border-hairline transition-colors hover:border-brass/40 lg:hidden"
          >
            <span
              className={`h-px w-4 bg-bone transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`h-px w-4 bg-bone transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-4 bg-bone transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[75px] z-[90] flex flex-col gap-4 overflow-y-auto bg-ink/98 px-6 py-12 backdrop-blur-2xl lg:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`border-b border-hairline/60 py-2 font-display text-xl transition-colors ${
                  activeId === l.id ? "text-brass" : "text-bone"
                }`}
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-4 w-fit">
              <a
                href="/resume.pdf"
                download="Mohamed_Mamdouh_Resume.pdf"
                onClick={() => {
                  trackEvent("resume_download", { location: "nav_mobile" });
                  setOpen(false);
                }}
              >
                Download Résumé
              </a>
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
