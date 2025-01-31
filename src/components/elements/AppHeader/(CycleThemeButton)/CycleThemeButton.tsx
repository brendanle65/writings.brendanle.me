// import types
import { InheritStyledProps } from "styled-components";

// import libraries
import { useContext } from "react";

// import others
import { Hoverable } from "@components/other";
import { themeContext } from "@contexts/ThemeContext";

/**
 * Renders a button that, when clicked, cycles the site through different themes.
 *
 * @component
 * @private
 */
export function CycleThemeButton(props: InheritStyledProps) {
  const { theme, cycle } = useContext(themeContext);

  return (
    <Hoverable as="button" onClick={cycle} {...props}>
      (toggle {theme.next} theme)
    </Hoverable>
  );
}
