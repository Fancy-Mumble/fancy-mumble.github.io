import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import posthog from "posthog-js";
import { PostHogProvider } from "@posthog/react";

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_TOKEN, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: "2026-01-30",
  // Always on, consent-free: no cookies/localStorage, no IP stored.
  // Counts anonymous page visits only. ePrivacy Directive does not apply.
  persistence: "memory",
  disable_session_recording: true,
  person_profiles: "never",
  opt_out_capturing_by_default: false,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>,
);
