// import libraries
import styled from "styled-components";

// import other
import { CycleThemeButton } from "../(CycleThemeButton)/CycleThemeButton";

export const Menu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${(props) => `${props.theme.frame.mobile.y} ${props.theme.frame.mobile.x}`};

  @media (min-width: ${(props) => props.theme.screens.tablet.start}) {
    padding: ${(props) => `${props.theme.frame.tablet.y} ${props.theme.frame.tablet.x}`};
  }

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    display: none;
  }
`;

export const MenuBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: ${(props) => props.theme.colors.menu};
  transition-property: background-color;
  transition-duration: ${(props) => props.theme.transitions.theme.duration};
  transition-timing-function: ${(props) => props.theme.transitions.theme.easing};
  z-index: -1;
`;

export const CloseMenuButton = styled.button`
  font-weight: 500;
  border-bottom: 1.5px solid ${(props) => props.theme.colors.text.primary};
  font-size: 20px;
`;

export const MenuHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuLinks = styled.div`
  padding: 64px 0;
  text-align: right;

  @media (min-width: ${(props) => props.theme.screens.tablet.start}) {
    text-align: center;
  }
`;

export const ThemeButton = styled(CycleThemeButton)`
  font-size: 20px;
`;
