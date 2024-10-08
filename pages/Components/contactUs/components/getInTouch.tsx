import { useTranslation } from "react-i18next";
import styles from "./getInTouch.module.scss";
import IconWrapper from "../../common/icon/icon";
import CustomButton from "../../common/button/customButton";
import { cn } from "@/lib/utils";
import SocialNetworks from "../../socialNetworks/socialNetworks";
import useIsMobile from "@/hooks/useIsMobile";
import { Icons } from "@/public/assets/icons/icons";

const GetInTouch: React.FC = () => {
  const { getInTouchContainer, content, item, button, circle, clickable } =
    styles;
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const ReviewUs = () => {
    return (
      <div className={cn(item)}>
        <CustomButton
          className={cn(button, clickable)}
          size="small"
          type="link"
          href="https://www.facebook.com/profile.php?id=61551627340036&sk=reviews"
        >
          <IconWrapper icon={Icons.rate} size={42} />
          <span>{t("contactUs.review.text")}</span>
        </CustomButton>
      </div>
    );
  };
  const PhoneNumber = () => {
    return (
      <div className={cn(item)}>
        <CustomButton
          className={cn(button, clickable)}
          size="small"
          type="link"
          href="tel:+972535518727"
        >
          <IconWrapper icon={Icons.phone} size={42} />
          <span>053-551-8727</span>
        </CustomButton>
      </div>
    );
  };
  const WorkingHours = () => {
    return (
      <div className={item}>
        <IconWrapper icon={Icons.clock} size={42} />
        <span>{t("contactUs.workingHours.text")}</span>
      </div>
    );
  };
  const Address = () => {
    return (
      <div className={cn(item)}>
        <CustomButton
          className={cn(button, clickable)}
          size="small"
          type="link"
          href="https://maps.app.goo.gl/jd23mKARWnwR5tTh9"
        >
          <IconWrapper icon={Icons.addressIcon} size={42} />
          <span>{t("contactUs.address.text")}</span>
        </CustomButton>
      </div>
    );
  };
  return (
    <div className={getInTouchContainer}>
      <div className={content}>
        <div className={circle} />
        <ReviewUs />
        <PhoneNumber />
        <WorkingHours />
        <Address />
      </div>
      {!isMobile && <SocialNetworks />}
    </div>
  );
};
export default GetInTouch;
