import type { ReactNode } from "react";
import { Section, SectionHeading } from "./Section";
import { GlassCard } from "./GlassCard";
import { Button } from "./Button";
import { Icon, faWindows, faLinux, faAndroid } from "./Icons";
import {
  useReleaseLinks,
  RELEASES_PAGE,
  type PlatformKey,
} from "../hooks/useReleaseLinks";

interface DownloadOption {
  key: PlatformKey;
  label: string;
}

interface Platform {
  name: string;
  icon: ReactNode;
  description: string;
  formats: string;
  downloads: DownloadOption[];
}

const PLATFORMS: Platform[] = [
  {
    name: "Windows",
    icon: <Icon icon={faWindows} size="2x" />,
    description: "Windows 10+ (64-bit)",
    formats: "Setup .exe installer",
    downloads: [{ key: "windows", label: "Download for Windows" }],
  },
  {
    name: "Linux",
    icon: <Icon icon={faLinux} size="2x" />,
    description: "Ubuntu / Debian-based",
    formats: ".deb & .AppImage",
    downloads: [
      { key: "linux", label: "Download .AppImage" },
      { key: "linuxDeb", label: "Download .deb" },
    ],
  },
  {
    name: "Android",
    icon: <Icon icon={faAndroid} size="2x" />,
    description: "Android 8.0+",
    formats: "Universal .apk",
    downloads: [{ key: "android", label: "Download for Android" }],
  },
];

export function Downloads() {
  const links = useReleaseLinks();

  return (
    <Section id="download">
      <SectionHeading
        title="Get Fancy Mumble"
        subtitle="Download the latest release for your platform."
      />
      <div className="downloads-grid">
        {PLATFORMS.map((p) => (
          <GlassCard key={p.name} className="download-card">
            <div className="download-card__icon" aria-hidden="true">
              {p.icon}
            </div>
            <h3 className="download-card__name">{p.name}</h3>
            <p className="download-card__desc">{p.description}</p>
            <p className="download-card__formats">{p.formats}</p>
            <div className="download-card__buttons">
              {p.downloads.map((d, i) => (
                <Button
                  key={d.key}
                  variant={i === p.downloads.length - 1 ? "primary" : "secondary"}
                  size="md"
                  href={links[d.key] ?? RELEASES_PAGE}
                >
                  {d.label}
                </Button>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
