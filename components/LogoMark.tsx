interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 30, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="30" height="30" rx="7" fill="#0075de" />
      {/* J letterform */}
      <path
        d="M20 9H13.5M17 9V20C17 22.5 15 24.5 12.5 24.5C10 24.5 8.5 22.5 8.5 20.5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
