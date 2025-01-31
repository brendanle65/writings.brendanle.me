// import libraries
import styled from "styled-components";
import Link from "next/link";

// import other
import { CycleThemeButton } from "./(CycleThemeButton)/CycleThemeButton";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const OpenMenuButton = styled.button`
  font-weight: 500;
  border-bottom: 1.5px solid ${(props) => props.theme.colors.text.primary};
  font-size: 20px;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    display: none;
  }
`;

export const Logo = styled.div`
  font-family: ${(props) => props.theme.fonts.mazius_display};
  font-size: 30px;
  height: 30px;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    font-size: 35px;
    height: 35px;
  }
`;

export const AboutLink = styled(Link)`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    display: block;
  }
`;

export const PinnedThemeButton = styled(CycleThemeButton)`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    display: block;
    font-size: 14px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
  }
`;
