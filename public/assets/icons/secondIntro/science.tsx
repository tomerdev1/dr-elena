import * as React from "react";
import { LucideProps } from "lucide-react";
const Science = ({ ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    stroke={props.fill}
    strokeWidth={2}
    viewBox="0 0 59 59"
    {...props}
    fill="none"
  >
    <ellipse cx={31.95} cy={32} strokeLinecap="round" rx={8.99} ry={24.73} />
    <ellipse
      cx={31.95}
      cy={32}
      strokeLinecap="round"
      rx={8.99}
      ry={24.73}
      transform="rotate(-60 31.95 32.002)"
    />
    <ellipse
      cx={32.05}
      cy={32.15}
      strokeLinecap="round"
      rx={24.73}
      ry={8.99}
      transform="rotate(-30 32.046 32.147)"
    />
    <circle cx={32.2} cy={32.15} r={2.88} strokeLinecap="round" />
  </svg>
);
export default Science;
