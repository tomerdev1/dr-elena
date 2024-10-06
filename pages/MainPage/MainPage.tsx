import { cn } from "@/lib/utils";
import styles from "./MainPage.module.scss";
import { useLanguageContext } from "../hooks/useLanguageContext";
import Intro from "../components/intro/intro";
import Treatments from "../components/treatmets/treatments";
import Header from "../components/header/Header";
import SecondIntro from "../components/secondIntro/secondIntro";
import WhastsappButton from "../components/common/button/whatsapp/whatsappButton";
import ContactUs from "../components/contactUs/contactUs";
import Comments from "../components/reviews/reviews";
import Reviews from "../components/reviews/reviews";
import Credits from "../components/credits/credits";

const MainPage: React.FC = () => {
  const { app, rtl } = styles;
  const { language } = useLanguageContext();
  return (
    <div className={cn(app, language == "hebrew" && rtl)}>
      <Header />
      <WhastsappButton />
      <Intro />
      <SecondIntro />
      <Treatments />
      <Reviews />
      <ContactUs />
      <Credits />
    </div>
  );
};

export default MainPage;
