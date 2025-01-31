// import types
import { InheritStyledProps } from "styled-components";

// import other
import { AppSocials } from "../AppSocials/AppSocials";

// import styled components
import * as Styled from "./AppFooter.styled";

/**
 * Displays copyright and attribution, as well as socials.
 *
 * @component
 */
export function AppFooter(props: InheritStyledProps) {
  return (
    <footer {...props}>
      <Styled.Legal {...props}>
        <small>© {new Date().getFullYear()} Brendan's Writings</small>
        <small>Designed in Figma and coded in VS Code, and by yours truly.</small>
      </Styled.Legal>
      <AppSocials size="small" align="center" />
    </footer>
  );
}
