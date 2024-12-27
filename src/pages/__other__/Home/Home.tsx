// import libraries
import { useContext } from "react";

// import other
import { appStateContext } from "@contexts/AppStateContext";

// import styled components
import * as Styled from "./Home.components";

/**
 * The home page.
 *
 * @returns {React.ReactElement} A index page.
 * @page
 */
export function Home() {
  const { toggleTheme } = useContext(appStateContext);

  return <Styled.Greeting onClick={toggleTheme}>Hello World</Styled.Greeting>;
}

// todo: image optiomization
