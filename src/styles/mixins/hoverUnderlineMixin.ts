// import libraries
import { css } from "styled-components";

// styles for element to be underlined
const targetMixin = css`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    right: 0;
    width: 100%;
    height: ${(props) => props.theme.border.sm}; /* Border thickness */

    // Ideally: this should inherit the color property from parent. Unfortunately, that is not possible in CSS.
    // This should suffice for all current use cases, but we will see.
    background: ${(props) => props.theme.colors.text.primary}; /* Border color */
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }
`;

// styles to apply to underlined element when hovered
const hoverMixin = css`
  transform: scaleX(1);
  transform-origin: bottom left;
`;

/**
 * A CSS mixin that underlines the target element when the current element is hovered.
 * If no target is specified, the current element is treated as the target.
 *
 * @mixin
 */
export const hoverUnderlineMixin = ($target?: string) => {
  if (!$target) {
    return css`
      ${targetMixin}

      &:hover::before {
        ${hoverMixin}
      }
    `;
  } else {
    return css`
      ${$target} {
        ${targetMixin}
      }

      &:hover ${$target}::before {
        ${hoverMixin}
      }
    `;
  }
};
