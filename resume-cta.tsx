"use client";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export function ResumeCta() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-lg border border-hairline bg-gradient-to-br from-brass/[0.05] to-transparent p-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 id="resume-heading" className="font-display text-xl sm:text-2xl">
                Prefer the short version?
              </h3>
              <p className="mt-2 text-fog">The full résumé, PMP®-certified and ATS-formatted, in one PDF.</p>
            </div>
            <Button asChild onClick={() => trackEvent("resume_download", { location: "resume_section" })}>
              <a href="/resume.pdf" download="Mohamed_Mamdouh_Resume.pdf">
                Download PDF
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
