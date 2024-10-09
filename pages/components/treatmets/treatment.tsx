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
  const { treatment, treatmentTitle, treatmentBody, treatmentIcon } = styles;
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
      <IconWrapper
        className={treatmentIcon}
        icon={getIcon(id)}
        size={42}
        fillColor={CSS.primary}
      />
      <span className={treatmentTitle}>{title}</span>
      <span className={treatmentBody}>{body}</span>
    </div>
  );
};

export default Treatment;
