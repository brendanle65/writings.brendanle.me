// import types
import { JSX } from "react";

// import libraries
import { MouseEventHandler, useContext } from "react";
import { InheritStyledProps } from "styled-components";

// import other
import { cursorStateContext, CursorState, CursorExtras } from "@contexts/CursorContext";

// import styled components
import * as Styled from "./Hoverable.styled";

interface HoverablePropsBase extends InheritStyledProps {
  // What state to set the cursor on hover
  $cursorState?: CursorState;

  // Extra details to pass to the cursor on hover
  $cursorExtras?: CursorExtras;
}

// We need to handle dynamic props based on the `as` prop.
type HoverableProps<T extends InheritStyledProps["as"]> = HoverablePropsBase &
  // If 'as' is a string (e.g., 'div', 'button', etc.), use the props of that HTML element
  (T extends keyof JSX.IntrinsicElements
    ? Omit<JSX.IntrinsicElements[T], "ref">
    : // If 'as' is a React component, use the component's props
    T extends React.ComponentType<infer P>
    ? P
    : {}) & {
    as?: T; // The `as` property for dynamic element types (either string or component)
  };

/**
 * Wraps JSX elements so that when they are hovered over, the cursor state changes.
 *
 * @HOC
 */
export function Hoverable<T extends InheritStyledProps["as"]>(props: HoverableProps<T>) {
  const { $cursorState, $cursorExtras } = props;
  const { onMouseEnter, onMouseLeave } = props;
  const { setCursorState, setCursorExtras } = useContext(cursorStateContext);

  const handleMouseEnter: MouseEventHandler<HTMLElement> = (e) => {
    setCursorState($cursorState ?? CursorState.HOVER);
    setCursorExtras($cursorExtras);
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLElement> = (e) => {
    setCursorState(CursorState.IDLE);
    setCursorExtras({});
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  };

  return <Styled.Component {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />;
}
