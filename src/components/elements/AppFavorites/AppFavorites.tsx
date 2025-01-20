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

  // function to call when link is hovered over
  onLinkEnter?: (post: WritingType) => void;
}

/**
 * A list of links to my favorite writings.
 *
 * @component
 */
export function AppFavorites({ size, favorites, onLinkEnter }: AppFavoriteProps) {
  return (
    <Styled.Container>
      <Styled.Heading $size={size} className="animate-favorites-heading">
        Favorites:
      </Styled.Heading>
      <Styled.List $size={size}>
        {favorites.map((writing) => (
          <li key={writing.id}>
            <Hoverable>
              <Styled.Link
                onMouseEnter={() => onLinkEnter && onLinkEnter(writing)}
                href={`/writings/${writing.slug}`}
                $font={writing.fonts.title}
                $size={size}
                className="animate-favorites-link"
              >
                {writing.title}
              </Styled.Link>
            </Hoverable>
          </li>
        ))}
      </Styled.List>
    </Styled.Container>
  );
}
