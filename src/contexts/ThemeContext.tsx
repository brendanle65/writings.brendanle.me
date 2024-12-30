// import libraries
import { ReactNode, createContext, useState, useLayoutEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// import other
import { THEME } from "@constants/theme";

// Should be the same as in `public/scripts/theme.js`
const themes = ["light", "dark", "calm"] as const;

type ThemeName = (typeof themes)[number];

/** Defines the shape of the context's value. */
interface ThemeContextProps {
  // Names of themes
  theme: {
    current: ThemeName;
    next: ThemeName;
  };

  // Function to cycle through the themes
  cycle: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const themeContext = createContext<ThemeContextProps | null>(null);

/**
 * See `public/scripts/theme.js` for the reason we are not passing different theme objects directly
 * to the styled-components provider, but instead using a `className` on the `body` element.
 *
 * Note: We don't mind if `theme.current` and `theme.next` flicker, as any DOM elements
 * that consume the theme won't be visible on the initial render (e.g., transitioning from opacity 0 to 1).
 *
 * @provider
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeContextProps["theme"]>({
    current: themes[0],
    next: themes[1],
  });

  // Initialize theme depending on preferences loaded on body tag.
  useLayoutEffect(() => {
    const body = document.querySelector("body");

    themes.forEach((name) => {
      if (body.classList.contains(name)) {
        setTheme({
          current: name,
          next: _next(name),
        });

        return;
      }
    });
  }, []);

  /**
   * Function to cycle between themes and save that preference.
   */
  function cycle() {
    const body = document.querySelector("body");

    // Add a transition when cycling themes.
    // Applying the transition earlier may cause a visual bug during initialization,
    // where the transition is visible when the theme is first set.
    body.classList.add("transition");

    const newTheme = {
      current: _next(theme.current),
      next: _next(theme.current, 2),
    };

    body.classList.remove(theme.current);
    body.classList.add(newTheme.current);
    localStorage.setItem("theme", newTheme.current);
    setTheme(newTheme);
  }

  /**
   * Helper function to get the next theme in cycle.
   *
   * @private
   */
  function _next(name: ThemeName, step = 1) {
    const idx = (themes.indexOf(name) + step) % themes.length;
    return themes[idx];
  }

  return (
    <themeContext.Provider value={{ theme, cycle }}>
      <StyledThemeProvider theme={THEME}>{children}</StyledThemeProvider>
    </themeContext.Provider>
  );
}
