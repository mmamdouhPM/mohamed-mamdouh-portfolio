import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CertificateLightbox } from "@/components/certificate-lightbox";

export function PmpCertification() {
  return (
    <section id="pmp-certification" aria-labelledby="pmp-heading" className="py-24 md:py-40">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Credential</p>
            <h2 id="pmp-heading" className="font-display text-3xl font-medium sm:text-4xl">
              PMP® Certification
            </h2>
            <p className="mt-4 max-w-[52ch] text-lg text-fog">
              I am PMP® — Project Management Professional — certified by the Project Management Institute (PMI),
              the global standard for demonstrated experience, knowledge, and performance in leading projects.
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-sm text-brass">
              <BadgeCheck className="h-5 w-5" aria-hidden />
              Certification No. 4450296 · Valid through July 2029
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <CertificateLightbox>
              <button
                aria-label="Open full-screen view of the PMP® certificate"
                className="group relative w-full overflow-hidden rounded-lg border border-hairline/80 bg-white/[0.04] p-3 backdrop-blur-xl transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-brass/40 hover:shadow-[0_20px_48px_rgba(201,151,63,0.1)] sm:p-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(201,151,63,0.04))",
                }}
              >
                <div className="relative overflow-hidden rounded-md">
                  <Image
                    src="/pmp-certificate.png"
                    alt="PMP® Certificate awarded to Mohamed Mamdouh by the Project Management Institute"
                    width={1200}
                    height={840}
                    className="w-full rounded-md transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <span className="mt-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-fog transition-colors group-hover:text-brass">
                  View Full Certificate
                </span>
              </button>
            </CertificateLightbox>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
