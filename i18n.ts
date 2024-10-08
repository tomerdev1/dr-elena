import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "./translations/english/translation.json";
import translationHebrew from "./translations/hebrew/translation.json";
import translationRussian from "./translations/russian/translation.json";

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

export const getSavedLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") || "he";
  }
  return "he";
};

i18next.use(initReactI18next).init({
  resources,
  lng: getSavedLanguage(),
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: "he",
});

i18next.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lng);
  }
});

export default i18next;

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import translationEnglish from "./pages/translations/english/translation.json";
// import translationHebrew from "./pages/translations/hebrew/translation.json";
// import translationRussian from "./pages/translations/russian/translation.json";

// const resources = {
//   en: {
//     translation: translationEnglish,
//   },
//   he: {
//     translation: translationHebrew,
//   },
//   ru: {
//     translation: translationRussian,
//   },
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng:
//     typeof window !== "undefined"
//       ? localStorage.getItem("language") || "he"
//       : "he", // Default to 'he' on SSR
//   fallbackLng: "he",
//   interpolation: {
//     escapeValue: false, // React already escapes values
//   },
//   detection: {
//     // Ensures i18n detects language automatically
//     order: ["localStorage", "navigator"],
//     caches: ["localStorage"], // Store the language in localStorage
//   },
// });

// // This step might be unnecessary if `detection` is configured correctly.
// i18n.on("languageChanged", (lng) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("language", lng);
//   }
// });

// export default i18n;
