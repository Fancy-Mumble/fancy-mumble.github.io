import { Section, SectionHeading } from "./Section";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function MediaShowcase() {
  return (
    <Section id="screenshots" className="media-showcase">
      <SectionHeading
        title="See it in action"
        subtitle="A glimpse at the Fancy Mumble experience."
      />

      {/* Hero screenshot - full width */}
      <div className="media-showcase__hero">
        <MediaPlaceholder
          src="/assets/Sidepanel Open.png"
          alt="Fancy Mumble with channel panel open showing members and permissions"
        />
      </div>

      {/* Feature detail grid */}
      <div className="media-showcase__grid">
        <MediaPlaceholder
          src="/assets/personal_chat.png"
          alt="Chat personalisation settings with background and message style options"
        />
        <MediaPlaceholder
          src="/assets/profile_customization.png"
          alt="Profile customisation with avatar, bio, status and card background options"
        />
        <MediaPlaceholder
          src="/assets/search.png"
          alt="Smart search overlay showing channel and message results"
        />
      </div>
    </Section>
  );
}
