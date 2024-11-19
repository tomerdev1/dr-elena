import Image from "next/image";
import styles from "./header.module.scss";
import { cn, getFlagIcon } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import CustomSelect from "../common/select/CustomSelect";

const Header: React.FC = () => {
  const {
    logoContainer,
    headerContainer,
    headerContainerMobile,
    selectContainer,
    selectOption,
    rtl,
  } = styles;
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const options = [
    {
      label: "עברית",
      value: "he",
      icon: getFlagIcon("he"),
      className: cn(selectOption, rtl),
    },
    {
      label: "English",
      value: "en",
      icon: getFlagIcon("en"),
      className: selectOption,
    },
    {
      label: "русский",
      value: "ru",
      icon: getFlagIcon("ru"),
      className: selectOption,
    },
  ];

  return (
    <div className={cn(headerContainer, headerContainerMobile)}>
      <div className={selectContainer}>
        <CustomSelect
          options={options}
          defaultValue={i18n.language}
          placeholder={i18n.language}
          onChange={changeLanguage}
        />
      </div>
      <div className={logoContainer}>
        <Image
          width={0}
          height={0}
          style={{ height: "100%", width: "auto", objectFit: "contain" }}
          src={"/assets/images/logo.png"}
          alt=""
          priority
          unoptimized
        />
      </div>
    </div>
  );
};

export default Header;
