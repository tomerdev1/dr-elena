import Image, { ImageProps } from "next/image";
import React from "react";

interface Props extends ImageProps {}

const CustomImage: React.FC<Props> = (props) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} unoptimized priority />;
};

export default CustomImage;
