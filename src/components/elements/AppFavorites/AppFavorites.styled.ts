// import libraries
import styled, { DefaultTheme } from "styled-components";
import NextLink from "next/link";

// import other
import { AppFavoriteProps } from "./AppFavorites";

type SizeProp = AppFavoriteProps["size"];

export const Container = styled.div``;

export const Heading = styled.div<{ $size: SizeProp }>`
  font-size: ${(props) => (props.$size === "small" ? "16px" : "24px")};
  margin-bottom: ${(props) => (props.$size === "small" ? "4px" : "16px")};
  color: ${(props) => props.theme.colors.text.accent};
`;

export const List = styled.ul<{ $size: SizeProp }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$size === "small" ? "4px" : "16px")};
  font-size: ${(props) => (props.$size === "small" ? "16px" : "32px")};
`;

export const Link = styled(NextLink)<{ $font: keyof DefaultTheme["fonts"]; $size: SizeProp }>`
  display: block;
  font-family: ${(props) => props.theme.fonts[props.$font]};
  transition: all 0.2s ease-out;

  &:hover {
    transform: translate(${(props) => (props.$size === "small" ? "-5px" : "-35px")}) scale(1.125);
  }
`;
