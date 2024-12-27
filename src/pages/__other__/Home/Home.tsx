// import libraries
import { useContext } from "react";

// import other
import { styleContext } from "@contexts/StyleContext";

// import styled components
import * as Styled from "./Home.components";

/**
 * The home page.
 *
 * @returns {React.ReactElement} A index page.
 * @page
 */
export function Home() {
  const { toggleTheme } = useContext(styleContext);

  return (
    <>
      <Styled.Title>Hello World!</Styled.Title>
      <Styled.Toggle onClick={toggleTheme}>Click me to toggle theme!</Styled.Toggle>
    </>
  );
}
