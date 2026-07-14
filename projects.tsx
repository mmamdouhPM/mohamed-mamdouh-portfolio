"use client";

import { ArrowUpRight, Users, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 md:py-40">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <Reveal className="mb-16 max-w-[62ch]">
          <p className="eyebrow">Selected Work</p>
          <h2 id="work-heading" className="font-display text-3xl font-medium sm:text-4xl">
            Case studies from the field.
          </h2>
          <p className="mt-4 text-lg text-fog">
            Six delivery engagements across corporate, e-commerce, and dashboard products. Select any card for the
            full breakdown.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <Dialog key={p.slug}>
                <DialogTrigger asChild>
                  <button className="group flex flex-col gap-4 rounded-md border border-hairline bg-charcoal p-8 text-left transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:scale-[1.012] hover:border-brass/40 hover:shadow-[0_16px_32px_rgba(0,0,0,0.4)] focus-visible:-translate-y-0.5">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-display text-xl sm:text-2xl">{p.name}</div>
                        <div className="mt-1 font-mono text-[0.6875rem] uppercase tracking-wider text-fogdim">
                          {p.type}
                        </div>
                      </div>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline transition-all duration-300 ease-out-expo group-hover:rotate-45 group-hover:border-brass group-hover:bg-brass/10">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <p className="text-sm text-fog">{p.outcome}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-2">
                      {p.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>
                    {p.name} — {p.type}
                  </DialogTitle>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 rounded-md border border-hairline/60 bg-ink/40 p-4 sm:grid-cols-2">
                      <div>
                        <p className="eyebrow mb-1">Role</p>
                        <p className="text-sm text-bone">{p.role}</p>
                      </div>
                      <div>
                        <p className="eyebrow mb-1">
                          <Users className="mr-1 inline h-3 w-3" aria-hidden />
                          Team Size
                        </p>
                        <p className="text-sm text-bone">{p.teamSize}</p>
                      </div>
                    </div>
                    <div>
                      <p className="eyebrow">Challenge</p>
                      <p className="text-bone">{p.challenge}</p>
                    </div>
                    <div>
                      <p className="eyebrow">Solution</p>
                      <p className="text-bone">{p.approach}</p>
                    </div>
                    <div>
                      <p className="eyebrow">Outcome</p>
                      <p className="text-bone">{p.outcomeFull}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-2">
                        <Wrench className="mr-1 inline h-3 w-3" aria-hidden />
                        Technologies &amp; Tools
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.tools.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 border-t border-hairline/60 pt-4">
                      {p.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
