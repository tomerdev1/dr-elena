import { cn } from "@/lib/utils";
import Header from "../components/header/header";
import styles from "./MainPage.module.scss";
import { useLanguageContext } from "../hooks/useLanguageContext";
import Intro from "../components/intro/intro";
import Treatments from "../components/treatmets/treatments";

const MainPage: React.FC = () => {
  const { app, rtl } = styles;
  const { language } = useLanguageContext();
  return (
    <div className={cn(app, language == "hebrew" && rtl)}>
      <Header />
      <Intro />
      <Treatments />
    </div>
  );
};

export default MainPage;
