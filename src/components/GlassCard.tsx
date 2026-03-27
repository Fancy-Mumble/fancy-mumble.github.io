import type { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  style,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass-card ${hover ? "glass-card--hover" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
