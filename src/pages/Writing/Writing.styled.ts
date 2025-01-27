// import libraries
import styled from "styled-components";

// import link
import Link from "next/link";

export const Article = styled.article``;

export const Aside = styled.aside`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    display: block;
    width: max-content;
    transform: translateX(calc(-100% - 48px));
    position: sticky;
    height: 0;
  }
`;

export const HomeLinkAside = styled(Aside)`
  top: 32px;
`;

export const NotesButtonAside = styled(Aside)`
  top: 72px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
`;

export const Tag = styled(Link)`
  font-size: 16px;
  padding: 6px 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    background: red;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition-property: background-color, color;
    transition-duration: ${(props) => props.theme.transitions.theme.duration};
    transition-timing-function: ${(props) => props.theme.transitions.theme.easing};
  }

  &:hover::after {
    opacity: 0.8;
    filter: brightness(90%);
  }
`;

export const Type = styled(Tag)`
  color: ${(props) => props.theme.colors.body};

  &::after {
    background: ${(props) => props.theme.colors.text.primary};
    border: 1px solid ${(props) => props.theme.colors.text.primary};
  }
`;

export const Theme = styled(Tag)`
  color: ${(props) => props.theme.colors.text.primary};

  &::after {
    background: ${(props) => props.theme.colors.body};
    border: 1px solid ${(props) => props.theme.colors.text.primary};
  }
`;

export const Title = styled.h1`
  margin-top: 8px;
  font-size: 40px;
  font-weight: 500;
  line-height: 100%;
`;

export const Description = styled.p`
  margin-top: 4px;
  line-height: 150%;
  font-size: 18px;
`;

export const Metadata = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 100%;
  font-size: 16px;
  margin-top: 16px;
`;

export const Author = styled.div`
  margin-right: auto;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.text.muted};
`;

export const Time = styled.time`
  color: ${(props) => props.theme.colors.text.muted};
`;

export const Read = styled.div`
  color: ${(props) => props.theme.colors.text.muted};
`;

export const Figure = styled.figure`
  margin-top: 12px;
  margin-bottom: 32px;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
`;

export const Caption = styled.figcaption`
  margin-top: 4px;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme.colors.text.muted};
`;

export const Body = styled.div`
  line-height: 140%;
  font-size: 17px;

  p:not(:first-child) {
    margin-top: 16px;
  }

  i {
    font-style: italic;
  }
`;

export const NotesContainer = styled.div`
  margin-top: 32px;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    margin-top: 0;
  }
`;
