import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    _tfa?: Array<Record<string, unknown>>;
  }
}

/**
 * Fires a page_view on every client-side route change once the marketing
 * scripts (gtag / Meta Pixel) have been injected by App.tsx.
 */
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.search;

    window.gtag?.("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });

    window.fbq?.("track", "PageView");
  }, [location]);
};

export default usePageTracking;
