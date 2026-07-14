# Mohamed Mamdouh — Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · shadcn/ui primitives

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

Note: `npm run build` fetches Fraunces, Inter, and JetBrains Mono from Google Fonts at build time via `next/font/google` — an internet connection is required during build (self-hosted automatically into the build output, no runtime request to Google).

## Before deploying

1. Update `siteUrl` in `src/app/layout.tsx` and `src/app/sitemap.ts` / `robots.ts` to your real domain.
2. Replace `public/photo.jpg`, `public/resume.pdf`, `public/pmp-certificate.png`, and `public/og-image.png` if you ever refresh these assets. Favicon/app-icon source lives at `src/app/icon.png` and `src/app/apple-icon.png`.
3. Deploy to Vercel, or any Node/static host that supports Next.js.

## Structure

- `src/app` — root layout (fonts, SEO metadata, JSON-LD), the single page, sitemap/robots
- `src/components` — one component per section, plus `ui/` (shadcn-style primitives: button, dialog, badge)
- `src/lib/data.ts` — all copy/content lives here, typed, separate from presentation
- `src/lib/utils.ts` — `cn()` class-merging helper

## Design decisions worth knowing about

- **Dark mode is the only mode**, applied via `class="dark"` on `<html>` — this is a deliberate editorial choice matching the brand, not a togglable theme.
- **WhatsApp brand green** (`#25D366`) is used only on WhatsApp-related buttons — an intentional exception to the ink/brass palette, since WhatsApp's recognizability depends on its brand color.
- **Glassmorphism** is used in exactly two places: the sticky nav and the PMP certificate card — kept rare on purpose.
- Case study copy contains no invented metrics — only what the résumé documents. If real numbers become available, update `src/lib/data.ts`.

## Analytics setup (paste your IDs here — nowhere else)

Copy `.env.example` to `.env.local` and fill in what you have. Everything is optional and additive — the site works with zero, one, two, or all three configured.

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX        # Google Analytics 4 Measurement ID
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx     # Microsoft Clarity Project ID
```

- **GA4**: create a property at analytics.google.com → Admin → Data Streams → your web stream → copy the "Measurement ID" (starts with `G-`).
- **Microsoft Clarity**: create a project at clarity.microsoft.com → Settings → Setup → copy the project ID from the tracking snippet URL.
- **Vercel Analytics**: no env var needed. Deploy this project to Vercel, then enable Analytics in the project's dashboard (Project → Analytics tab). It activates automatically — the `<Analytics />` component is already wired into `layout.tsx`.

Restart `npm run dev` (or redeploy) after editing `.env.local` for the values to take effect. Never commit `.env.local` — it's already in `.gitignore`.

### What's tracked

Defined in `src/lib/analytics.ts` and fired from the relevant components: `resume_download`, `whatsapp_click`, `linkedin_click`, `email_click`, `pmp_certificate_view`, `hero_cta_click`, `scroll_depth` (25/50/75/100%), `time_on_page` (fires on tab close/navigation). Each event also carries any UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`) present in the URL that started the session, captured in `captureUtmParams()` and persisted in `sessionStorage` for the visit.

To add a new tracked action anywhere in the app: `import { trackEvent } from "@/lib/analytics"` and call `trackEvent("event_name", { any: "extra data" })` from an `onClick`.

## Accessibility & performance notes

- Skip-to-content link, semantic landmarks, `aria-label`/`aria-labelledby` throughout, focus-visible states, `prefers-reduced-motion` respected in every animated component.
- All pages statically prerendered (`○ Static` in build output) for fast TTFB and strong Lighthouse scores.
- Images use `next/image` (photo, certificate) with explicit sizes; the hero photo is `priority`-loaded.
