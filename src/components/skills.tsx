import { Reveal } from "@/components/reveal";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 md:py-40">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <Reveal className="mb-16">
          <p className="eyebrow">Capabilities</p>
          <h2 id="skills-heading" className="font-display text-3xl font-medium sm:text-4xl">
            What I bring to a team.
          </h2>
        </Reveal>
        <Reveal>
          <dl>
            {skills.map((s) => (
              <div
                key={s.category}
                className="grid grid-cols-1 gap-3 border-b border-hairline/60 py-8 last:border-none md:grid-cols-[200px_1fr] md:items-start md:gap-8"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-brass">{s.category}</dt>
                <dd className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-xs border border-hairline px-3 py-1.5 text-sm text-fog">
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 font-mono text-sm text-fogdim">Native Arabic · Fluent English</p>
        </Reveal>
      </div>
    </section>
  );
}
