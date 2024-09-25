import Whastsapp from "@/public/assets/icons/socialMedia/whatsapp";
import IconWrapper from "../../icon/icon";
import CustomButton from "../customButton";
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
    if (isMobile)
      return `whatsapp://send?phone=${data.phoneNumber}&text=${encodedMessage}`;
    else
      return `https://web.whatsapp.com/send?phone=${data.phoneNumber}&text=${encodedMessage}`;
  };

  const handleClick = () => {
    const link = getWhatsAppLink();
    window.open(link, "_blank");
  };

  return (
    <CustomButton
      className={whatsappButton}
      shape="circle"
      size="large"
      onClick={handleClick}
      icon={<IconWrapper size={56} icon={Whastsapp} />}
    />
  );
};

export default WhastsappButton;
