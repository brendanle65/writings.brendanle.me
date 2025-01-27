// import libraries
import { createGlobalStyle } from "styled-components";

export const ResetStyles = createGlobalStyle`
  // 1. Use a more-intuitive box-sizing model
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  // 2. Remove defaults
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-weight: 400;
    border: none;
    background: none;
    font-family: inherit;
    color: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    scroll-behavior: smooth;
    font-size: inherit;

    // 3. Improve media defaults
    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    // 4. Improve line wrapping 
    p {
      text-wrap: pretty;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-wrap: balance;
    }

    // 5. Remove default numbers and bullet points
    ul, li {
      list-style: none;
    }
  }
`;
