// import types
import { WritingNote } from "@typings/writing";

// import libraries
import { useContext } from "react";

// import other
import { writingStateContext } from "@contexts/WritingStateContext";

// import styles
import * as Styled from "./Notes.styled";

interface NotesProps {
  // Array of notes to render.
  notes: WritingNote[];
}

/**
 * Render footnotes or sidenotes depending on the window size.
 *
 * @component
 */
export function Notes({ notes }: NotesProps) {
  const { isNotesOn } = useContext(writingStateContext);

  return (
    <>
      {isNotesOn && <Styled.Sidenotes sidenotes={notes} />}

      <Styled.Footnotes footnotes={notes} />
    </>
  );
}
