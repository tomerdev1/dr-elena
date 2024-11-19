import { LucideProps } from "lucide-react";
import * as React from "react";
const DownArrow = ({ ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-320 216-584l67-67 197 197 197-197 67 67-264 264Z" />
  </svg>
);
export default DownArrow;
