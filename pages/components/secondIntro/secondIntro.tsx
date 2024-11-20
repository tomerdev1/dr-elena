import { useEffect, useRef, useState } from "react";
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
    highlightActivated,
  } = styles;
  const { t, i18n } = useTranslation();

  const items = t("secondIntro.items", {
    returnObjects: true,
  }) as SecondIntroItem[];

  const markerRef = useRef<any>(null);
  const [highlightActive, setHighlightActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHighlightActive(true); // Trigger the animation
          observer.disconnect(); // Stop observing once the animation is triggered
        }
      },
      {
        rootMargin: `0px 0px -450px 0px`, // Offset to trigger 200px before the bottom
        threshold: 0, // Trigger as soon as it enters the adjusted root margin
      } // Adjust threshold as needed
    );

    if (markerRef.current) {
      observer.observe(markerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={secondIntro}>
      <div className={titleContainer}>
        <div
          className={cn(
            firstPartContainer,
            i18n.language == "ru" ? firstPartContainerRU : ""
          )}
        >
          <h2 className={title}>{t("secondIntro.title.firstText")}</h2>
          <mark
            className={cn(marker, highlightActive && highlightActivated)}
            ref={markerRef}
          >
            {t("secondIntro.title.marked")}
          </mark>
        </div>
        <h2 className={title}>{t("secondIntro.title.secondText")}</h2>
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
