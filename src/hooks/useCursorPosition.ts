// import libraries
import { useSpring } from "framer-motion";
import { useEffect } from "react";

// import other
import { useMousePosition, MousePositionProps } from "./useMousePosition";

/**
 * Tracks the mouse position and smooths the movement using a spring animation.
 *
 * @hook
 */
export function useCursorPosition(props?: MousePositionProps) {
  const mousePosition = useMousePosition(props); // Start off-screen

  const springConfig = { damping: 100, stiffness: 700 };
  const cursorXSpring = useSpring(mousePosition.x, springConfig);
  const cursorYSpring = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    cursorXSpring.set(mousePosition.x);
    cursorYSpring.set(mousePosition.y);
  }, [mousePosition]);

  return { x: cursorXSpring, y: cursorYSpring };
}
