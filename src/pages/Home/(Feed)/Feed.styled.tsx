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

export const Post = styled.div<{ $font: any }>`
  font-family: ${(props) => props.theme.fonts[props.$font]};
  overflow: hidden;
`;

export const PostList = styled.ul`
  & > * {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-family: inherit;
`;

export const Description = styled.p`
  margin-top: 4px;
  font-size: 16px;
  font-family: inherit;
`;
