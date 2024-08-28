import Image from "next/image";
import styles from "./Header.module.scss";
import { useLanguageContext } from "@/pages/hooks/useLanguageContext";
import CustomSelect from "../Common/Select/CustomSelect";
import { useTranslation } from "react-i18next";
const Header: React.FC = () => {
  const { headerContainer } = styles;
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
    <div className={headerContainer}>
      <Image
        width={300}
        height={0}
        style={{ height: "100%", width: "auto" }}
        src={"/assets/images/logo.jpg"}
        alt=""
        priority
      ></Image>
      <CustomSelect
        options={options}
        defaultValue={language}
        placeholder={language}
        onChange={handleChange}
      />
    </div>
  );
};

export default Header;
