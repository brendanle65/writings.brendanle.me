// import types
import { AppSocialsProps } from "./AppSocials";

// import libraries
import styled from "styled-components";
import { BsSubstack, BsLinkedin } from "react-icons/bs";

// import other
import { hoverUnderlineMixin } from "@styles/mixins/hoverUnderlineMixin";

type SizeProp = AppSocialsProps["size"];
type AlignProp = AppSocialsProps["align"];

// Exists so we can can target in mixin by name
export const SocialName = styled.div``;

export const Container = styled.div<{ $size: SizeProp; $align: AlignProp }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$size === "small" ? "4px" : "6px")};
  align-items: ${(props) => {
    if (props.$align === "left") {
      return "flex-start";
    } else if (props.$align === "center") {
      return "center";
    } else if (props.$align === "end") {
      return "flex-end";
    }
  }};
`;

export const List = styled.ul<{ $size: SizeProp }>`
  display: flex;
  font-size: ${(props) => (props.$size === "small" ? "16px" : "18px")};
  gap: 10px;

  @media (min-width: ${(props) => props.theme.screens.tablet.start}) {
    font-size: ${(props) => (props.$size === "small" ? "14px" : "18px")};
  }
`;

export const SiteLink = styled.a`
  ${hoverUnderlineMixin()}
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  ${hoverUnderlineMixin(SocialName)}
`;

export const SubstackIcon = styled(BsSubstack)<{ $size: SizeProp }>`
  width: ${(props) => (props.$size === "small" ? "12px" : "16px")};
  margin-top: 2px;
`;
export const LinkedinIcon = styled(BsLinkedin)<{ $size: SizeProp }>`
  width: ${(props) => (props.$size === "small" ? "12px" : "16px")};
  margin-left: 4px;
`;
