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
    title: "Crystal-Clear VoIP",
    description:
      "Full Mumble protocol support with Opus codec, noise gate, and automatic gain control — VoIP audio quality that rivals any proprietary platform.",
  },
  {
    icon: <Icon icon={faWandMagicSparkles} size="lg" />,
    title: "Modern Interface",
    description:
      "A beautiful glassmorphic UI with channel tree, chat view, and user profiles — a Mumble client as polished as any modern voice chat app.",
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
      "TLS encryption, client certificates, and end-to-end encryption support - unlike centralised VoIP platforms, your data stays yours.",
  },
  {
    icon: <Icon icon={faGlobe} size="lg" />,
    title: "Cross-Platform VoIP",
    description:
      "Runs natively on Windows, Linux, and Android — the same great Mumble VoIP experience everywhere.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <SectionHeading
        title="Why choose Fancy Mumble?"
        subtitle="All the VoIP and chat features you need — self-hosted, private, and built on the Mumble protocol."
      />
      <div className="features-grid">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </Section>
  );
}
