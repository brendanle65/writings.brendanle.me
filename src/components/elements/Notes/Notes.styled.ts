// import libraries
import styled from "styled-components";

// import other
import { Sidenotes as Side } from "./(Sidenotes)/Sidenotes";
import { Footnotes as Foot } from "./(Footnotes)/Footnotes";

export const Sidenotes = styled(Side)`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    display: block;
  }
`;

export const Footnotes = styled(Foot)`
  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    display: none !important;
  }
`;
