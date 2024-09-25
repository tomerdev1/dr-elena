import { Button, ButtonProps } from "antd";

interface Props extends ButtonProps {}

const CustomButton: React.FC<Props> = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default CustomButton;
