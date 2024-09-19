import { useTranslation } from "react-i18next";
import styles from "./getInTouch.module.scss";
import IconWrapper from "../../common/icon/icon";
import AddressIcon from "@/public/assets/icons/getInTouch/address";
import Phone from "@/public/assets/icons/getInTouch/phone";
import Clock from "@/public/assets/icons/secondIntro/clock";
import Rate from "@/public/assets/icons/getInTouch/rate";
import CustomButtom from "../../common/button/customButton";
import { cn } from "@/lib/utils";

const GetInTouch: React.FC = () => {
  const {
    getInTouchContainer,
    title,
    content,
    item,
    button,
    circle,
    clickable,
  } = styles;
  const { t } = useTranslation();
  const ReviewUs = () => {
    return (
      <div className={cn(item)}>
        <CustomButtom
          className={cn(button, clickable)}
          size="small"
          type="link"
          href="https://search.google.com/local/writereview?placeid=ChIJrRkl1oazAhURANu_nIoUn5I"
        >
          <IconWrapper icon={Rate} size={42} />
          <span>{t("contactUs.review.text")}</span>
        </CustomButtom>
      </div>
    );
  };
  const PhoneNumber = () => {
    return (
      <div className={cn(item)}>
        <CustomButtom
          className={cn(button, clickable)}
          size="small"
          type="link"
          href="tel:+972000000000"
        >
          <IconWrapper icon={Phone} size={42} />
          <span>053-551-8727</span>
        </CustomButtom>
      </div>
    );
  };
  const WorkingHours = () => {
    return (
      <div className={item}>
        <IconWrapper icon={Clock} size={42} />
        <span>{t("contactUs.workingHours.text")}</span>
      </div>
    );
  };
  const Address = () => {
    return (
      <div className={cn(item)}>
        <CustomButtom
          className={cn(button, clickable)}
          size="small"
          type="link"
          href="https://search.google.com/local/writereview?placeid=ChIJrRkl1oazAhURANu_nIoUn5I"
        >
          <IconWrapper icon={AddressIcon} size={42} />
          <span>{t("contactUs.address.text")}</span>
        </CustomButtom>
      </div>
    );
  };
  return (
    <div className={getInTouchContainer}>
      <span className={title}>{t("contactUs.title")}</span>
      <div className={content}>
        <div className={circle} />
        <ReviewUs />
        <PhoneNumber />
        <WorkingHours />
        <Address />
      </div>
    </div>
  );
};
export default GetInTouch;
