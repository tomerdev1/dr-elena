import IconWrapper from "../common/icon/icon";
import styles from "./secondIntroItem.module.scss";
import variables from "../../../styles/style.module.scss";
import { FC, SVGProps } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

interface Props {
  text: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  id: number;
}

const SecondIntroItem: React.FC<Props> = ({ text, icon, id }) => {
  const { secondIntroItem, secondIntroText, secondIntroIcon, experienceIcon } =
    styles;
  const [language, setLanguage] = useLocalStorage("language", "he");
  const CSS = {
    primary: variables.primary,
  };
  return (
    <div className={secondIntroItem}>
      {id != 0 ? (
        <IconWrapper
          className={secondIntroIcon}
          icon={icon}
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
