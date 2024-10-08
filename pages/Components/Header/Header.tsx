import Image from "next/image";
import styles from "./header.module.scss";
import CustomSelect from "../common/select/customSelect";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import useLocalStorage from "@/hooks/useLocalStorage";

const Header: React.FC = () => {
  const {
    logoContainer,
    headerContainer,
    headerContainerMobile,
    selectContainer,
  } = styles;
  const [language, setLanguage] = useLocalStorage("language", "he");
  const { i18n } = useTranslation();
  const options = [
    {
      label: "עברית",
      value: "he",
      emoji: "🇮🇱",
    },
    {
      label: "English",
      value: "en",
      emoji: "🇺🇸",
    },
    {
      label: "русский",
      value: "ru",
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
        {/* <CustomSelect
          options={options}
          defaultValue={language}
          placeholder={language}
          onChange={handleChange}
        /> */}
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
