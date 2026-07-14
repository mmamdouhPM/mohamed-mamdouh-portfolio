"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEvent =
  | "resume_download"
  | "whatsapp_click"
  | "linkedin_click"
  | "email_click"
  | "pmp_certificate_view"
  | "hero_cta_click"
  | "scroll_depth"
  | "time_on_page";

/**
 * Fires an event to whichever analytics providers are configured.
 * Every provider call is guarded — if an ID isn't set via env vars, or the
 * provider's script hasn't loaded, this is a safe no-op.
 */
export function trackEvent(event: AnalyticsEvent, params: Record<string, unknown> = {}) {
  const payload = { ...params, ...getStoredUtm() };

  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", event, payload);
  }

  // Microsoft Clarity — custom tags/events
  if (window.clarity) {
    window.clarity("event", event);
    Object.entries(payload).forEach(([key, value]) => {
      if (value != null) window.clarity?.("set", key, String(value));
    });
  }

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, payload);
  }
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const UTM_STORAGE_KEY = "mm_portfolio_utm";

/** Reads UTM params from the current URL (if present) and persists them for later conversion events. */
export function captureUtmParams() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found: Record<string, string> = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) found[key] = value;
  });
  if (Object.keys(found).length > 0) {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
  }
}

function getStoredUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
