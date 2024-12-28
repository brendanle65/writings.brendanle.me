// import libraries
import styled from "styled-components";

// import other
import { Button } from "@components/other";

// example: of withHover working properly with multiple nesting inheritance
export const Toggle = styled(Button)`
  font-size: 48px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text[500]};
`;
