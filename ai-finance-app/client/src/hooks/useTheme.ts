import { useState, useEffect } from "react";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return savedTheme ? savedTheme === "dark" : prefersDark;
};

export const useTheme = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggle = () => {
    setIsDark((prev) => !prev);
  };

  const setDarkMode = () => {
    setIsDark(true);
  };

  const setLightMode = () => {
    setIsDark(false);
  };

  return { isDark, toggle, setDarkMode, setLightMode };
};
