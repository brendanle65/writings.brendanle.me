// import libraries
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  // 1. Set default font family
  *,
  *::before,
  *::after {
    font-family: ${(props) => props.theme.fonts.eb_garamond};
  }

  // 2. Set colors
  body {
    color: ${(props) => props.theme.colors.text.primary};
    background-color: ${(props) => props.theme.colors.body};
  }

  // 3. Force to fill screen
  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  // 4. Set correct frame spacing
  body {
    padding: ${(props) => `${props.theme.frame.mobile.y} ${props.theme.frame.mobile.x}`};

    @media (min-width: ${(props) => props.theme.screens.tablet.start}) {
      padding: ${(props) => `${props.theme.frame.tablet.y} ${props.theme.frame.tablet.x}`};
    }
    @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
      padding: ${(props) => `${props.theme.frame.laptop.y} ${props.theme.frame.laptop.x}`};
    }
  }

  // 5. Set base font-size
  body {
    font-size: 16px;
  }
`;
