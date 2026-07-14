"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { contact } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp — opens with a pre-filled message"
      onClick={() => trackEvent("whatsapp_click", { location: "floating" })}
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-6 right-6 z-[150] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out-expo hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/60 animate-ping [animation-duration:2.5s]" aria-hidden />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm border border-hairline bg-charcoal px-3 py-2 font-mono text-xs text-bone opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
