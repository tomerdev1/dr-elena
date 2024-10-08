import { LucideProps } from "lucide-react";
import * as React from "react";

interface IconWrapperProps {
  icon: ({ ...props }: LucideProps) => JSX.Element;
  size?: number | string;
  fillColor?: string;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  size = 24,
  fillColor = "currentColor",
  className,
}) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true); // Ensures the component renders only on the client side
  }, []);

  if (!isClient) {
    return null; // Prevent SSR of this component
  }

  return (
    <div
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Icon fill={fillColor} width="100%" height="100%" />
    </div>
  );
};

export default IconWrapper;
