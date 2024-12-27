// import libraries
import { createContext, useState, ReactNode, useLayoutEffect } from "react";
import { ThemeProvider } from "styled-components";

// import other
import { themes } from "@constants/themes";

/** Defines the shape of the context's value. */
interface AppStateContextProps {
  // Function to toggle theme between light and dark
  toggleTheme: () => void;
}

interface AppStateProviderProps {
  children: ReactNode;
}

export const appStateContext = createContext<AppStateContextProps | null>(null);

/**
 * Wraps the provided children in a context provider, sharing the current app state
 * (data to persist between pages) and a function to update it accessible to descendant components.
 *
 * @provider
 */
export function AppStateProvider({ children }: AppStateProviderProps) {
  const [themeName, setThemeName] = useState<keyof typeof themes>("light");

  // Get the theme from storage; if none is found, check the user's preference; otherwise, default to light
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setThemeName(savedTheme as keyof typeof themes);
    } else if (prefersDark) {
      setThemeName("dark");
    }
  }, []);

  // helper function to toggle between light and dark themes
  const toggleTheme = () => {
    const updatedTheme = themeName === "light" ? "dark" : "light";
    setThemeName(updatedTheme);
    localStorage.setItem("theme", themeName);
  };

  return (
    <appStateContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>
    </appStateContext.Provider>
  );
}
