// import libraries
import styled from "styled-components";

export const Sup = styled.sup`
  color: ${(props) => props.theme.colors.text.accent};
  // hack to prevent it from changing surrounding text
  vertical-align: baseline;
  position: relative;
  top: -0.4em;
`;

export const Anchor = styled.a`
  color: ${(props) => props.theme.colors.text.accent};
  text-decoration: underline;
  text-decoration-thickness: 0.75px;
  text-underline-offset: 2px;
  pointer-events: all;
  margin-left: 1px;

  font-family: ${(props) => props.theme.fonts.eb_garamond} !important;
  font-size: 14px !important;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    text-decoration: none;
    pointer-events: none;
  }
`;
