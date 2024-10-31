import { useTranslation } from "react-i18next";
import styles from "./accessibilityStatement.module.scss";
import Link from "next/link";

const AccessibilityStatementLink: React.FC = () => {
  const { t } = useTranslation();
  const { button } = styles;
  return (
    <Link className={button} href={"/AccessibilityStatement"}>
      {t("accessibilityStatement")}
    </Link>
  );
};

export default AccessibilityStatementLink;
