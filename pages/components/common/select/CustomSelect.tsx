import { Select, SelectProps, Space } from "antd";
import styles from "./CustomSelect.module.scss";
import React from "react";
import IconWrapper from "../icon/icon";
import { Icons } from "@/public/assets/icons/icons";
import { cn, getFlagIcon } from "@/lib/utils";

interface Props extends SelectProps {}

const CustomSelect: React.FC<Props> = (props) => {
  const { selectProps, selectLabel, selectPopup } = styles;
  type LabelRender = SelectProps["labelRender"];
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true); // Ensures the component renders only on the client side
  }, []);

  if (!isClient) {
    return null; // Prevent SSR of this component
  }

  const labelRender: LabelRender = (props) => {
    const { label, value } = props;
    return (
      <div className={cn(selectLabel)}>
        {value.toString() == "he" && getFlagIcon(value.toString())}
        <span>{label}</span>
        {value.toString() != "he" && getFlagIcon(value.toString())}
      </div>
    );
  };

  return (
    <Select
      {...props}
      className={selectProps}
      popupClassName={selectPopup}
      labelRender={labelRender}
      suffixIcon={<IconWrapper size={22} icon={Icons.downArrow} />}
      optionRender={(option) => (
        <Space>
          <span role="img">{option.data.icon}</span>
          <span>{option.data.label}</span>
        </Space>
      )}
    />
  );
};

export default CustomSelect;
