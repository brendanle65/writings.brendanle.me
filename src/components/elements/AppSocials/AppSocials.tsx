// import libraries
import { InheritStyledProps } from "styled-components";

// import other
import { Hoverable } from "@components/other/Hoverable/Hoverable";

// import styled components
import * as Styled from "./AppSocials.styled";

export interface AppSocialsProps extends InheritStyledProps {
  size: "large" | "small";
}

/**
 * A list of links to different socials: websites and social media.
 *
 * @component
 */
export function AppSocials({ size, ...props }: AppSocialsProps) {
  return (
    <Styled.Container {...props}>
      <Styled.List $size={size}>
        <li>
          <Hoverable as={Styled.SiteLink} href="https://work.brendanle.me" className="animate-socials-link">
            work.brendanle.me
          </Hoverable>
        </li>
        <li>
          <Hoverable as={Styled.SiteLink} href="https://bytes.brendanle.me" className="animate-socials-link">
            bytes.brendanle.me
          </Hoverable>
        </li>
      </Styled.List>

      <Styled.List $size={size}>
        <li>
          <Hoverable as={Styled.SocialLink} href="https://substack.com" className="animate-socials-link">
            <Styled.SubstackIcon $size={size} />
            <Styled.SocialName>substack</Styled.SocialName>
          </Hoverable>
        </li>
        <li>
          <Hoverable as={Styled.SocialLink} href="https://linkedin.com" className="animate-socials-link">
            <Styled.LinkedinIcon $size={size} />
            <Styled.SocialName>linkedin</Styled.SocialName>
          </Hoverable>
        </li>
      </Styled.List>
    </Styled.Container>
  );
}
