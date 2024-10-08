import { useTranslation } from "react-i18next";
import styles from "./secondIntro.module.scss";
import SecondIntroItem from "./secondIntroItem";
import { cn } from "@/lib/utils";

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
  const { t, i18n } = useTranslation();

  const items = t("secondIntro.items", {
    returnObjects: true,
  }) as SecondIntroItem[];

  return (
    <div className={secondIntro}>
      <div className={titleContainer}>
        <div
          className={cn(
            firstPartContainer,
            i18n.language == "ru" ? firstPartContainerRU : ""
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
