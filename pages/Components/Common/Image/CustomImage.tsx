import Image, { ImageProps } from "next/image";
import React from "react";

interface Props extends Omit<ImageProps, "alt"> {}

const CustomImage: React.FC<Props> = (props) => {
  return <Image {...props} alt="" unoptimized priority />;
};

export default CustomImage;
