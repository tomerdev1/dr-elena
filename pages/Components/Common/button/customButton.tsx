import { Button, ButtonProps } from "antd";

interface Props extends ButtonProps {}

const CustomButton: React.FC<Props> = (props) => {
  return (
    <Button
      target={props.type == "link" || props.href ? "_blank" : undefined}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
