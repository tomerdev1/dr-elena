import { Select, SelectProps, Space } from "antd";
import styles from "./CustomSelect.module.scss";

interface Props extends SelectProps {}

const CustomSelect: React.FC<Props> = (props) => {
  const { selectProps } = styles;
  return (
    <Select
      {...props}
      className={selectProps}
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
