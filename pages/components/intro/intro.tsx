import styles from "./intro.module.scss";
import { useTranslation } from "react-i18next";
import useIsMobile from "@/hooks/useIsMobile";
import CustomImage from "../common/image/CustomImage";

const Intro: React.FC = () => {
  const {
    introContainer,
    coverContent,
    coverContainer,
    titleText,
    coverGradient,
    subtitleText,
    bodyText,
  } = styles;
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <div className={introContainer}>
      <div className={coverContainer}>
        <CustomImage
          src={"/assets/images/cover.jpg"}
          blurDataURL={"/assets/images/coverBlur.jpg"}
          placeholder="blur"
          width={0}
          height={0}
          style={{
            objectPosition: isMobile ? "60%" : "50%",
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        <div className={coverGradient}>
          <div className={coverContent}>
            <h1 className={titleText}>{t("intro.name")}</h1>
            <h1 className={subtitleText}>{t("intro.subtitle")}</h1>
            <span className={bodyText}>{t("intro.a")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
