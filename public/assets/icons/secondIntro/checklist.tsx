import * as React from "react";
const Checklist = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 5.5 3.214 7 7.5 3M2 12.5 3.214 14 7.5 10M2 19.5 3.214 21 7.5 17"
    />
    <path
      stroke={props.fill}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 19H12M22 12H12M22 5H12"
    />
  </svg>
);
export default Checklist;
