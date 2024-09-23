import { useTranslation } from "react-i18next";
import GetInTouch from "./components/getInTouch";
import Map from "./components/map";
import styles from "./contactUs.module.scss";

const ContactUs: React.FC = () => {
  const { contactUsContainer, title, content } = styles;
  const { t } = useTranslation();
  return (
    <div className={contactUsContainer}>
      <span className={title}>{t("contactUs.title")}</span>
      <div className={content}>
        <GetInTouch />
        <Map />
      </div>
    </div>
  );
};

export default ContactUs;
