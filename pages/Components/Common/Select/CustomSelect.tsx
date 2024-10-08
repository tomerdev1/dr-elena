import { Select, SelectProps, Space } from "antd";
import styles from "./customSelect.module.scss";
import React from "react";

interface Props extends SelectProps {}

const CustomSelect: React.FC<Props> = (props) => {
  const { selectProps, selectLabel } = styles;
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
    return <span className={selectLabel}>{label}</span>;
  };

  return (
    <Select
      {...props}
      className={selectProps}
      labelRender={labelRender}
      optionRender={(option) => (
        <Space>
          <span role="img">{option.data.emoji}</span>
          <span>{option.data.label}</span>
        </Space>
      )}
    />
  );
};

export default CustomSelect;
