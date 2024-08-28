import { cn } from "@/lib/utils";
import Header from "../Components/Header/Header";
import styles from "./MainPage.module.scss";
import { useContext } from "react";
import { LanguageContext } from "../context/context";
import { useLanguageContext } from "../hooks/useLanguageContext";

const MainPage: React.FC = () => {
  const { app, content, rtl } = styles;
  const { language } = useLanguageContext();
  return (
    <div className={cn(app, language == "hebrew" && rtl)}>
      <Header />
      <div className={content}>welcome</div>
    </div>
  );
};

export default MainPage;
