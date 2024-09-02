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
    introText,
    titleText,
    bodyText,
    doctorImage,
  } = styles;
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <div className={introContainer}>
      <div className={coverContainer}>
        <CustomImage
          src={"/assets/images/cover3.jpg"}
          width={0}
          height={0}
          style={{
            objectPosition: isMobile ? "top" : "50% 70%",
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        <div className={coverContent}>
          <div className={coverContentItem}>
            <span className={cn(introText, titleText)}>{t("intro.a")}</span>
            <span className={cn(introText, bodyText)}>{t("intro.b")}</span>
            <span className={cn(introText, bodyText)}>{t("intro.c")}</span>
            <span className={cn(introText, bodyText)}>{t("intro.d")}</span>
            {/* <span className={cn(introText, introBody)}>{t("intro.e")}</span> */}
          </div>
          <div className={coverContentItem}>
            <CustomImage
              src={"/assets/images/doctor.png"}
              className={doctorImage}
              height={isMobile ? 200 : 400}
              width={0}
              sizes=""
              style={{
                objectPosition: "left",
                objectFit: "contain",
                width: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
