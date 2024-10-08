"use-client";
import styles from "./MainPage.module.scss";
import { cn } from "@/lib/utils";
import WhastsappButton from "@/pages/components2/common/button/whatsapp/whatsappButton";
import Intro from "@/pages/components2/intro/intro";
import SecondIntro from "@/pages/components2/secondIntro/secondIntro";
import Treatments from "@/pages/components2/treatmets/treatments";
import Reviews from "@/pages/components2/reviews/reviews";
import ContactUs from "@/pages/components2/contactUs/contactUs";
import Credits from "@/pages/components2/credits/credits";
import { useTranslation } from "react-i18next";
import React from "react";
import Header from "@/pages/components2/header/header";

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
