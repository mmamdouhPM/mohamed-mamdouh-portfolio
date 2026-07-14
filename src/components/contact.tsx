"use client";

import { Mail, Linkedin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { contact } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

const secondaryCards = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}`, event: "email_click" as const },
  { icon: Linkedin, label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin, event: "linkedin_click" as const },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 md:py-40">
      <div className="max-w-container mx-auto px-6 md:px-16">
        <Reveal className="mb-16">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading" className="font-display text-3xl font-medium sm:text-4xl">
            Let&apos;s talk about your project.
          </h2>
        </Reveal>

        <Reveal className="mb-6">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "contact" })}
            className="group flex flex-col items-start justify-between gap-6 rounded-lg border border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/[0.08] to-transparent p-8 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-[#25D366]/60 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-ink">
                <WhatsAppIcon className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-[#25D366]">
                  Primary · Fastest response
                </span>
                <div className="font-display text-xl text-bone sm:text-2xl">Message me on WhatsApp</div>
              </div>
            </div>
            <span className="font-mono text-sm text-fog transition-colors group-hover:text-bone">
              {contact.whatsappNumber} →
            </span>
          </a>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {secondaryCards.map(({ icon: Icon, label, value, href, event }) => (
              <a
                key={label}
                href={href}
                target={label === "LinkedIn" ? "_blank" : undefined}
                rel={label === "LinkedIn" ? "noopener noreferrer" : undefined}
                onClick={() => trackEvent(event, { location: "contact" })}
                className="group flex flex-col gap-3 rounded-md border border-hairline p-8 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-brass/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-brass">
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </div>
                <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-fogdim">{label}</span>
                <span className="font-display text-lg break-words">{value}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
