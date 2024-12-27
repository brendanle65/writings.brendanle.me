/**
 * Function to toggle between light and dark themes and save that preference.
 * See `public/scripts/theme.js` for why we are toggling the body instead of react state.
 *
 * @utility
 */
export function toggleTheme() {
  const body = document.querySelector("body");
  body.classList.add("transition");

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
}
