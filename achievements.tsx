import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { CertificateLightbox } from "@/components/certificate-lightbox";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" aria-label="Career highlights" className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-4">
            {achievements.map((a) => (
              <div
                key={a.label}
                className="group flex flex-col gap-2 bg-charcoal px-6 py-10 transition-all duration-300 ease-out-expo hover:z-10 hover:-translate-y-1 hover:scale-[1.03] hover:border hover:border-brass/40 hover:bg-charcoal2 hover:shadow-[0_16px_40px_rgba(201,151,63,0.1)]"
              >
                <span className="font-display text-5xl font-medium leading-none tracking-tight text-bone transition-colors duration-300 group-hover:text-brass-bright sm:text-6xl">
                  <CountUp value={a.value} suffix={a.suffix} />
                </span>
                <span className="text-sm text-fog">{a.label}</span>
              </div>
            ))}

            <CertificateLightbox>
              <button
                aria-label="View PMP® certificate"
                className="group flex flex-col justify-center gap-2 bg-gradient-to-br from-brass/[0.14] to-brass/[0.03] px-6 py-10 text-left transition-all duration-300 ease-out-expo hover:z-10 hover:-translate-y-1 hover:scale-[1.03] hover:border hover:border-brass/60 hover:shadow-[0_16px_40px_rgba(201,151,63,0.18)]"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-brass">Credential · Tap to view</span>
                <span className="font-display text-3xl font-medium text-brass-bright transition-transform duration-300 group-hover:scale-105 sm:text-4xl">
                  PMP®
                </span>
                <span className="text-sm text-fog">Project Management Institute</span>
              </button>
            </CertificateLightbox>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
