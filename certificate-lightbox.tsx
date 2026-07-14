"use client";

import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function CertificateLightbox({ children }: { children: ReactNode }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <DialogPrimitive.Root
      onOpenChange={(open) => {
        if (!open) setZoomed(false);
        if (open) trackEvent("pmp_certificate_view", { location: "lightbox" });
      }}
    >
      <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[220] bg-ink/95 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-0 z-[221] flex flex-col items-center justify-center p-4 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogPrimitive.Title className="sr-only">PMP® Certificate — full view</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Enlarged view of the PMP® certificate issued to Mohamed Mamdouh by the Project Management Institute.
            Select the certificate or the zoom control to magnify.
          </DialogPrimitive.Description>

          <div className="absolute right-5 top-5 z-10 flex gap-2">
            <button
              onClick={() => setZoomed((z) => !z)}
              aria-label={zoomed ? "Zoom out" : "Zoom in"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-charcoal/80 backdrop-blur-md transition-colors hover:border-brass hover:bg-brass/10"
            >
              {zoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
            </button>
            <DialogPrimitive.Close
              aria-label="Close"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-charcoal/80 backdrop-blur-md transition-colors hover:border-brass hover:bg-brass/10"
            >
              <X className="h-5 w-5" />
            </DialogPrimitive.Close>
          </div>

          <motion.div
            className="relative max-h-[85vh] max-w-[92vw] cursor-zoom-in overflow-auto rounded-md border border-hairline shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
            onClick={() => setZoomed((z) => !z)}
            animate={{ scale: zoomed ? 1.9 : 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ cursor: zoomed ? "zoom-out" : "zoom-in" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pmp-certificate.png"
              alt="PMP® Certificate awarded to Mohamed Mamdouh by the Project Management Institute, certification number 4450296"
              className="block max-h-[85vh] w-auto select-none"
              draggable={false}
            />
          </motion.div>

          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-fogdim">
            Select the certificate to zoom
          </p>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
