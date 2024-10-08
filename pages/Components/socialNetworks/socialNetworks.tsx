import { useTranslation } from "react-i18next";
import styles from "./socialNetworks.module.scss";
import CustomButton from "../common/button/customButton";
import IconWrapper from "../common/icon/icon";
import Facebook from "@/public/assets/icons/socialMedia/facebook";
import Instagram from "@/public/assets/icons/socialMedia/instagram";
import { Icons } from "@/public/assets/icons/icons";

const SocialNetworks: React.FC = () => {
  const { container } = styles;
  const { t } = useTranslation();

  return (
    <div className={container}>
      <span>{t("socialNetworks.text")}</span>
      <CustomButton
        size="large"
        href="https://www.facebook.com/profile.php?id=61551627340036"
        icon={<IconWrapper size={40} icon={Icons.facebook} />}
      />
      <CustomButton
        size="large"
        href="https://www.instagram.com/dr.elena_dental_clinik/"
        icon={<IconWrapper size={47} icon={Icons.instagram} />}
      />
    </div>
  );
};

export default SocialNetworks;
