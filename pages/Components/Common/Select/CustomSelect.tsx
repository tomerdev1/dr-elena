import { Select, SelectProps, Space } from "antd";
import styles from "./CustomSelect.module.scss";

interface Props extends SelectProps {}

const CustomSelect: React.FC<Props> = (props) => {
  const { selectProps, selectLabel } = styles;
  type LabelRender = SelectProps["labelRender"];

  const labelRender: LabelRender = (props) => {
    const { label, value } = props;
    return <span className={selectLabel}>{label}</span>;
  };
  return (
    <Select
      {...props}
      className={selectProps}
      // variant="outlined"
      labelRender={labelRender}
      // popupClassName={popupProps}
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
