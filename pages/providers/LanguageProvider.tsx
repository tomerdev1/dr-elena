import React, { ReactNode, useState, useEffect } from "react";
import { LanguageContext } from "../context/context";

interface Props {
  children: ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<string>("hebrew");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "hebrew";
    setLanguage(savedLanguage);
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
