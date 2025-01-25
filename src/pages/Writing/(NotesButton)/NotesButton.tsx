// import libraries
import { useState } from "react";

// import other
import { Hoverable } from "@components/other";

// import styled components
import * as Styled from "./NotesButton.styled";

/**
 * Button responsible for toggling on/off author's notes on laptop view.
 *
 * @private
 * @component
 */
export function NotesButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Hoverable as={Styled.Button} onClick={() => setIsActive(!isActive)}>
      <Styled.IconWrapper $isActive={isActive}>
        {isActive ? <Styled.EyeOffIcon /> : <Styled.EyeOnIcon />}
      </Styled.IconWrapper>

      <Styled.Label>Toggle Author's Notes</Styled.Label>
    </Hoverable>
  );
}
