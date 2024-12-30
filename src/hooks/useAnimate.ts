// import libraries
import { useEffect } from "react";
import { usePresence, useAnimate as useFramerAnimate, AnimationSequence } from "framer-motion";

export interface AnimateProps {
  // Animations to run when the element is first rendered.
  enter?: AnimationSequence;

  // Animations to run when the element is about to be unmounted.
  exit?: AnimationSequence;
}

/**
 * Runs enter and exit animations.
 *
 * @hook
 */
export function useAnimate(sequence: AnimateProps) {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useFramerAnimate();

  useEffect(() => {
    if (isPresent && sequence.enter) {
      const enterAnimation = async () => {
        await animate(sequence.enter);
      };

      enterAnimation();
    } else if (sequence.exit) {
      const exitAnimation = async () => {
        await animate(sequence.exit);

        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent]);

  return scope;
}
