import { cn } from "@/lib/utils";
import Header from "../components/Header/Header";
import styles from "./MainPage.module.scss";
import { useLanguageContext } from "../hooks/useLanguageContext";
import Intro from "../components/Intro/intro";

const MainPage: React.FC = () => {
  const { app, rtl } = styles;
  const { language } = useLanguageContext();
  return (
    <div className={cn(app, language == "hebrew" && rtl)}>
      <Header />
      <Intro />
    </div>
  );
};

export default MainPage;
