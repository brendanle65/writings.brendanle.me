const fonts = {
  eb_garamond: "var(--font-eb-garamond)",
  cormorant_garamond: "var(--font-cormorant-garamond)",
  mazius: "var(--font-mazius)",
  coconat: "var(--font-coconat)",
  absans: "var(--font-absans)",
  noto_sans_mono: "var(--font-noto-sans-mono)",
};

const screens = {
  mobile: {
    start: "0px",
    end: "600px",
  },
  tablet: {
    start: "600px",
    end: "1024px",
  },
  laptop: {
    start: "1024px",
    end: "calc(infinity * 1px)",
  },
};

const frame: Record<keyof typeof screens, { x: string; y: string }> = {
  mobile: {
    x: "16px",
    y: "24px",
  },
  tablet: {
    x: "32px",
    y: "32px",
  },
  laptop: {
    x: "96px",
    y: "48px",
  },
};

const radii = {
  full: "50%",
};

const border = {
  sm: "0.5px", // small
  lg: "1.5px", // large
};

const shadows = {
  md: "drop-shadow(0 10px 8px rgba(163, 160, 160, 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))", // medium
};

// see `public/scripts/theme.js` for why we use css variables instead of defining the different themes here
const colors = {
  cursor: {
    background: "var(--theme-cursor-background)",
    filter: "var(--theme-cursor-filter)",
  },
  menu: "var(--theme-menu)",
  body: "var(--theme-body)",
  text: {
    primary: "var(--theme-text-primary)",
    accent: "var(--theme-text-accent)",
    grays: {
      500: "", // todo
      1000: "", // todo
    },
  },
  divider: "var(--theme-divider)",
};

const transitions = {
  theme: {
    duration: "var(--theme-transition-duration)",
    easing: "var(--theme-transition-easing)",
  },
};

export const THEME = {
  border,
  colors,
  transitions,
  shadows,
  radii,
  fonts,
  screens,
  frame,
};

export type ThemeType = typeof THEME;
