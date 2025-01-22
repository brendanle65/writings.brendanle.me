// import libraries
import { useState, useEffect, useRef } from "react";
import { animate, AnimationPlaybackControls, ValueAnimationTransition } from "framer-motion";

// import other
import { useMediaQuery } from "@hooks/useMediaQuery";

// import styled components
import * as Styled from "./Image.styled";

interface ImageProps {
  // Url of image
  src?: string;
}

const ASPECT_RATIO = { width: 4, height: 3 };
const COL_COUNT = 12; // how many squares across - make sure COL_COUNT * ASPECT_RATIO.height is divisible by ASPECT_RATIO.width
const ROW_COUNT = (COL_COUNT * ASPECT_RATIO.height) / ASPECT_RATIO.width; // how many squares down
const GRID_LENGTH = ROW_COUNT * COL_COUNT;

/**
 * Renders the preview image of the currently selected article.
 * Includes a scramble and unscramble animation.
 *
 * @private
 * @component
 */
export function Image({ src: currentSrc }: ImageProps) {
  const isLaptop = useMediaQuery("laptop");
  const [storedSrc, setStoredSrc] = useState<string>(null); // needed to keep previous image rendered when src changes
  const cellsRef = useRef<HTMLDivElement[]>([]);
  const sequenceRef = useRef<number[]>(getSequence());
  const indexRef = useRef<number>(0);
  const controlsRef = useRef<AnimationPlaybackControls>(null);

  useEffect(() => {
    // stop any loose animations
    controlsRef.current?.stop();

    if (isLaptop) {
      const isEntering = (!storedSrc && currentSrc) || storedSrc === currentSrc;
      const isExiting = storedSrc && !currentSrc;
      const isTransitioning = storedSrc && currentSrc;

      if (isEntering) {
        setStoredSrc(currentSrc);
        reveal({
          duration: 0.6,
          ease: "easeOut",
        });
      } else if (isExiting) {
        hide({
          duration: 0.5,
          delay: 0.5,
          ease: "easeIn",
        });
      } else if (isTransitioning) {
        const options: ValueAnimationTransition<number> = { delay: 0.1, duration: 0.4, ease: "easeInOut" };

        hide({
          ...options,
          onComplete: () => {
            reveal(options);
            setStoredSrc(currentSrc);
          },
        });
      }
    }

    return () => controlsRef.current?.stop();
  }, [currentSrc, isLaptop]);

  // hide all visible squares
  function hide({ duration, ...options }: Omit<ValueAnimationTransition<number>, "onUpdate">) {
    const scaled = duration * (indexRef.current / GRID_LENGTH); // percentage of cells to hide

    controlsRef.current = animate(indexRef.current, 0, {
      duration: scaled,
      onUpdate(value) {
        const current = Number(value.toFixed(0));

        // (current !== GRID_LENGTH - 1) prevents a bug where one square animates
        // incorrectly when using a delay. Without this check, the delay keeps calling
        // onUpdate with the indexRef.current value, causing the animation to start
        // prematurely while waiting to animate down to zero.
        while (indexRef.current >= current && current !== GRID_LENGTH - 1) {
          const randomIdx = sequenceRef.current[indexRef.current--];
          cellsRef.current[randomIdx].style.opacity = "1";
        }

        if (indexRef.current < 0) {
          sequenceRef.current = getSequence();
          indexRef.current = 0; // prevent over indexing
        }
      },
      ...options,
    });
  }

  // reveal all hidden squares
  function reveal({ duration, ...options }: Omit<ValueAnimationTransition<number>, "onUpdate">) {
    const scaled = duration * (1 - indexRef.current / GRID_LENGTH); // percentage of cells to reveal

    controlsRef.current = animate(indexRef.current, GRID_LENGTH, {
      duration: scaled,
      onUpdate(value) {
        const current = Number(value.toFixed(0));

        while (indexRef.current < current) {
          const randomIdx = sequenceRef.current[indexRef.current++];
          cellsRef.current[randomIdx].style.opacity = "0";
        }

        if (indexRef.current >= GRID_LENGTH) {
          sequenceRef.current = getSequence();
          indexRef.current = GRID_LENGTH - 1; // prevent over indexing
        }
      },
      ...options,
    });
  }

  // get a random order to animate the cells
  function getSequence() {
    return Array.from({ length: GRID_LENGTH }, (_, i) => i).sort(() => Math.random() - 0.5);
  }

  return (
    <Styled.Container>
      <Styled.Image src={storedSrc ?? currentSrc} />
      <Styled.Overlay $col={COL_COUNT} $row={ROW_COUNT}>
        {Array.from({ length: GRID_LENGTH }).map((_, idx) => (
          <Styled.Cell
            key={idx}
            ref={(el) => {
              cellsRef.current[idx] = el;
            }}
          />
        ))}
      </Styled.Overlay>
    </Styled.Container>
  );
}
