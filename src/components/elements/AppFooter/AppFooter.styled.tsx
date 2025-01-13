// import libraries
import styled from "styled-components";

export const Legal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 8px;

  @media (min-width: ${(props) => props.theme.screens.tablet.start}) {
    font-size: 12px;
  }
`;
