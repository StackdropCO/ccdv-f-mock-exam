import { useCallback, useEffect, useState } from "react";
import { getStoredTheme, getSystemTheme, storeTheme, type Theme } from "../lib/theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme() ?? getSystemTheme());
  const [hasExplicitPreference, setHasExplicitPreference] = useState(() => getStoredTheme() !== null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (hasExplicitPreference || typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => setTheme(e.matches ? "dark" : "light");
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [hasExplicitPreference]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      storeTheme(next);
      setHasExplicitPreference(true);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
