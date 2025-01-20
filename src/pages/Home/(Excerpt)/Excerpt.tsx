// import libraries
import { motion } from "framer-motion";

// import styled components
import * as Styled from "./Excerpt.styled";

interface ExcerptProps {
  // The excerpt to render.
  content: string;
}

/**
 * Renders a featured excerpt preview of the currently selected article.
 * Includes scramble and unscramble animations, with key parts highlighted.
 *
 * @private
 * @component
 */
export function Excerpt(props: ExcerptProps) {
  return (
    <Styled.Container
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0, transition: { delay: 0.5 } }}
    // as={motion.div}
    >
      <>
        <Styled.Heading>Featured Excerpt:</Styled.Heading>

        <div
          dangerouslySetInnerHTML={{ __html: props.content }}
          // temporary: will parse markdown later...
        ></div>
      </>
    </Styled.Container>
  );
}
