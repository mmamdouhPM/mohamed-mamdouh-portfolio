"use client";

import { contact } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-hairline/60 py-12">
      <div className="max-w-container mx-auto flex flex-col items-center justify-between gap-6 px-6 sm:flex-row md:px-16">
        <p className="text-sm text-fogdim">© {new Date().getFullYear()} Mohamed Mamdouh. Built for the next project.</p>
        <nav aria-label="Footer" className="flex gap-6">
          <a
            href={`mailto:${contact.email}`}
            onClick={() => trackEvent("email_click", { location: "footer" })}
            className="text-sm text-fog transition-colors hover:text-brass"
          >
            Email
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("linkedin_click", { location: "footer" })}
            className="text-sm text-fog transition-colors hover:text-brass"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download="Mohamed_Mamdouh_Resume.pdf"
            onClick={() => trackEvent("resume_download", { location: "footer" })}
            className="text-sm text-fog transition-colors hover:text-brass"
          >
            Résumé
          </a>
        </nav>
      </div>
    </footer>
  );
}
