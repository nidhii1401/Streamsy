import { create } from "zustand";

// Get initial theme from localStorage or default to 'light'
const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "light";
  }
  return "light";
};

export const useThemeStore = create((set) => ({
  theme: getInitialTheme(),

  setTheme: (themeOption) => {
    localStorage.setItem("theme", themeOption.name);

    document.documentElement.setAttribute("data-theme", themeOption.name);

    set({ theme: themeOption.name });
  },
}));
