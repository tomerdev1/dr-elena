import useIsMobile from "@/hooks/useIsMobile";
import { useTranslation } from "react-i18next";
import styles from "./treatment.module.scss";
import variables from "@/styles/style.module.scss";
import IconWrapper from "@/pages/components/common/icon/icon";
import { Icons } from "@/public/assets/icons/icons";

interface Props {
  title: string;
  body: string;
  id: number;
}

const Treatment: React.FC<Props> = ({ title, body, id }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const {
    treatment,
    treatmentTitle,
    treatmentBody,
    treatmentIcon,
    topTriangle,
    bottomTriangle,
    mockIcon,
  } = styles;
  const CSS = {
    primary: variables.primary,
  };

  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return Icons.implants;
      case 2:
        return Icons.rehabilitation;
      case 3:
        return Icons.aesthetics;
      case 4:
        return Icons.maintenance;
      default:
        return Icons.maintenance;
    }
  };

  return (
    <div className={treatment}>
      <div className={topTriangle}>
        <IconWrapper
          className={treatmentIcon}
          icon={getIcon(id)}
          size={42}
          fillColor={CSS.primary}
        />
      </div>

      <h2 className={treatmentTitle}>{title}</h2>
      <span className={treatmentBody}>{body}</span>
      <div className={bottomTriangle}>
        <div style={{ height: "42px", width: "42px" }} />
      </div>
    </div>
  );
};

export default Treatment;
