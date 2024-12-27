// import libraries
import { ComponentType, MouseEventHandler, useContext } from "react";

// import other
import { cursorStateContext, CursorState, CursorExtras } from "@contexts/CursorContext";

interface HoverProps {
  // What state to set the cursor on hover
  $cursorState?: CursorState;

  // Extra details to pass to the cursor on hover
  $cursorExtras?: CursorExtras;

  // other properties of the component
  [key: string]: any;
}

/**
 * Wraps JSX elements so that when they are hovered over, the cursor state changes.
 *
 * @HOC
 */
export function withHover<T>(Component: any): ComponentType<any> {
  const WrappedComponent: ComponentType<T> = (props: HoverProps) => {
    const { $cursorState, $cursorExtras } = props;
    const { onMouseEnter, onMouseLeave, style } = props;
    const { setCursorState, setCursorExtras } = useContext(cursorStateContext)!;

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

    return (
      <Component
        {...(props as T)}
        style={{ ...style, cursor: "pointer" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  };

  // Set the displayName for better debugging and React DevTools visibility
  const componentName = Component.displayName || Component.name || "Component";
  WrappedComponent.displayName = `withHover(${componentName})`;

  return WrappedComponent;
}
