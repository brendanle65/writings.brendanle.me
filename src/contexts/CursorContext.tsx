// import types
import { ReactNode, Dispatch, SetStateAction } from "react";

// import libraries
import { createContext, useState } from "react";

/**
 * The current state of the browser's cursor.
 *
 * This refers to the state of an element that will act as
 * a supplement (not a replacement) to the browser's default mouse.
 */
export enum CursorState {
  // When the cursor is not hovering over anything special - the default state
  IDLE = "IDLE",

  // When the cursor is hovering over an interactable element
  HOVER = "HOVER",

  // When you want to turn the cursor into an image
  IMAGE = "IMAGE",

  // When you want to turn the cursor in a a polaroid headshot image
  HEADSHOT = "HEADSHOT",
}

/** Extra information needed for updating/styling cursor. */
export interface CursorExtras {
  // Properties pretaining to setting a cursor to an image
  image?: {
    // The source URL of the image.
    src: string;

    // The text description of the image.
    alt: string;

    // Width of image in pixels
    width?: number;

    // Height of image pixels
    height?: number;
  };
}

/** Defines the shape of the context's value. */
interface CursorStateContextProps {
  // The current state of the cursor.
  cursorState: CursorState;

  // Function to update the cursor state.
  setCursorState: Dispatch<SetStateAction<CursorState>>;

  // Additional properties for the cursor, such as an optional image.
  cursorExtras: CursorExtras;

  // Function to update the cursor's extra properties.
  setCursorExtras: Dispatch<SetStateAction<CursorExtras>>;
}

interface CursorStateProviderProps {
  children: ReactNode;
}

export const cursorStateContext = createContext<CursorStateContextProps | null>(null);

/**
 * Wraps the provided children in a context provider, supplying
 * the current cursor state and a function to update it accessible
 * to descendant components.
 *
 * @provider
 */
export function CursorStateProvider({ children }: CursorStateProviderProps) {
  const [cursorState, setCursorState] = useState<CursorState>(CursorState.IDLE);
  const [cursorExtras, setCursorExtras] = useState<CursorExtras>({});

  return (
    <cursorStateContext.Provider value={{ cursorState, setCursorState, cursorExtras, setCursorExtras }}>
      {children}
    </cursorStateContext.Provider>
  );
}
