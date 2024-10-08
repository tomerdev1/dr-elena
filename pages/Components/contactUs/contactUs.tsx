import { useTranslation } from "react-i18next";
import GetInTouch from "./components/getInTouch";
import Map from "./components/map";
import styles from "./contactUs.module.scss";
import SocialNetworks from "@/pages/components/socialNetworks/socialNetworks";
import useIsMobile from "@/hooks/useIsMobile";

const ContactUs: React.FC = () => {
  const { contactUsContainer, title, content } = styles;
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <div className={contactUsContainer}>
      <span className={title}>{t("contactUs.title")}</span>
      <div className={content}>
        <GetInTouch />
        <Map />
      </div>
      {isMobile && <SocialNetworks />}
    </div>
  );
};

export default ContactUs;
