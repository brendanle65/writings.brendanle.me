// import types
import { ValueAnimationTransition, AnimationPlaybackControls } from "framer-motion";

// import libraries
import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { Remarkable } from "remarkable";

// import other
import { useMediaQuery } from "@hooks/useMediaQuery";

// import styled components
import * as Styled from "./Excerpt.styled";

interface ExcerptProps {
  // The excerpt to render.
  content?: string;
}

/**
 * Renders a featured excerpt preview of the currently selected article.
 * Includes scramble and unscramble animations, with key parts highlighted.
 *
 * @private
 * @component
 */
export function Excerpt({ content }: ExcerptProps) {
  const isLaptop = useMediaQuery("laptop");
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerControlRef = useRef<AnimationPlaybackControls>(null);
  const contentControlRef = useRef<AnimationPlaybackControls>(null);

  useEffect(() => {
    // stop any loose animations
    headerControlRef.current?.stop();
    contentControlRef.current?.stop();

    if (isLaptop) {
      contentControlRef.current = scramble({
        from: contentRef.current.innerText,
        to: content || "",
        onUpdate: (html) => {
          contentRef.current.innerHTML = html;
        },
        options: {
          duration: 0.75,
          delay: !content ? 0.5 : 0,
          ease: "easeInOut",
        },
      });

      if (headerRef.current.innerText !== "Featured Excerpt:" || !content) {
        headerControlRef.current = scramble({
          from: headerRef.current.innerText,
          to: content ? "Featured Excerpt:" : "",
          onUpdate: (html) => {
            headerRef.current.innerHTML = html;
          },
          options: {
            duration: 0.75,
            delay: !content ? 0.5 : 0,
            ease: "easeInOut",
          },
        });
      }
    }
  }, [content, isLaptop]);

  type ScrambleProps = {
    from: string;
    to: string;
    onUpdate: (html: string) => void;
    options?: Omit<ValueAnimationTransition<number>, "onUpdate">;
  };

  // scrambles text from "from" to "to" value
  function scramble({ from, to, onUpdate, options }: ScrambleProps) {
    const length = Math.max(from.length, to.length);
    const state = Array.from({ length }, (_, i) => ({
      start: Math.floor(Math.random() * length), // random frame (animate) value to start scrambling
      end: Math.floor(Math.random() * length), // random frame (animate) value to end scrambling
      from: from[i] || "",
      to: to[i] || "",
      char: undefined,
    }));
    let frame = 0;

    return animate(0, length, {
      ...options,
      onUpdate(value) {
        value = Number(value.toFixed(0));
        const isDelayed = value === 0;

        // throttle the animation: run every other frame
        if (frame % 2 === 0 && !isDelayed) {
          let output = "";
          for (let i = 0; i < state.length; i++) {
            let { from, to, char, start, end } = state[i];

            if (value >= end) {
              output += to; // done scrambling (past window)
            } else if (value >= start) {
              // scrambling (inside window)
              if (!char || Math.random() < 0.2) {
                // with random chance, rescramble
                char = getRandomChar();
                state[i].char = char;
              }
              // output += state[i].char;
              output += `<span style="opacity:0.3;">${state[i].char}</span>`;
            } else {
              output += from; // yet to be scrambled (before window)
            }
          }

          // fix this - skip scrambling special characters...
          const md = new Remarkable({ html: true });
          const html = md.render(output);
          onUpdate(output);
        }

        frame++;
      },
    });
  }

  // get a random character to scramble with
  function getRandomChar() {
    const chars = "abcdefghijklmnopqrstuvwxyz!-_\\/[]{}—=+*^?#";
    return chars[Math.floor(Math.random() * chars.length)];
  }

  return (
    <Styled.Container>
      <Styled.Header ref={headerRef} />
      <div ref={contentRef} />
    </Styled.Container>
  );
}
