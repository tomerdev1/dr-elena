import * as React from "react";
const Clock = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <path
      stroke={props.fill}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12 17v-5l2.5-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
export default Clock;
