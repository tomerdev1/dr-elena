import { useTranslation } from "react-i18next";
import styles from "./secondIntro.module.scss";
import SecondIntroItem from "./secondIntroItem";
import Calm from "@/public/assets/icons/secondIntro/calm";
import Professional from "@/public/assets/icons/secondIntro/professional";
import Clock from "@/public/assets/icons/secondIntro/clock";
import Science from "@/public/assets/icons/secondIntro/science";
import Checklist from "@/public/assets/icons/secondIntro/checklist";
import { cn } from "@/lib/utils";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SecondIntroItem {
  text: string;
  id: number;
}

const SecondIntro: React.FC = () => {
  const {
    secondIntro,
    title,
    secondIntroItems,
    titleContainer,
    marker,
    firstPartContainer,
    firstPartContainerRU,
  } = styles;
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "he");

  const items = t("secondIntro.items", {
    returnObjects: true,
  }) as SecondIntroItem[];

  return (
    <div className={secondIntro}>
      <div className={titleContainer}>
        <div
          className={cn(
            firstPartContainer,
            language == "ru" ? firstPartContainerRU : ""
          )}
        >
          <span className={title}>{t("secondIntro.title.firstText")}</span>
          <mark className={marker}>{t("secondIntro.title.marked")}</mark>
        </div>
        <span className={title}>{t("secondIntro.title.secondText")}</span>
      </div>

      <div className={secondIntroItems}>
        {Array.isArray(items) &&
          items.map((item) => (
            <SecondIntroItem text={item.text} key={item.id} id={item.id} />
          ))}
      </div>
    </div>
  );
};

export default SecondIntro;
