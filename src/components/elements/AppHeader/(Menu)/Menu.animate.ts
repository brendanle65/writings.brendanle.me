// import libraries
import { stagger, AnimationSequence } from "framer-motion";

// Note: We might consider rendering (Menu) using a portal to append it to a top-level element,
// to prevent other components higher up the tree from accidentally targeting the same selector (e.g., .animate-socials-link).

export const enter: AnimationSequence = [
  // prep for animation by setting styles
  [".animate-menu-background", { left: "100vw" }, { duration: 0 }],
  [".animate-close-button", { opacity: 0, y: 10 }, { duration: 0 }],
  [".animate-cycle-button", { opacity: 0, y: 10 }, { duration: 0 }],

  // inside <AppFavorites /> component
  [".animate-favorites-heading", { opacity: 0, y: 10 }, { duration: 0 }],
  [".animate-favorites-link", { opacity: 0, y: 25 }, { duration: 0 }],

  // inside <AppSocials /> component
  [".animate-socials-link", { opacity: 0 }, { duration: 0 }],

  // animate
  [".animate-menu-background", { left: 0 }, { duration: 0.5, ease: [0.66, 0.53, 0.11, 0.99] }],
  [".animate-close-button", { opacity: 1, y: 0 }, { delay: 0.1, duration: 0.2, at: "<" }],
  [".animate-cycle-button", { opacity: 1, y: 0 }, { delay: 0.3, duration: 0.2, at: "<" }],
  [".animate-favorites-heading", { opacity: 1, y: 0 }, { delay: 0.3, duration: 0.2, at: "<" }],
  [
    ".animate-favorites-link",
    { opacity: 1, y: 0 },
    { delay: stagger(0.05, { startDelay: 0.3 }), duration: 0.1, at: "<", ease: [0.66, 0.53, 0.11, 0.99] },
  ],
  [".animate-socials-link", { opacity: 1 }, { delay: 0.3, duration: 0.2, at: "<" }],
];

export const exit: AnimationSequence = [
  [".animate-menu-background", { left: "100vw" }, { duration: 0.5, ease: [0.99, 0.11, 0.53, 0.66] }],
  [".animate-close-button", { opacity: 0, y: -10 }, { delay: 0.2, duration: 0.2, at: "<" }],
  [".animate-cycle-button", { opacity: 0, y: -10 }, { duration: 0.2, at: "<" }],
  [".animate-favorites-heading", { opacity: 0, y: -10 }, { duration: 0.2, at: "<" }],
  [".animate-favorites-link", { opacity: 0, y: -50 }, { delay: stagger(0.05), duration: 0.2, at: "<" }],
  [".animate-socials-link", { opacity: 0 }, { delay: 0.3, duration: 0.2, at: "<" }],
];
