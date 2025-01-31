// import types
import { CursorExtras, CursorState } from "@contexts/CursorContext";

// import libraries
import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ $state: CursorState }>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999 !important;
  pointer-events: none;
  width: max-content;
  height: max-content;

  // has to be set on parent element to work
  mix-blend-mode: ${(props) => (props.$state === CursorState.IDLE ? "difference" : "none")};
`;

export const Cursor = styled.div<{ $state: CursorState; $extras?: CursorExtras }>`
  transform: translate(-50%, -50%);

  // do not use shorthand syntax, it leads to an invalid style when interpolating
  transition-property: width, height, background-color;
  transition-duration: 0.25s, 0.25s, ${(props) => props.theme.transitions.theme.duration};
  transition-timing-function: ease-out, ease-out, ${(props) => props.theme.transitions.theme.easing};

  ${(props) => {
    if (props.$state === CursorState.IDLE) {
      return css`
        width: 25px;
        height: 25px;
        background-color: ${props.theme.colors.cursor.background};
        filter: var(--theme-cursor-filter);
        border-radius: ${props.theme.radii.full};
      `;
    } else if (props.$state === CursorState.HOVER) {
      return css`
        width: 9px;
        height: 9px;
        background-color: ${props.theme.colors.cursor.background};
        border-radius: ${props.theme.radii.full};
      `;
    } else if (props.$state === CursorState.IMAGE) {
      return css`
        width: ${props.$extras.image?.width || "144px"};
        height: ${props.$extras.image?.height || "144px"};
        background-color: ${props.theme.colors.cursor.background};
      `;
    } else if (props.$state === CursorState.HEADSHOT) {
      return css`
        width: 55px;
        height: 60px;
        background-color: ${props.theme.colors.cursor.background};
        filter: ${props.theme.shadows.md};
        transition-duration: 0;
      `;
    }
  }}

  /** Hide cursor on devices with no cursor */
  @media (pointer: none), (pointer: coarse) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${(props) => props.theme.shadows.md};
`;

export const Headshot = styled.img`
  background-color: white;
  object-fit: cover;
  width: 100%;
  height: 100%;
  padding: 4px 4px 12px 4px;
`;
