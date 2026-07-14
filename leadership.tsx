import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { teamComposition } from "@/lib/data";

export function Leadership() {
  return (
    <section id="leadership" aria-labelledby="leadership-heading" className="py-24 md:py-40">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <Reveal className="max-w-[720px]">
          <p className="eyebrow">Leadership</p>
          <h2 id="leadership-heading" className="font-display text-3xl font-medium sm:text-4xl">
            Coordinating people who don&apos;t report to me.
          </h2>
          <p className="mt-4 text-lg text-fog">
            Every project runs through a team I don&apos;t manage on paper — I earn alignment through structure, not
            authority.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Teams coordinated">
            {teamComposition.map((t) => (
              <li key={t}>
                <Badge className="rounded-full px-4 py-2 text-fog transition-colors hover:border-brass/40 hover:text-brass">
                  {t}
                </Badge>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[62ch] text-fog">
            Alignment meetings run with clear agendas by design — the goal is fewer meetings that actually decide
            things, not more meetings that discuss them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
