import React, { ReactNode, useState } from "react";
import { LanguageContext } from "../context/context";

interface Props {
  children: ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState("hebrew");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
