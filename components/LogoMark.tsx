interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 36, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dark navy background */}
      <rect width="36" height="36" rx="9" fill="#0d1520" />

      {/* ── J letterform ── */}
      {/* Top horizontal bar — white, full width */}
      <rect x="8.5" y="8.5" width="19" height="4.5" rx="0.5" fill="white" />

      {/* Right vertical stroke — white */}
      <rect x="23" y="8.5" width="4.5" height="19" rx="0.5" fill="white" />

      {/* Bottom hook — blue, curves left (angular) */}
      <rect x="8.5" y="24" width="19" height="4.5" rx="0.5" fill="#0075de" />
      {/* Left foot of hook */}
      <rect x="8.5" y="21" width="4.5" height="7.5" rx="0.5" fill="#0075de" />

      {/* ── Accent lines (inspired by W logo's parallel detail) ── */}
      {/* Two thin lighter-blue vertical stripes on the top bar left */}
      <rect x="8.5" y="8.5" width="1.5" height="4.5" fill="#62aef0" opacity="0.8" />
      <rect x="11.5" y="8.5" width="1.5" height="4.5" fill="#62aef0" opacity="0.5" />
    </svg>
  );
}
