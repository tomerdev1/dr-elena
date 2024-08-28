import React from "react";
import { LanguageContext } from "../context/context";

export const useLanguageContext = () => {
  const languageContext = React.useContext(LanguageContext);
  if (languageContext === undefined) {
    throw new Error(
      "useLanguageContext must be inside a LanguageContextProvider"
    );
  }
  return languageContext;
};
