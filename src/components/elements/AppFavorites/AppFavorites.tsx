// import libraries
import { InheritStyledProps } from "styled-components";

// import other
import { Hoverable } from "@components/other";

// import styled components
import * as Styled from "./AppFavorites.styled";
import { WritingType } from "@typings/writing";

export interface AppFavoriteProps extends InheritStyledProps {
  // how big to render list
  size: "large" | "small";

  // which writings to list
  favorites: WritingType[];
}

/**
 * A list of links to my favorite writings.
 *
 * @component
 */
export function AppFavorites({ size, favorites }: AppFavoriteProps) {
  return (
    <Styled.Container>
      <Styled.Heading $size={size} className="animate-favorites-heading">
        Favorites:
      </Styled.Heading>
      <Styled.List $size={size}>
        {favorites.map((props) => (
          <li key={props.id}>
            <Hoverable>
              <Styled.Link
                href={`/writings/${props.slug}`}
                $font={props.fonts.title}
                $size={size}
                className="animate-favorites-link"
              >
                {props.title}
              </Styled.Link>
            </Hoverable>
          </li>
        ))}
      </Styled.List>
    </Styled.Container>
  );
}
