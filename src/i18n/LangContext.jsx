import { createContext, useContext, useMemo, useState } from "react";
import { translations } from "./translations";

const LangContext = createContext(null);
const KEY = "portfolio:lang";

function getInitialLang() {
  const saved = localStorage.getItem(KEY);
  if (saved === "fr" || saved === "en") return saved;
  return "en";
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  function setLang(next) {
    setLangState(next);
    localStorage.setItem(KEY, next);
  }

  const value = useMemo(() => {
    const t = translations[lang];
    return { lang, setLang, t };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
