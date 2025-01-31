// import libraries
import { InheritStyledProps } from "styled-components";
import { WritingNote } from "@typings/writing";

// import other
import { Hoverable } from "@components/other";

// import styles
import * as Styled from "./Footnotes.styled";

interface FootnoteProps extends InheritStyledProps {
  // Array of footnotes to render.
  footnotes: WritingNote[];
}

/**
 * A list of footnotes that, when clicked,
 * scrolls the window to their corresponding notetag.
 *
 * (only visible on smaller devices)
 *
 * @private
 * @component
 */
export function Footnotes({ footnotes, className }: FootnoteProps) {
  return (
    <Styled.List className={className}>
      {footnotes.map(({ children, id }) => (
        <Styled.Container key={id} id={`footnote-${id}`}>
          <Hoverable as={Styled.Index} href={`#notetag-${id}`}>
            {id}.
          </Hoverable>
          <Styled.Text>{children}</Styled.Text>
        </Styled.Container>
      ))}
    </Styled.List>
  );
}
