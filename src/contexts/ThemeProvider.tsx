import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.body.className = `theme--${theme}`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="orbs">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="orb" />
        ))}
      </div>
      {children}
    </ThemeContext.Provider>
  );
}
