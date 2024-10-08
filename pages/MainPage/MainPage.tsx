"use-client";
import styles from "./MainPage.module.scss";
import { cn } from "@/lib/utils";
import Header from "../components/common/header/header";
import WhastsappButton from "../components/common/button/whatsapp/whatsappButton";
import Intro from "../components/intro/intro";
import SecondIntro from "../components/secondIntro/secondIntro";
import Treatments from "../components/treatmets/treatments";
import Reviews from "../components/reviews/reviews";
import ContactUs from "../components/contactUs/contactUs";
import Credits from "../components/credits/credits";
import { useTranslation } from "react-i18next";
import React from "react";

const MainPage: React.FC = () => {
  const { app, rtl } = styles;

  const { i18n } = useTranslation();

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true); // Ensures the component renders only on the client side
  }, []);

  if (!isClient) {
    return null; // Prevent SSR of this component
  }

  return (
    <div className={cn(app, i18n.language == "he" && rtl)}>
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
