// import libraries
import styled from "styled-components";
import NextLink from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export const Link = styled(NextLink)`
  display: flex;
  width: max-content;

  &:hover {
    opacity: 0.7;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  position: relative;
`;

export const IconWrapper = styled.div`
  margin-top: 0.5px;
`;

export const ArrowIcon = styled(BsArrowLeft)``;

export const Label = styled.div`
  margin-top: -2px;
  font-size: 16px;
  font-weight: 500;
`;

export const Top = styled.div`
  background: ${(props) => props.theme.colors.text.primary};
  width: 16px;
  height: 0.5px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Side = styled.div`
  background: ${(props) => props.theme.colors.text.primary};
  width: 0.5px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Bottom = styled.div`
  background: ${(props) => props.theme.colors.text.primary};
  width: 16px;
  height: 0.5px;
  position: absolute;
  right: 0;
  bottom: 0;
`;
