import styles from "./intro.module.scss";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import useIsMobile from "@/pages/hooks/useIsMobile";
import CustomImage from "../common/Image/CustomImage";

const Intro: React.FC = () => {
  const {
    introContainer,
    coverContent,
    coverContentItem,
    coverContainer,

    titleText,
    coverGradient,
    subtitleText,
    bodyText,
    doctorImage,
  } = styles;
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <div className={introContainer}>
      <div className={coverContainer}>
        <CustomImage
          src={"/assets/images/cover5.jpg"}
          width={0}
          height={0}
          style={{
            objectPosition: isMobile ? "35%" : "50%",
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        <div className={coverGradient}>
          <div className={coverContent}>
            <h1 className={titleText}>{t("intro.name")}</h1>
            <span className={subtitleText}>{t("intro.a")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

/*
          <div className={coverContentItem}>
            <span className={cn(introText, titleText)}>{t("intro.a")}</span>
            <span className={cn(introText, bodyText)}>{t("intro.b")}</span>
            <span className={cn(introText, bodyText)}>{t("intro.c")}</span>
            <span className={cn(introText, bodyText)}>{t("intro.d")}</span>
            {/* <span className={cn(introText, introBody)}>{t("intro.e")}</span> 
            </div>
*/
