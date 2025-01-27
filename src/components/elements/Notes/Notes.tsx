// import libraries
import { useContext } from "react";

// import other
import { writingStateContext } from "@contexts/WritingStateContext";

// import styles
import * as Styled from "./Notes.styled";

export interface Note {
  // The index of the notetag this corresponds to.
  id: number;

  // The content of the note.
  children: any;

  // Additional class name(s) for custom styling.
  className?: string;

  // CSS style for width (length) of side note line.
  lineLength?: string;
}

interface NotesProps {
  // Array of notes to render.
  notes: Note[];
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
