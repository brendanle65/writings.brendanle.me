// import libraries
import { useEffect, useState, useContext } from "react";
import { InheritStyledProps } from "styled-components";
import { motion } from "framer-motion";

// import other
import { Note } from "../Notes";
import { writingStateContext } from "@contexts/WritingStateContext";
import { THEME } from "@constants/theme";
import { stagger } from "@utils/stagger";

// import styled components
import * as Styled from "./Sidenotes.styled";

interface SidenoteProps extends InheritStyledProps {
  // Array of sidenotes to render.
  sidenotes: Note[];
}

/**
 * A list of sidenotes that are rendered next to their corresponding notetag,
 * when the author's notes are toggled.
 *
 * (only visible on bigger devices)
 * @component
 */
export function Sidenotes({ sidenotes, className }: SidenoteProps) {
  const { notetagRefs } = useContext(writingStateContext);
  const [noteStyles, setNoteStyles] = useState(() => {
    return Array(sidenotes.length).fill({ opacity: 0 }); // Hide until computed
  });

  const staggerDelay = stagger({ max: 0.1, min: 0.01, step: 0.01, dir: "decreasing" });

  // Calculate positions
  useEffect(() => {
    function handleNotes() {
      const notetags = notetagRefs.current;
      if (notetags) {
        const newStyles = Array.from(notetags).map((tag) => {
          const { left, top } = tag.getBoundingClientRect();
          return {
            left: `${left}px`,
            top: `${top + window.scrollY}px`,
            width: `calc(100vw - ${left}px - ${THEME.frame.laptop.x})`,
          };
        });
        setNoteStyles(newStyles);
      }
    }

    handleNotes();

    window.addEventListener("resize", handleNotes);

    return () => window.removeEventListener("resize", handleNotes);
  }, []);

  return (
    <ul className={className}>
      {sidenotes.map(({ children, id }, idx) => (
        <Styled.Container key={id} style={noteStyles[idx]}>
          <Styled.Line>
            <Styled.Stroke
              as={motion.div}
              initial={{ width: 0 }}
              animate={{ width: sidenotes[idx].lineLength ?? 20 }}
              transition={{ duration: 0.25, delay: staggerDelay(idx) }}
            />
          </Styled.Line>
          <Styled.Text
            as={motion.span}
            initial={{ opacity: 0, x: 2 }}
            animate={{ opacity: "100%", x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 + staggerDelay(idx) }}
          >
            {children}
          </Styled.Text>
        </Styled.Container>
      ))}
    </ul>
  );
}
