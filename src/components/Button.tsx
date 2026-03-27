import type { ReactNode, CSSProperties } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  style,
  className = "",
}: ButtonProps) {
  const cls = `btn btn--${variant} btn--${size} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
