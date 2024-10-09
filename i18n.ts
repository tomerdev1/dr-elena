import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEnglish from "./translations/english/translation.json";
import translationHebrew from "./translations/hebrew/translation.json";
import translationRussian from "./translations/russian/translation.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: translationEnglish,
  },
  he: {
    translation: translationHebrew,
  },
  ru: {
    translation: translationRussian,
  },
};

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    supportedLngs: ["he", "en", "ru"],
    fallbackLng: "he",
    resources,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
