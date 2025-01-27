// import libraries
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Index = styled.a`
  margin-top: 0.5px;
  margin-right: 4px;
  color: inherit;
  text-decoration: underline;
  pointer-events: all;
  text-decoration-thickness: 0.75px;
  text-underline-offset: 2px;
  /* font-family: inherit !important; */
  font-family: ${(props) => props.theme.fonts.eb_garamond};
`;

export const Container = styled.li`
  color: ${(props) => props.theme.colors.text.accent};
  font-family: ${(props) => props.theme.fonts.cormorant_garamond};
  line-height: 140%;
`;

export const Text = styled.span`
  color: inherit;
  font-family: inherit;
`;
