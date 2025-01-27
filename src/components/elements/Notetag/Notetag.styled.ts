// import libraries
import styled from "styled-components";

export const Sup = styled.sup`
  color: ${(props) => props.theme.colors.text.accent};
  vertical-align: super;
  font-size: 14px;
  line-height: 0px;
`;

export const Anchor = styled.a`
  color: ${(props) => props.theme.colors.text.accent};
  text-decoration: underline;
  text-decoration-thickness: 0.75px;
  text-underline-offset: 2px;
  pointer-events: all;
  margin-left: 1px;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    text-decoration: none;
    pointer-events: none;
  }
`;
