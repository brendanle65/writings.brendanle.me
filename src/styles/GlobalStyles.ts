// import libraries
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  // 1. Set default font family
  *,
  *::before,
  *::after {
    font-family: ${(props) => props.theme.fonts.eb_garamond};
  }

  // 2. Set background color
  html {
    background-color: ${(props) => props.theme.colors.body};
    color: ${(props) => props.theme.colors.text[500]};
  }

  // 3. Set animation when theme changes
  html {
    transition-property: color, background-color;
    transition-duration: 1s;
  }

  // 4. Force body to span at least 100vh;
  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  // 5. Set correct frame spacing
  body {
    padding: ${(props) => `${props.theme.frame.mobile.y} ${props.theme.frame.mobile.x}`};

    @media (min-width: ${(props) => props.theme.screens.tablet.start}) {
      padding: ${(props) => `${props.theme.frame.tablet.y} ${props.theme.frame.tablet.x}`};
    }
    @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
      padding: ${(props) => `${props.theme.frame.laptop.y} ${props.theme.frame.laptop.x}`};
    }
  }
`;
