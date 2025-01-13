// import libraries
import styled from "styled-components";

export const Center = styled.div`
  margin: 32px auto 0 auto;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    width: ${(props) => props.theme.frame.laptop.w};
    margin-top: 64px;
  }
`;

export const Main = styled.main`
  margin-bottom: 32px;

  @media (min-width: ${(props) => props.theme.screens.laptop.start}) {
    margin-bottom: 48px;
  }
`;
