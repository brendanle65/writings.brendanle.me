// import libraries
import { useContext } from "react";

// import other
import { Hoverable } from "@components/other";
import { writingStateContext } from "@contexts/WritingStateContext";

// import styled components
import * as Styled from "./Notetag.styled";

interface NotetagProps {
  // The index of the annotation (starts at 1)
  id: number;
}

/**
 * Renders a sequential superscript annotation tag.
 *
 * @component
 */
export function Notetag({ id }: NotetagProps) {
  const { notetagRefs } = useContext(writingStateContext);

  return (
    <Styled.Sup
      ref={(el) => {
        notetagRefs.current[id - 1] = el;
      }}
    >
      <Hoverable as={Styled.Anchor} id={`notetag-${id}`} href={`#footnote-${id}`}>
        {id}
      </Hoverable>
    </Styled.Sup>
  );
}
