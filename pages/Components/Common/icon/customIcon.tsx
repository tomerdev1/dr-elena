import Image from "next/image";
import React from "react";

interface IconProps {
  path: string;
  size?: number;
}

const CustomIcon: React.FC<IconProps> = ({ path, size = 24 }) => {
  return (
    <Image
      src={path}
      alt="icon"
      width={size}
      height={size}
      style={{ display: "inline-block" }}
    />
  );
};

export default CustomIcon;
