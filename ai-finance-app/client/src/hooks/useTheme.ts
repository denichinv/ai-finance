import { useState, useEffect } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
    setMounted(true);
  }, []);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggle = () => {
    setIsDark((prev) => {
      applyTheme(!prev);
      return !prev;
    });
  };

  const setDarkMode = () => {
    setIsDark(true);
    applyTheme(true);
  };

  const setLightMode = () => {
    setIsDark(false);
    applyTheme(false);
  };

  return { isDark, toggle, setDarkMode, setLightMode, mounted };
};
