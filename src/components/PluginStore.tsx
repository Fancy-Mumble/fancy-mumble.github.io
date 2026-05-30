import { Section, SectionHeading } from "./Section";
import { GlassCard } from "./GlassCard";
import { Button } from "./Button";
import { Icon, faPuzzlePiece } from "./Icons";
import { usePostHog } from "@posthog/react";

export function PluginStore() {
  const posthog = usePostHog();

  return (
    <Section id="plugins">
      <SectionHeading
        title="Plugin Store"
        subtitle="Extend Fancy Mumble with community-built, Rust-powered server plugins."
      />
      <GlassCard className="server-card">
        <div className="server-card__icon" aria-hidden="true">
          <Icon icon={faPuzzlePiece} size="2x" />
        </div>
        <div className="server-card__content">
          <h3 className="server-card__title">Fancy Mumble Plugin Store</h3>
          <p className="server-card__desc">
            Browse and install server-side plugins written in Rust. From quick polls and
            greeting bots to custom chat cards and gallery showcases - the Plugin Store
            makes it easy to extend your server without modifying the server binary.
            Plugins are sandboxed, versioned, and manageable directly from the client.
          </p>
          <Button
            variant="primary"
            size="md"
            href="https://plugins.fancy-mumble.com/"
            onClick={() => posthog?.capture("plugin_store_clicked")}
          >
            Browse Plugin Store
          </Button>
        </div>
      </GlassCard>
    </Section>
  );
}
