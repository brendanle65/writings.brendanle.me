// import libraries
import { createContext, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

// import other
import { theme } from "@constants/theme";

/** Defines the shape of the context's value. */
interface StyleContextProps {
  // Function to toggle theme between light and dark
  toggleTheme: () => void;
}

interface StyleProviderProps {
  children: ReactNode;
}

export const styleContext = createContext<StyleContextProps | null>(null);

/**
 * Wraps the provided children in a context provider, sharing theming to styled-components
 * and a function to toggle it between "light" and "dark" to descendant components.
 *
 * @provider
 */
export function StyleProvider({ children }: StyleProviderProps) {
  // Function to toggle between light and dark themes and save that preference
  // See `public/scripts/theme.js` for why we are toggling the body instead of react state.
  const toggleTheme = () => {
    const body = document.querySelector("body");
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <styleContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </styleContext.Provider>
  );
}
