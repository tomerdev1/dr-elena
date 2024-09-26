import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "./english/translation.json";
import translationHebrew from "./hebrew/translation.json";
import translationRussian from "./russian/translation.json";

const resources = {
  english: {
    translation: translationEnglish,
  },
  hebrew: {
    translation: translationHebrew,
  },
  russian: {
    translation: translationRussian,
  },
};

export const getSavedLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") || "hebrew";
  }
  return "hebrew";
};

i18next.use(initReactI18next).init({
  resources,
  lng: getSavedLanguage(),
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: "hebrew",
});

i18next.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lng);
  }
});

export default i18next;
