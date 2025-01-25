// import libraries
import styled from "styled-components";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export const Button = styled.button`
  width: max-content;
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconWrapper = styled.div<{ $isActive: boolean }>`
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  background: ${(props) => props.theme.colors.text[props.$isActive ? "accent" : "primary"]};
  border-radius: 50%;
`;

export const EyeOnIcon = styled(BsEye)`
  transform: scale(0.95);
  fill: ${(props) => props.theme.colors.body};
`;

export const EyeOffIcon = styled(BsEyeSlash)`
  transform: scale(0.95);
  fill: ${(props) => props.theme.colors.body};
`;

export const Label = styled.div`
  margin-top: -1px;
`;
