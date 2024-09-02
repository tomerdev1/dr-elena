import Image from "next/image";
import styles from "./Header.module.scss";
import { useLanguageContext } from "@/pages/hooks/useLanguageContext";
import CustomSelect from "../common/Select/CustomSelect";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
const Header: React.FC = () => {
  const {
    logoContainer,
    headerContainer,
    headerContainerMobile,
    selectContainer,
  } = styles;
  const { language, setLanguage } = useLanguageContext();
  const { i18n } = useTranslation();
  const options = [
    {
      label: "עברית",
      value: "hebrew",
      emoji: "🇮🇱",
    },
    {
      label: "English",
      value: "english",
      emoji: "🇺🇸",
    },
    {
      label: "русский",
      value: "russian",
      emoji: "🇷🇺",
    },
  ];

  const handleChange = (value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <div className={cn(headerContainer, headerContainerMobile)}>
      <div className={selectContainer}>
        <CustomSelect
          options={options}
          defaultValue={language}
          placeholder={language}
          onChange={handleChange}
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
