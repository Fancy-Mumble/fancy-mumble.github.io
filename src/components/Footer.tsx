const CURRENT_YEAR = new Date().getFullYear();

const FOOTER_SECTIONS = [
  {
    title: "Project",
    links: [
      { label: "GitHub", href: "https://github.com/Fancy-Mumble/FancyMumbleNext" },
      { label: "Releases", href: "https://github.com/Fancy-Mumble/FancyMumbleNext/releases" },
      { label: "Contributing", href: "https://github.com/Fancy-Mumble/FancyMumbleNext/blob/main/.github/CONTRIBUTING.md" },
      { label: "Code of Conduct", href: "https://github.com/Fancy-Mumble/FancyMumbleNext/blob/main/CODE_OF_CONDUCT.md" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://github.com/Fancy-Mumble/FancyMumbleNext#readme" },
      { label: "Issue Tracker", href: "https://github.com/Fancy-Mumble/FancyMumbleNext/issues" },
      { label: "Mumble Protocol", href: "https://mumble-protocol.readthedocs.io/" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Mumble Server", href: "mumble://magical.rocks:64738" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "MIT License", href: "https://github.com/Fancy-Mumble/FancyMumbleNext/blob/main/LICENSE" },
      { label: "Security Policy", href: "https://github.com/Fancy-Mumble/FancyMumbleNext/security" },
      { label: "Imprint", href: "https://privacy.magical.rocks/" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="footer__column">
              <h4 className="footer__column-title">{section.title}</h4>
              <ul className="footer__list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {CURRENT_YEAR} Fancy Mumble contributors. Licensed under the{" "}
            <a
              href="https://github.com/Fancy-Mumble/FancyMumbleNext/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              MIT License
            </a>
            .
          </p>
          <p className="footer__note">
            Fancy Mumble is an open-source Mumble VoIP client and a free
            alternative to proprietary voice chat. Not affiliated with the
            official Mumble project.
          </p>
        </div>
      </div>
    </footer>
  );
}
