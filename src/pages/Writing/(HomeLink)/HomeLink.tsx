// import libraries
import { useState } from "react";
import { motion } from "framer-motion";

// import other
import { Hoverable } from "@components/other";

// import styled components
import * as Styled from "./HomeLink.styled";

/**
 * A link to the home page.
 *
 * @private
 * @component
 */
export function HomeLink() {
  const [isAnimating, setIsAnimating] = useState(false); // run animation once when hovered, do not cancel

  return (
    <Hoverable as={Styled.Link} href="/">
      <Styled.Container as={motion.div} onMouseEnter={() => setIsAnimating(true)} animate={isAnimating ? "hover" : ""}>
        <Styled.IconWrapper
          as={motion.div}
          variants={{ hover: { x: [0, -1.25, 0] } }}
          transition={{ duration: 0.5, repeat: 1 }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <Styled.ArrowIcon />
        </Styled.IconWrapper>
        <Styled.Label>Go Home</Styled.Label>

        <Styled.Top
          as={motion.div}
          variants={{ hover: { width: [16, 0, 0, 16], right: [0, 0, 16, 0] } }}
          transition={{ duration: 0.3 }}
        />
        <Styled.Side
          as={motion.div}
          variants={{ hover: { height: ["100%", 0, 0, "100%"], top: [0, "100%", 0, 0] } }}
          transition={{ duration: 0.3, delay: 0.15 }}
        />
        <Styled.Bottom
          as={motion.div}
          variants={{ hover: { width: [16, 0, 0, 16], right: [0, 16, 0, 0] } }}
          transition={{ duration: 0.3, delay: 0.3 }}
        />
      </Styled.Container>
    </Hoverable>
  );
}
