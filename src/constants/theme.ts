const fonts = {
  eb_garamond: "var(--font-eb-garamond)",
  cormorant_garamond: "var(--font-cormorant-garamond)",
  mazius: "var(--font-mazius)",
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

const spacing = {
  xss: "2px", // extra extra small
  xs: "4px", // extra small
  sm: "8px", // small
  md: "16px", // medium
  lg: "24px", // large
  xl: "32px", // extra large
  xxl: "48px", // extra extra large
};

const frame: Record<keyof typeof screens, { x: string; y: string }> = {
  mobile: {
    x: spacing.md,
    y: spacing.lg,
  },
  tablet: {
    x: spacing.xl,
    y: spacing.xl,
  },
  laptop: {
    x: "96px", // spacing is unique to frame, hence why we define it here and not in 'spacing' object.
    y: "48px", // also unique
  },
};

const radii = {
  full: "50%",
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
  body: "var(--theme-body)",
  text: {
    500: "var(--theme-text-500)",
    1000: "var(--theme-text-1000)",
  },
  divider: "var(--theme-divider)",
};

const transitions = {
  theme: {
    duration: "1s",
    easing: "ease-out",
  },
};

export const theme = {
  colors,
  transitions,
  shadows,
  radii,
  fonts,
  screens,
  spacing,
  frame,
};

export type Theme = typeof theme;
