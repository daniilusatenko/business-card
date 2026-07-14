import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used indoors ThemeProvider");
  }
  return context;
}
