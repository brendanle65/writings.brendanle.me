// import other
import { toggleTheme } from "@utils/toggleTheme";

// import styled components
import * as Styled from "./Home.components";

/**
 * The home page.
 *
 * @returns {React.ReactElement} A index page.
 * @page
 */
export function Home() {
  return (
    <>
      <Styled.Title>Hello World!</Styled.Title>
      <Styled.Toggle onClick={toggleTheme}>Click me to toggle theme!</Styled.Toggle>
    </>
  );
}
