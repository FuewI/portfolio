import { useEffect } from "react";
import { usePersistentState } from "../hooks/usePersistentState";
import { translations } from "../i18n";
import { AppContext } from "./context";

export function AppProvider({ children }) {
  const [theme, setTheme] = usePersistentState("theme", "dark");
  const [lang, setLang] = usePersistentState("lang", "en");
  const t = translations[lang] ?? translations.en;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, setLang, t }}>
      {children}
    </AppContext.Provider>
  );
}
