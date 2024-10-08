import IconWrapper from "@/pages/components/common/icon/icon";
import styles from "./secondIntroItem.module.scss";
import variables from "@/styles/style.module.scss";
import { Icons } from "@/public/assets/icons/icons";

interface Props {
  text: string;
  id: number;
}

const SecondIntroItem: React.FC<Props> = ({ text, id }) => {
  const { secondIntroItem, secondIntroText, secondIntroIcon, experienceIcon } =
    styles;
  const CSS = {
    primary: variables.primary,
  };

  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return Icons.professional;
      case 2:
        return Icons.calm;
      case 3:
        return Icons.clock;
      case 4:
        return Icons.science;
      case 5:
        return Icons.checklist;
      default:
        return Icons.calm;
    }
  };

  return (
    <div className={secondIntroItem}>
      {id != 0 ? (
        <IconWrapper
          className={secondIntroIcon}
          icon={getIcon(id)}
          size={42}
          fillColor={CSS.primary}
        />
      ) : (
        <div className={experienceIcon}>{"34+"}</div>
      )}
      <span className={secondIntroText}>{text}</span>
    </div>
  );
};

export default SecondIntroItem;
