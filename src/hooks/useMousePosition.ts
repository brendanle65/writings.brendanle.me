// import libraries
import { useEffect, useState } from "react";

export interface MousePositionProps {
  // Initial X position of cursor in pixels
  x?: number;

  // Initial y position of cursor in pixels
  y?: number;
}

/**
 * Tracks the mouse position.
 *
 * @hook
 */
export const useMousePosition = (initial?: MousePositionProps) => {
  const x = initial?.x ?? 0;
  const y = initial?.y ?? 0;
  const [mousePosition, setMousePosition] = useState({ x, y });

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};
