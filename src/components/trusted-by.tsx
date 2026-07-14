import { Reveal } from "@/components/reveal";
import { trustedBy } from "@/lib/data";

export function TrustedBy() {
  return (
    <section id="trusted" aria-label="Companies delivered for" className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <Reveal>
          <p className="eyebrow">Delivered For</p>
          <ul className="mt-6 flex flex-wrap items-center justify-between gap-x-12 gap-y-4">
            {trustedBy.map((name) => (
              <li
                key={name}
                className="font-display text-xl italic text-fogdim transition-colors duration-300 hover:text-bone"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
