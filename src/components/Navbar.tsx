import { useState } from "react";
import { Button } from "./Button";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Download", href: "#download" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

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
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            size="md"
            href="https://github.com/Fancy-Mumble/FancyMumbleNext/releases/latest"
            className="navbar__cta"
          >
            Download
          </Button>
        </div>
      </div>
    </nav>
  );
}
