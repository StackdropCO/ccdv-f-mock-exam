import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  width: 20,
  height: 20,
  "aria-hidden": true,
  focusable: false,
};

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5v4.75l3 2" />
    </svg>
  );
}

export function BookOpenIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 6.5c-1.4-1.15-3.3-1.75-5.5-1.75-.83 0-1.5.67-1.5 1.5v10.5c0 .55.45 1 1 1 .18 0 .35-.05.5-.14.98-.6 2.3-.98 3.5-.98 1.02 0 2.24.28 2.9.65.06.03.13.05.2.05" />
      <path d="M12 6.5c1.4-1.15 3.3-1.75 5.5-1.75.83 0 1.5.67 1.5 1.5v10.5c0 .55-.45 1-1 1-.18 0-.35-.05-.5-.14-.98-.6-2.3-.98-3.5-.98-1.02 0-2.24.28-2.9.65-.06.03-.13.05-.2.05" />
      <path d="M12 6.5v10.83" />
    </svg>
  );
}

export function StackIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4.5l7.5 3.75L12 12 4.5 8.25 12 4.5z" />
      <path d="M4.5 12l7.5 3.75L19.5 12" />
      <path d="M4.5 15.75L12 19.5l7.5-3.75" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} width={16} height={16} {...props}>
      <path d="M4.5 12h15" />
      <path d="M13.5 6.5L19.5 12l-6 5.5" />
    </svg>
  );
}
