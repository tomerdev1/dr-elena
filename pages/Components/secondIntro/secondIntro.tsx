import { useTranslation } from "react-i18next";
import styles from "./secondIntro.module.scss";
import SecondIntroItem from "./secondIntroItem";
import Calm from "@/public/assets/icons/secondIntro/calm";
import Calm2 from "@/public/assets/icons/secondIntro/calm2";
import Professional from "@/public/assets/icons/secondIntro/professional";
import Clock from "@/public/assets/icons/secondIntro/clock";
import Science from "@/public/assets/icons/secondIntro/science";
import Checklist from "@/public/assets/icons/secondIntro/checklist";
import { cn } from "@/lib/utils";
import { useLanguageContext } from "@/pages/hooks/useLanguageContext";

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
  const { language } = useLanguageContext();

  const items = t("secondIntro.items", {
    returnObjects: true,
  }) as SecondIntroItem[];

  const getIcon = (id: number): any => {
    switch (id) {
      case 1:
        return Professional;
      case 2:
        return Calm;
      case 3:
        return Clock;
      case 4:
        return Science;
      case 5:
        return Checklist;
      default:
        return Calm;
    }
  };

  return (
    <div className={secondIntro}>
      <div className={titleContainer}>
        <div
          className={cn(
            firstPartContainer,
            language == "russian" ? firstPartContainerRU : ""
          )}
        >
          <span className={title}>{t("secondIntro.title.firstText")}</span>
          <mark className={marker}>{t("secondIntro.title.marked")}</mark>
        </div>
        <span className={title}>{t("secondIntro.title.secondText")}</span>
      </div>

      <div className={secondIntroItems}>
        {items.map((item) => (
          <SecondIntroItem
            text={item.text}
            icon={getIcon(item.id)}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondIntro;
