// import libraries
import { InheritStyledProps, DefaultTheme } from "styled-components";

// import other
import { Hoverable } from "@components/other";

// import styled components
import * as Styled from "./AppFavorites.styled";

export interface AppFavoriteProps extends InheritStyledProps {
  size: "large" | "small";

  favorites: {
    text: string;

    font: keyof DefaultTheme["fonts"];

    href: string;
  }[];
}

/**
 * A list of links to my favorite writings.
 *
 * @component
 */
export function AppFavorites({ size, favorites, ...props }: AppFavoriteProps) {
  return (
    <Styled.Container {...props}>
      <Styled.Heading $size={size} className="animate-favorites-heading">
        Favorites:
      </Styled.Heading>
      <Styled.List $size={size}>
        {favorites.map(({ text, font, href }, idx) => (
          <li key={idx}>
            <Hoverable>
              <Styled.Link href={href} $font={font} $size={size} className="animate-favorites-link">
                {text}
              </Styled.Link>
            </Hoverable>
          </li>
        ))}
      </Styled.List>
    </Styled.Container>
  );
}
