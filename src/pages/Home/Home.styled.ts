// import libraries
import styled from "styled-components";

import { AppSocials, AppFavorites } from "@components/elements";

/** got ahead of myself - ignore this chicken scratch */

export const Latest = styled.h1`
  margin-top: 42px;
  font-size: 24px;
`;

export const Post = styled.div<{ $font: any }>`
  font-family: ${(props) => props.theme.fonts[props.$font]};
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 32px;
  font-family: inherit;
`;

export const Blurb = styled.p`
  margin-top: 4px;
  font-size: 16px;
  font-family: inherit;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: max-content;
`;

export const Legal = styled.div`
  margin-top: 48px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
`;

export const Favorites = styled(AppFavorites)`
  position: fixed;
  left: 96px;
  bottom: 48px;
`;

export const Socials = styled(AppSocials)`
  position: fixed;
  right: 96px;
  bottom: 48px;
`;
