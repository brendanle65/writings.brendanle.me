// import libraries
import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  gap: 12px;
  color: ${(props) => props.theme.colors.text.accent};
  font-family: var(--font-cormorant-garamond);
  position: absolute;
  margin-top: 5px;
  flex-shrink: 0;
`;

export const Line = styled.span`
  height: 0.5px;
  margin-top: 11px;
  margin-left: 20px;
`;

export const Stroke = styled.div`
  width: 20px;
  background: ${(props) => props.theme.colors.text.accent};
  height: 100%;
`;

export const Text = styled.span`
  width: 100%;
`;
