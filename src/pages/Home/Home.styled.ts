// import libraries
import styled from "styled-components";

export const Fixed = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    display: flex;
    width: calc(100vw - ${(props) => props.theme.frame.laptop.x} * 2);
    position: fixed;
    left: ${(props) => props.theme.frame.laptop.x};
    bottom: ${(props) => props.theme.frame.laptop.y};
    pointer-events: none;
    justify-content: space-between;
  }
`;

export const Aside = styled.aside`
  width: calc((100% - ${(props) => props.theme.frame.laptop.w}) / 2);
  pointer-events: all;

  &:nth-child(1) {
    padding-right: 32px;
  }

  &:nth-child(2) {
    padding-left: 32px;
  }
`;
