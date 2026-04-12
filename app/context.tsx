"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface AppContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  lang: "es" | "en";
  setLang: (value: "es" | "en") => void;
}

const AppContext = createContext<AppContextType>({
  darkMode: false,
  setDarkMode: () => {},
  lang: "es",
  setLang: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.backgroundColor = "#0D1F1A";
      document.body.style.backgroundColor = "#0D1F1A";
      document.body.style.color = "#ffffff";
    } else {
      document.documentElement.style.backgroundColor = "#ffffff";
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#1a1a1a";
    }
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}