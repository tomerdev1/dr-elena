import Image from "next/image";
import styles from "./Header.module.scss";
import CustomSelect from "../Common/Select/CustomSelect";
import { useContext } from "react";
import { LanguageContext } from "@/pages/context/context";
import { useLanguageContext } from "@/pages/hooks/useLanguageContext";
const Header: React.FC = () => {
  const { headerContainer } = styles;
  const { language, setLanguage } = useLanguageContext();
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
