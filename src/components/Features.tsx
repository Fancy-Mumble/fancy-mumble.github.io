import { Section, SectionHeading } from "./Section";
import { FeatureCard } from "./FeatureCard";
import {
  Icon,
  faMicrophone,
  faDesktop,
  faComments,
  faPalette,
  faShieldHalved,
  faGlobe,
  faPuzzlePiece,
  faFilm,
  faFileLines,
} from "./Icons";

const FEATURES = [
  {
    icon: <Icon icon={faMicrophone} size="lg" />,
    title: "Crystal-Clear VoIP",
    description:
      "Full Mumble protocol support with Opus codec, noise gate, automatic gain control, and AI-powered noise removal - VoIP audio quality that rivals any proprietary platform.",
  },
  {
    icon: <Icon icon={faDesktop} size="lg" />,
    title: "Screen Share & Collaborative Drawing",
    description:
      "Share your screen in HD with WebRTC and collaborate in real-time with a built-in drawing overlay - whiteboard your ideas directly on top of any shared content.",
  },
  {
    icon: <Icon icon={faComments} size="lg" />,
    title: "Rich Chat & Reactions",
    description:
      "Emoji reactions, message editing & pinning, spoiler tags, syntax-highlighted code blocks, link previews, and file sharing - express yourself far beyond voice.",
  },
  {
    icon: <Icon icon={faFileLines} size="lg" />,
    title: "Live Document Editor",
    description:
      "Co-edit documents in real time without leaving the app. Collaborative notes, meeting agendas, or shared reference docs - all synced live inside your channel.",
  },
  {
    icon: <Icon icon={faFilm} size="lg" />,
    title: "Watch Together",
    description:
      "Start a synced video session so your whole channel watches the same content at the same time - movie nights and gaming sessions made effortless.",
  },
  {
    icon: <Icon icon={faPuzzlePiece} size="lg" />,
    title: "Extensible Plugin System",
    description:
      "Extend your server with sandboxed, Rust-powered plugins. Browse the Plugin Store for polls, greeters, chat cards, and more - or build and publish your own.",
  },
  {
    icon: <Icon icon={faShieldHalved} size="lg" />,
    title: "Privacy by Default",
    description:
      "TLS encryption, client certificates, and optional Signal Protocol end-to-end encryption. Streamer mode hides your IP so you stay anonymous on stream.",
  },
  {
    icon: <Icon icon={faPalette} size="lg" />,
    title: "Themes & Personalisation",
    description:
      "Multiple built-in themes, custom fonts, keyboard shortcuts, and a fully revamped profile editor with bio, avatar frames, banners, and card backgrounds.",
  },
  {
    icon: <Icon icon={faGlobe} size="lg" />,
    title: "Multi-Server & Cross-Platform",
    description:
      "Connect to multiple Mumble servers at once, manage a friends list with cross-server DMs, and run natively on Windows, Linux, and Android. Now with German and French localisation.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <SectionHeading
        title="Why choose Fancy Mumble?"
        subtitle="All the VoIP, chat, and collaboration features you need - self-hosted, private, and built on the Mumble protocol."
      />
      <div className="features-grid">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </Section>
  );
}
