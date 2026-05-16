import { useState, useEffect } from "react";
import posthog from "posthog-js";

const STORAGE_KEY = "cookie_consent";

type ConsentState = "accepted" | "declined" | null;

function getStoredConsent(): ConsentState {
  try {
    return localStorage.getItem(STORAGE_KEY) as ConsentState;
  } catch {
    return null;
  }
}

// Upgrade PostHog from anonymous memory-only mode to full persistent tracking.
function enableFullTracking() {
  posthog.set_config({
    persistence: "localStorage+cookie",
    person_profiles: "identified_only",
  });
  posthog.capture("$pageview");
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === "accepted") {
      enableFullTracking();
    } else if (stored === null) {
      setVisible(true);
    }
    // "declined": stay in anonymous memory-only mode - no action needed
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    enableFullTracking();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          We use analytics cookies to understand how visitors use this site.
          No personal data is sold or shared with third parties.{" "}
          <a className="cookie-banner__link" href="/privacy.html" target="_blank" rel="noopener noreferrer">
            Privacy policy
          </a>
        </p>
        <div className="cookie-banner__actions">
          <button className="cookie-banner__btn cookie-banner__btn--decline" onClick={decline}>
            Decline
          </button>
          <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={accept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
