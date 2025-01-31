// import types
import { Dispatch, SetStateAction, ReactNode, RefObject } from "react";

// import libraries
import { createContext, useState, useEffect, useRef } from "react";

// import other
import { useMediaQuery } from "@hooks/useMediaQuery";

/** Defines the shape of the context's value. */
interface WritingStateContextProps {
  // Whether or not author's notes are toggled on.
  isNotesOn: boolean;

  // Function to set author's notes on and off.
  setIsNotesOn: Dispatch<SetStateAction<boolean>>;

  // Refs to the notetags on a writing page.
  notetagRefs: RefObject<HTMLElement[]>;
}

interface WritingStateProviderProps {
  children: ReactNode;
}

export const writingStateContext = createContext<WritingStateContextProps | null>(null);

/**
 * Wraps the provided children in a context provider, sharing the current writing state
 * and a function to update it accessible to descendant components.
 *
 * We use context instead of storing state in the writing:
 * a) To make it easily accessible from anywhere in the React tree, avoiding prop drilling.
 * b) To persist certain state (like options) across components.
 *
 * @provider
 */
export function WritingStateProvider({ children }: WritingStateProviderProps) {
  const isLaptop = useMediaQuery("laptop");
  const notetagRefs = useRef<HTMLElement[]>([]);
  const [isNotesOn, setIsNotesOn] = useState(false); // Whether or not author's notes are toggled

  // Always display notes on smaller devices
  useEffect(() => {
    if (!isLaptop) {
      setIsNotesOn(true);
    }
  }, [isLaptop]);

  return (
    <writingStateContext.Provider
      value={{
        isNotesOn,
        setIsNotesOn,
        notetagRefs,
      }}
    >
      {children}
    </writingStateContext.Provider>
  );
}
