import { createContext, useContext, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");

  function toggle() {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  }

  function t(path) {
    const keys = path.split(".");
    let value = translations[lang];

    for (const k of keys) {
      value = value[k];
    }

    return value;
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
