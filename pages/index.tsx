import MainPage from "./mainPage/MainPage";
import { LanguageProvider } from "./providers/LanguageProvider";
import "./translations/i18n";

const Home: React.FC = () => {
  return (
    <LanguageProvider>
      <MainPage />
    </LanguageProvider>
  );
};

export default Home;
