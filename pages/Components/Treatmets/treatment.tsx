import useIsMobile from "@/pages/hooks/useIsMobile";
import { useTranslation } from "react-i18next";
import styles from "./treatment.module.scss";
import variables from "../../../styles/style.module.scss";
import IconWrapper from "../common/icon/icon";

import { FC, SVGProps } from "react";

interface Props {
  title: string;
  body: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

const Treatment: React.FC<Props> = ({ title, body, icon }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { treatment, treatmentTitle, treatmentBody, treatmentIcon } = styles;
  const CSS = {
    primary: variables.primary,
  };
  return (
    <div className={treatment}>
      <IconWrapper
        className={treatmentIcon}
        icon={icon}
        size={42}
        fillColor={CSS.primary}
      />
      <span className={treatmentTitle}>{title}</span>
      <span className={treatmentBody}>{body}</span>
    </div>
  );
};

export default Treatment;
