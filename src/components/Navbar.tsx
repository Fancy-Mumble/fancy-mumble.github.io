import { useState } from "react";
import { Button } from "./Button";
import { usePostHog } from "@posthog/react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Download", href: "#download" },
  { label: "Docs", href: "http://docs.fancy-mumble.com/" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const posthog = usePostHog();

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__brand">
          <span className="navbar__logo" aria-hidden="true">💎</span>
          <span className="navbar__name">Fancy Mumble</span>
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className={`navbar__hamburger ${open ? "navbar__hamburger--open" : ""}`} />
        </button>

        <div className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => {
                setOpen(false);
                posthog?.capture("nav_link_clicked", { label: link.label, href: link.href });
              }}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            size="md"
            href="https://github.com/Fancy-Mumble/FancyMumbleNext/releases/latest"
            className="navbar__cta"
            onClick={() =>
              posthog?.capture("download_clicked", {
                platform: "unknown",
                location: "navbar",
                label: "Download",
              })
            }
          >
            Download
          </Button>
        </div>
      </div>
    </nav>
  );
}
