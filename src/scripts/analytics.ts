// Google Analytics 4. The measurement ID comes from .env.production, so dev builds send nothing.
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initAnalytics(): void {
  if (!import.meta.env.PROD || !MEASUREMENT_ID) return;

  window.dataLayer = window.dataLayer || [];
  // gtag.js expects the real `arguments` object, not an array.
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.append(script);
}

/** Sends a custom GA4 event; a no-op when analytics is not loaded. */
export function trackEvent(name: string, params: Record<string, string | number> = {}): void {
  window.gtag?.('event', name, params);
}
