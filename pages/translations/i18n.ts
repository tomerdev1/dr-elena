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

i18next.use(initReactI18next).init({ resources, lng: "hebrew" });

export default i18next;
