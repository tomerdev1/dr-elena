import { cn } from "@/lib/utils";
import Header from "../components/Header/Header";
import styles from "./MainPage.module.scss";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
  const { app, content, rtl } = styles;
  const { language } = useLanguageContext();
  const { t } = useTranslation();
  return (
    <div className={cn(app, language == "hebrew" && rtl)}>
      <Header />
      <div className={content}>{t("intro")}</div>
    </div>
  );
};

export default MainPage;
