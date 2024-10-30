import styles from "./MainPage.module.scss";
import { cn } from "@/lib/utils";
import WhastsappButton from "@/pages/components/common/button/whatsapp/whatsappButton";
import Intro from "@/pages/components/intro/intro";
import SecondIntro from "@/pages/components/secondIntro/secondIntro";
import Treatments from "@/pages/components/treatmets/treatments";
import Reviews from "@/pages/components/reviews/reviews";
import ContactUs from "@/pages/components/contactUs/contactUs";
import Credits from "@/pages/components/credits/credits";
import { useTranslation } from "react-i18next";
import React from "react";
import Header from "@/pages/components/header/header";
import Script from "next/script";
import AccessibilityStatement from "../AccessibilityStatement/accessibilityStatement";

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
      <Script
        src="https://drsk.co.il/nagishli.js?v=2.3"
        charSet="utf-8"
        defer
        onError={(e) => console.error("Error loading script:", e)}
        onLoad={() => console.log("Nagishli script loaded successfully")}
      ></Script>
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
