import { useState, useEffect } from "react";

const API_URL =
  "https://api.github.com/repos/Fancy-Mumble/FancyMumbleNext/releases/latest";
export const RELEASES_PAGE =
  "https://github.com/Fancy-Mumble/FancyMumbleNext/releases/latest";

export interface PlatformLinks {
  windows?: string;
  linux?: string;
  linuxDeb?: string;
  android?: string;
}

export type PlatformKey = keyof PlatformLinks;

interface Asset {
  name: string;
  browser_download_url: string;
}

function matchAssets(assets: Asset[]): PlatformLinks {
  const links: PlatformLinks = {};
  for (const a of assets) {
    const name = a.name.toLowerCase();
    if (name.endsWith("_x64-setup.exe"))
      links.windows = a.browser_download_url;
    else if (name.endsWith("_amd64.appimage"))
      links.linux = a.browser_download_url;
    else if (name.endsWith("_amd64.deb"))
      links.linuxDeb = a.browser_download_url;
    else if (name === "app-universal-release.apk")
      links.android = a.browser_download_url;
  }
  return links;
}

export function detectPlatform(): PlatformKey | null {
  const ua = navigator.userAgent.toLowerCase();
  if (/android/.test(ua)) return "android";
  if (/win/.test(ua)) return "windows";
  if (/linux/.test(ua)) return "linux";
  return null;
}

const PLATFORM_LABELS: Record<PlatformKey, string> = {
  windows: "Windows",
  linux: "Linux",
  linuxDeb: "Linux",
  android: "Android",
};

export function platformLabel(key: PlatformKey | null): string | null {
  return key ? PLATFORM_LABELS[key] : null;
}

export function useReleaseLinks() {
  const [links, setLinks] = useState<PlatformLinks>({});

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.assets)) setLinks(matchAssets(data.assets));
      })
      .catch(() => {});
  }, []);

  return links;
}
