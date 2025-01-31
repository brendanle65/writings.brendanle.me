// import types
import { FontStyle } from "@typings/writing";

// import libraries
import styled from "styled-components";

export const GroupList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Date = styled.div`
  font-size: 18px;
  opacity: 0.7;
`;

export const Post = styled.div`
  overflow: hidden;
`;

export const PostList = styled.ul`
  & > * {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const TitleWrapper = styled.div`
  font-size: 32px;
`;

export const Title = styled.h1<{ $font: FontStyle }>`
  font-family: ${(props) => props.theme.fonts[props.$font.family]};
  font-weight: ${(props) => props.$font.weight};
  font-style: ${(props) => props.$font.style};
  font-size: ${(props) => props.$font.size};
`;

export const DescriptionWrapper = styled.div`
  font-size: 17px;
  line-height: 120%;
`;

export const Description = styled.p<{ $font: FontStyle }>`
  font-family: ${(props) => props.theme.fonts[props.$font.family]};
  font-weight: ${(props) => props.$font.weight};
  font-style: ${(props) => props.$font.style};
  font-size: ${(props) => props.$font.size};
`;
