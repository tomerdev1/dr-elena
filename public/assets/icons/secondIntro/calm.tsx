import * as React from "react";

const Calm = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 128 128"
    {...props}
  >
    <title />
    <g id="Layer_2" data-name="Layer 2">
      <g id="Export">
        <path
          d="M64 3A61 61 0 1 1 3 64 61.06 61.06 0 0 1 64 3m0-3a64 64 0 1 0 64 64A64 64 0 0 0 64 0Z"
          className="cls-1"
          stroke={props.fill} // Add stroke color
          strokeWidth="2" // Increase stroke width
        />
        <path
          d="M90.09 56.8H81a1.5 1.5 0 0 1 0-3h9a1.5 1.5 0 0 1 0 3ZM47 56.8h-9.09a1.5 1.5 0 0 1 0-3H47a1.5 1.5 0 0 1 0 3ZM63.94 94.82c-.92 0-1.87 0-2.83-.11a40.4 40.4 0 0 1-20.23-7.22A1.5 1.5 0 1 1 42.6 85a37.43 37.43 0 0 0 18.72 6.69A38 38 0 0 0 85.41 85a1.5 1.5 0 1 1 1.7 2.46 41.1 41.1 0 0 1-23.17 7.36Z"
          className="cls-1"
          stroke={props.fill} // Add stroke color
          strokeWidth="5" // Increase stroke width
        />
      </g>
    </g>
  </svg>
);

export default Calm;
