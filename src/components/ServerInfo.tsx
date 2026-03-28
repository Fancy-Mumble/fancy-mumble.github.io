import { Section, SectionHeading } from "./Section";
import { GlassCard } from "./GlassCard";
import { Button } from "./Button";
import { Icon, faServer } from "./Icons";

export function ServerInfo() {
  return (
    <Section id="server">
      <SectionHeading
        title="Recommended Mumble Server"
        subtitle="For full VoIP feature support, use our companion Mumble server."
      />
      <GlassCard className="server-card">
        <div className="server-card__icon" aria-hidden="true">
          <Icon icon={faServer} size="2x" />
        </div>
        <div className="server-card__content">
          <h3 className="server-card__title">Fancy Mumble Server</h3>
          <p className="server-card__desc">
            Some features — like rich profiles, extended chat, and real-time
            customisation — require a compatible Mumble server. Our open-source
            server fork provides full VoIP support for every Fancy Mumble
            feature out of the box.
          </p>
          <Button
            variant="primary"
            size="md"
            href="https://github.com/SetZero/mumble-server"
          >
            View on GitHub
          </Button>
        </div>
      </GlassCard>
    </Section>
  );
}
