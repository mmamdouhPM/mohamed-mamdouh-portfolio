import { Reveal } from "@/components/reveal";
import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <section id="timeline" aria-labelledby="timeline-heading" className="py-24 md:py-40">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <Reveal className="mb-16">
          <p className="eyebrow">Experience</p>
          <h2 id="timeline-heading" className="font-display text-3xl font-medium sm:text-4xl">
            The record, in order.
          </h2>
        </Reveal>
        <Reveal>
          <ol className="relative border-l border-hairline pl-10">
            {timeline.map((t, i) => (
              <li key={i} className="group relative pb-10 last:pb-0">
                <span className="absolute -left-[45px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-fogdim bg-ink transition-colors duration-300 group-hover:border-brass group-hover:bg-brass" />
                <div className="font-mono text-xs text-brass">{t.years}</div>
                <div className="mt-1 font-display text-lg text-bone">{t.role}</div>
                <div className="text-sm text-fog">{t.org}</div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
