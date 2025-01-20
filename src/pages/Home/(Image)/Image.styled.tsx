// import libraries
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3; // change to prop later
  margin-bottom: 8px; // put in parent later
`;

export const Cell = styled.div`
  background-color: ${(props) => props.theme.colors.body};

  // better way to prevent flicker
  transition-property: background-color;
  transition-duration: ${(props) => props.theme.transitions.theme.duration};
  transition-timing-function: ${(props) => props.theme.transitions.theme.easing};
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div<{ $col: number; $row: number }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$col}, 1fr);
  grid-template-rows: repeat(${(props) => props.$row}, 1fr);
`;
