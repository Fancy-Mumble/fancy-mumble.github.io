import { Section } from "./Section";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { Icon, faDownload } from "./Icons";
import {
  useReleaseLinks,
  detectPlatform,
  platformLabel,
  RELEASES_PAGE,
} from "../hooks/useReleaseLinks";

export function Hero() {
  const links = useReleaseLinks();
  const platform = detectPlatform();
  const label = platformLabel(platform);
  const href = (platform && links[platform]) ?? RELEASES_PAGE;

  return (
    <Section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__split">
        <div className="hero__content">
          <div className="hero__badges">
            <Badge label="Open Source" icon="📖" />
            <Badge label="MIT License" />
            <Badge label="Cross-Platform" />
          </div>

          <h1 className="hero__title">
            The modern Mumble VoIP client.{" "}
            <span className="hero__title--accent">Voice chat that respects your privacy.</span>
          </h1>

          <p className="hero__subtitle">
            Fancy Mumble is an open-source Mumble client with crystal-clear
            VoIP, a sleek UI, rich chat, and profile customisation —
            cross-platform &amp; free forever.
          </p>

          <div className="hero__actions">
            <Button variant="primary" size="lg" href={href}>
              <Icon icon={faDownload} size="sm" />{" "}
              {label ? `Download for ${label}` : "Download Now"}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="https://github.com/Fancy-Mumble/FancyMumbleNext"
            >
              View on GitHub
            </Button>
          </div>

          <p className="hero__platforms">
            Windows, Linux &amp; Android
          </p>
        </div>

        <div className="hero__visual">
          <MediaPlaceholder
            src="/assets/main_window.png"
            alt="Fancy Mumble VoIP client main window showing Mumble channel list and voice chat"
          />
        </div>
      </div>
    </Section>
  );
}
