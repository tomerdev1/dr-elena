import { cn } from "@/lib/utils";
import styles from "./MainPage.module.scss";
import { useLanguageContext } from "../hooks/useLanguageContext";
import Intro from "../components/intro/intro";
import Treatments from "../components/treatmets/treatments";
import Header from "../components/header/Header";
import SecondIntro from "../components/secondIntro/secondIntro";

const MainPage: React.FC = () => {
  const { app, rtl } = styles;
  const { language } = useLanguageContext();
  return (
    <div className={cn(app, language == "hebrew" && rtl)}>
      <Header />
      <Intro />
      <SecondIntro />
      <Treatments />
    </div>
  );
};

export default MainPage;
