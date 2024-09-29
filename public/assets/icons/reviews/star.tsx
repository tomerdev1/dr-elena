import * as React from "react";
const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill={props.fill}
      d="M62.799 23.737a3.941 3.941 0 0 0-3.139-2.642l-16.969-2.593-7.622-16.237a3.938 3.938 0 0 0-7.13 0l-7.623 16.238-16.969 2.593a3.937 3.937 0 0 0-2.222 6.642l12.392 12.707-2.935 17.977a3.94 3.94 0 0 0 5.797 4.082l15.126-8.365 15.126 8.365a3.94 3.94 0 0 0 5.796-4.082l-2.935-17.977 12.393-12.707a3.942 3.942 0 0 0 .914-4.001z"
    />
  </svg>
);
export default Star;
