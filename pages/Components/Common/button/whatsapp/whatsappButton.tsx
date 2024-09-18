import Whastsapp from "@/public/assets/icons/socialMedia/whatsapp";
import IconWrapper from "../../icon/icon";
import CustomButtom from "../customButton";
import styles from "./whatsappButton.module.scss";
import { useTranslation } from "react-i18next";
import useIsMobile from "@/pages/hooks/useIsMobile";

const WhastsappButton: React.FC = () => {
  const { whatsappButton } = styles;

  const { t } = useTranslation();

  const data = { phoneNumber: "+972523941417", message: t("whatsappMessage") };

  const isMobile = useIsMobile();
  const getWhatsAppLink = (): string => {
    const encodedMessage = data.message ? encodeURIComponent(data.message) : "";
    if (isMobile) {
      // Use whatsapp:// for mobile devices
      return `whatsapp://send?phone=${data.phoneNumber}&text=${encodedMessage}`;
    } else {
      // Use web.whatsapp.com for desktop devices
      return `https://web.whatsapp.com/send?phone=${data.phoneNumber}&text=${encodedMessage}`;
    }
  };

  const handleClick = () => {
    const link = getWhatsAppLink();
    // Open the link
    window.open(link, "_blank");
  };

  return (
    <CustomButtom
      className={whatsappButton}
      shape="circle"
      size="large"
      onClick={handleClick}
      icon={<IconWrapper size={56} icon={Whastsapp} />}
    />
  );
};

export default WhastsappButton;
