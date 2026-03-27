import { Section, SectionHeading } from "./Section";
import { FeatureCard } from "./FeatureCard";
import {
  Icon,
  faMicrophone,
  faWandMagicSparkles,
  faComments,
  faPalette,
  faShieldHalved,
  faGlobe,
} from "./Icons";

const FEATURES = [
  {
    icon: <Icon icon={faMicrophone} size="lg" />,
    title: "Crystal-Clear Voice",
    description:
      "Full Mumble protocol support with Opus codec, noise gate, and automatic gain control for pristine audio quality.",
  },
  {
    icon: <Icon icon={faWandMagicSparkles} size="lg" />,
    title: "Modern Interface",
    description:
      "A beautiful glassmorphic UI with channel tree, chat view, and user profiles - designed to feel right at home.",
  },
  {
    icon: <Icon icon={faComments} size="lg" />,
    title: "Rich Chat",
    description:
      "Markdown formatting, inline images, GIFs, clickable URLs, persistent chats, and polls - express yourself beyond just voice.",
  },
  {
    icon: <Icon icon={faPalette} size="lg" />,
    title: "Profile Customisation",
    description:
      "Bio editor, avatar frames, banners, nameplates, name styles, and card backgrounds - make your profile yours.",
  },
  {
    icon: <Icon icon={faShieldHalved} size="lg" />,
    title: "Secure by Design",
    description:
      "TLS encryption, client certificates, and end-to-end encryption support to keep your conversations private.",
  },
  {
    icon: <Icon icon={faGlobe} size="lg" />,
    title: "Cross-Platform",
    description:
      "Runs natively on Windows, Linux, and Android - same great experience everywhere.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <SectionHeading
        title="Everything you need"
        subtitle="Packed with features to make your voice communication better."
      />
      <div className="features-grid">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </Section>
  );
}
