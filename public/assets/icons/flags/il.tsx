import { LucideProps } from "lucide-react";
import * as React from "react";
const ILFlag = ({ ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    viewBox="0 0 32 32"
    height={"100%"}
    {...props}
  >
    <rect width={30} height={24} x={1} y={4} fill="#fff" rx={4} ry={4} />
    <path fill="#1433b3" d="M1 8h30v4H1zM1 20h30v4H1z" />
    <path
      d="M27 4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16Z"
      opacity={0.15}
    />
    <path
      fill="#1437b0"
      d="m16 19.464-1-1.732h-2L14 16l-1-1.732h2l1-1.732 1 1.732h2L18 16l1 1.732h-2l-1 1.732Zm-.365-1.732.365.632.365-.632h-.73Zm1.682-.55h.73l-.365-.632-.365.632Zm-2 0h1.365L17.364 16l-.682-1.182h-1.365L14.635 16l.682 1.182Zm-1.365 0h.73l-.365-.632-.365.632Zm3.365-2.364.365.632.365-.632h-.73Zm-3.365 0 .365.632.365-.632h-.73Zm1.682-.55h.73l-.365-.632-.365.632Z"
    />
    <path
      fill="#fff"
      d="M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3Z"
      opacity={0.2}
    />
  </svg>
);
export default ILFlag;
