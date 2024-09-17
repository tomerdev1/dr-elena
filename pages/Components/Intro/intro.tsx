import styles from "./intro.module.scss";
import { useTranslation } from "react-i18next";
import useIsMobile from "@/pages/hooks/useIsMobile";
import CustomImage from "../common/image/customImage";

const Intro: React.FC = () => {
  const {
    introContainer,
    coverContent,
    coverContainer,
    titleText,
    coverGradient,
    subtitleText,
  } = styles;
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <div className={introContainer}>
      <div className={coverContainer}>
        <CustomImage
          src={"/assets/images/cover6.jpg"}
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
            <span className={subtitleText}>{t("intro.a")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
