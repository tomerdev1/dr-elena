"use-client";
import i18n from "@/i18n";
import styles from "./MainPage.module.scss";
import { cn } from "@/lib/utils";
import Header from "../components/header/header";
import WhastsappButton from "../components/common/button/whatsapp/whatsappButton";
import Intro from "../components/intro/intro";
import SecondIntro from "../components/secondIntro/secondIntro";
import Treatments from "../components/treatmets/treatments";
import Reviews from "../components/reviews/reviews";
import ContactUs from "../components/contactUs/contactUs";
import Credits from "../components/credits/credits";

const MainPage: React.FC = () => {
  const { app, rtl } = styles;
  const direction = i18n.dir();

  return (
    <div className={cn(app, direction == "rtl" && rtl)}>
      <Header />
      <WhastsappButton />
      <Intro />
      <SecondIntro />
      {/* <Treatments /> */}
      <Reviews />
      <ContactUs />
      <Credits />
    </div>
  );
};

export default MainPage;
