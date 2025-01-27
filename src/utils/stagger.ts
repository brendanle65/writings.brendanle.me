interface StaggerProps {
  // Maximum delay (in seconds) for any given element in the stagger sequence.
  max: number;

  // Minimum delay (in seconds) for any given element in the stagger sequence.
  min: number;

  // Step value (in seconds) used to adjust the stagger delay between consecutive elements.
  step: number;

  // Direction in which the stagger delay changes:
  // - "increasing": Delay starts at the minimum value and increases towards the maximum.
  // - "decreasing": Delay starts at the maximum value and decreases towards the minimum.
  dir?: "decreasing" | "increasing";
}

/**
 *  Custom stagger utility function for controlling staggered animations in Framer Motion.
 *
 *  This function calculates a delay for each item in a sequence, where the delay either:
 *  - Increases progressively from `min` to `max` (if `dir` is "increasing").
 *  - Decreases progressively from `max` to `min` (if `dir` is "decreasing").
 *  - Remains constant if provided a number.
 *
 *  @example
 *  // Using a constant delay between elements:
 *  transition: { delay: stagger(0.1)(0) } // 0 is index
 *
 *  // Using custom stagger delays with increasing direction:
 *  animate(".class", { width: 0 }, { delay: stagger({ max: 1, min: 0.3, step: 0.1, dir: "increasing" }) })
 *
 *  @utility
 */
export function stagger(props: StaggerProps | number) {
  if (typeof props === "number") {
    return (i: number) => {
      return i * props;
    };
  } else {
    const { min, max, step, dir = "decreasing" } = props;

    let totalDelay = 0;
    if (dir === "decreasing") {
      return (i: number) => {
        if (i === 0) totalDelay = 0; // reset, if running stagger again

        // keep decreasing from initial "max" until you reach "min"
        // if below "min", just return "min"
        const stepDelay = Math.max(max - i * step, min);
        totalDelay += stepDelay;
        return totalDelay;
      };
    } else if (dir === "increasing") {
      return (i: number) => {
        if (i === 0) totalDelay = 0; // reset, if running stagger again

        // keep increasing from initial "min" until you reach "max"
        // if above "max", just return "max"
        const stepDelay = Math.min(min + i * step, max);
        totalDelay += stepDelay;
        return totalDelay;
      };
    }
  }
}
