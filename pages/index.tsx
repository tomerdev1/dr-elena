import MainPage from "./mainPage/MainPage";
import i18next from "@/i18n";
import { I18nextProvider } from "react-i18next";

const Home = () => {
  // useEffect(() => {
  //   // Set the default language on initial load if no language is stored in localStorage
  //   const storedLanguage = localStorage.getItem("language");
  //   if (!storedLanguage) {
  //     localStorage.setItem("language", "he");
  //   }
  // }, []);
  return (
    <I18nextProvider i18n={i18next}>
      <MainPage />
    </I18nextProvider>
  );
};

export default Home;
