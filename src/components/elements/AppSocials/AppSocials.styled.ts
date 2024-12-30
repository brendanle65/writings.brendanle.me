// import libraries
import styled from "styled-components";
import { BsSubstack, BsLinkedin } from "react-icons/bs";

// import other
import { AppSocialsProps } from "./AppSocials";
import { hoverUnderlineMixin } from "@styles/mixins/hoverUnderlineMixin";

type SizeProp = AppSocialsProps["size"];

// Exists so we can can target in mixin by name
export const SocialName = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const List = styled.ul<{ $size: SizeProp }>`
  display: flex;
  font-size: ${(props) => (props.$size === "small" ? "14px" : "18px")};
  gap: 10px;
  width: max-content;
  margin-left: auto;
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
