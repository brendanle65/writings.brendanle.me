// import libraries
import { motion } from "framer-motion";

// import styled components
import * as Styled from "./Image.styled";

interface ImageProps {
  // url of image
  src: string;
}

/**
 * Renders the preview image of the currently selected article.
 * Includes a scramble and unscramble animation.
 *
 * @private
 * @component
 */
export function Image({ src }: ImageProps) {
  return (
    <Styled.Image
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.5 } }}
      as={motion.img}
      src={src}
    />
  );
}
