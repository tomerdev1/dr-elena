import MainPage from "./mainPage/MainPage";
import i18next from "@/i18n";
import { I18nextProvider } from "react-i18next";

const Home = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <MainPage />
    </I18nextProvider>
  );
};

export default Home;
