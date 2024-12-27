import { DefaultTheme } from "styled-components";

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

// we don't pass colors to theme directly, we set theme depending on light/dark and to role (body, text, etc.)
const _colors = {
  white: "#ffffff",
  black: "#000000",
};

const baseTheme = {
  fonts,
  screens,
  spacing,
  frame,
};

export type BaseTheme = typeof baseTheme;

const lightTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    body: _colors.white,
    text: {
      500: "#6b7280",
      1000: "#000000",
    },
    divider: "#d1d5db",
  },
};

const darkTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    body: _colors.black,
    text: {
      500: "#6b7280",
      1000: "#000000",
    },
    divider: "#d1d5db",
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
