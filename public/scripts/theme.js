// themes to cycle through in this order
// should be the same as in `src/contexts/ThemeContext.tsx`
const THEMES = ["light", "dark", "calm"];

// this script detects which theme to use before the browser paints (prevents flicker)
const body = document.querySelector("body");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme && THEMES.includes(savedTheme)) {
  body.classList.add(savedTheme);
} else if (prefersDark) {
  body.classList.add("dark");
} else {
  body.classList.add("light");
}

/**
 * We toggle which CSS variables are activated by toggling a class name instead of using React state
 * because we cannot access the DOM (document or localStorage) during initialization.
 * Calling `useState(() => localStorage.getItem("theme"))` would cause an error.
 *
 * Accessing the DOM or localStorage inside a `useEffect` or `useLayoutEffect` would lead to a flicker,
 * as the theme would change after the browser's first paint, resulting in a visible flash of incorrect styling.
 */
