// import types
import { CursorState } from "@contexts/CursorContext";

// import libraries
import { motion } from "framer-motion";
import { useContext } from "react";

// import other
import { useCursorPosition } from "@hooks/useCursorPosition";
import { cursorStateContext } from "@contexts/CursorContext";

// import styled components
import * as Styled from "./Cursor.styled";

/**
 * A custom cursor element that follows the mouse position.
 * It supplements the browser's default cursor functionality.
 *
 * @component
 */
export function Cursor() {
  const { cursorState, cursorExtras } = useContext(cursorStateContext);
  const { x, y } = useCursorPosition({ x: -25, y: -25 }); // Hide before mouse is moved
  // Note: It's actually not possible to get initial mouse position without events: https://stackoverflow.com/questions/2601097/how-to-get-the-mouse-position-without-events-without-moving-the-mouse

  return (
    <Styled.Wrapper as={motion.div} style={{ translateX: x, translateY: y }} $state={cursorState}>
      <Styled.Cursor $state={cursorState} $extras={cursorExtras}>
        {cursorState === CursorState.IMAGE && (
          <Styled.Image src={cursorExtras.image.src} alt={cursorExtras.image.alt} />
        )}
        {cursorState === CursorState.HEADSHOT && (
          <Styled.Headshot src="/headshot.png" alt="professional headshot of the author" />
        )}
      </Styled.Cursor>
    </Styled.Wrapper>
  );
}
