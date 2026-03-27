import { useState } from "react";
import { Lightbox } from "./Lightbox";

interface MediaPlaceholderProps {
  type?: "image" | "video";
  aspectRatio?: string;
  label?: string;
  src?: string;
  alt?: string;
}

export function MediaPlaceholder({
  type = "image",
  aspectRatio = "16/9",
  label,
  src,
  alt = "",
}: MediaPlaceholderProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (src) {
    if (type === "video") {
      return (
        <div className="media" style={{ aspectRatio }}>
          <video
            src={src}
            controls
            className="media__content"
            aria-label={alt}
          />
        </div>
      );
    }
    return (
      <>
        <button
          className="media media--real"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Enlarge: ${alt}`}
          type="button"
        >
          <img src={src} alt={alt} className="media__content" loading="lazy" />
        </button>
        {lightboxOpen && (
          <Lightbox src={src} alt={alt} onClose={() => setLightboxOpen(false)} />
        )}
      </>
    );
  }

  return (
    <div className="media media--placeholder" style={{ aspectRatio }}>
      <div className="media__placeholder-inner">
        <span className="media__placeholder-icon" aria-hidden="true">
          {type === "video" ? "🎬" : "🖼️"}
        </span>
        {label && <span className="media__placeholder-label">{label}</span>}
      </div>
    </div>
  );
}
