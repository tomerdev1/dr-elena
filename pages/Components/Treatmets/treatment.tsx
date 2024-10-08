import useIsMobile from "@/hooks/useIsMobile";
import { useTranslation } from "react-i18next";
import styles from "./treatment.module.scss";
import variables from "../../../styles/style.module.scss";
import IconWrapper from "../common/icon/icon";

import { FC, SVGProps } from "react";
import { LucideProps } from "lucide-react";
import { Icons } from "@/public/assets/icons/icons";

interface Props {
  title: string;
  body: string;
}

const Treatment: React.FC<Props> = ({ title, body }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { treatment, treatmentTitle, treatmentBody, treatmentIcon } = styles;
  const CSS = {
    primary: variables.primary,
  };

  const getIcon = (title: string) => {
    switch (title) {
      case "Implants":
        return Icons["implants"];
      case "Rehabilitation":
        return Icons["rehabilitation"];
      case "Aesthetics":
        return Icons["aesthetics"];
      case "Maintenance":
        return Icons["maintenance"];
      default:
        return Icons["maintenance"];
    }
  };

  return (
    <div className={treatment}>
      <IconWrapper
        className={treatmentIcon}
        icon={getIcon(title)}
        size={42}
        fillColor={CSS.primary}
      />
      <span className={treatmentTitle}>{title}</span>
      <span className={treatmentBody}>{body}</span>
    </div>
  );
};

export default Treatment;
