import MainPage from "./MainPage/MainPage";
import { LanguageProvider } from "./providers/LanguageProvider";

const Home: React.FC = () => {
  return (
    <LanguageProvider>
      <MainPage />;
    </LanguageProvider>
  );
};

export default Home;
