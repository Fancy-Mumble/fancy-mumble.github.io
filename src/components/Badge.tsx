interface BadgeProps {
  label: string;
  icon?: string;
}

export function Badge({ label, icon }: BadgeProps) {
  return (
    <span className="badge">
      {icon && <span className="badge__icon" aria-hidden="true">{icon}</span>}
      {label}
    </span>
  );
}
