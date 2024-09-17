import * as React from "react";

// Define the props for the IconWrapper component
interface IconWrapperProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // Path to the icon component
  size?: number | string; // Optional size prop, default can be set
  fillColor?: string; // Optional fill color, default can be set
  className: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  size = 24,
  fillColor = "currentColor",
  className,
}) => {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <Icon fill={fillColor} width="100%" height="100%" />
    </div>
  );
};

export default IconWrapper;
