// import libraries
import { useContext } from "react";

// import other
import { Hoverable } from "@components/other";
import { writingStateContext } from "@contexts/WritingStateContext";

// import styled components
import * as Styled from "./NotesButton.styled";

/**
 * Button responsible for toggling on/off author's notes on laptop view.
 *
 * @private
 * @component
 */
export function NotesButton() {
  const { isNotesOn, setIsNotesOn } = useContext(writingStateContext);

  return (
    <Hoverable as={Styled.Button} onClick={() => setIsNotesOn(!isNotesOn)}>
      <Styled.IconWrapper $isActive={isNotesOn}>
        {isNotesOn ? <Styled.EyeOffIcon /> : <Styled.EyeOnIcon />}
      </Styled.IconWrapper>

      <Styled.Label>Toggle Author's Notes</Styled.Label>
    </Hoverable>
  );
}
