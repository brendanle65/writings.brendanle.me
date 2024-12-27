// import libraries
import styled, { css } from "styled-components";

// import other
import { CursorExtras, CursorState } from "@contexts/CursorContext";

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
  transition: width 0.25s ease-out, height 0.25s ease-out,
    background-color ${(props) => `${props.theme.transitions.theme.duration} ${props.theme.transitions.theme.easing}}`};

  ${(props) => {
    if (props.$state === CursorState.IDLE)
      return css`
        width: 25px;
        height: 25px;
        background-color: ${props.theme.colors.cursor};
        filter: ${props.theme.name === "light" ? "invert(100%)" : "none"}; // account for mix-blend-mode
        border-radius: ${props.theme.radii.full};
      `;
    else if (props.$state === CursorState.HOVER) {
      return css`
        width: 9px;
        height: 9px;
        background-color: ${props.theme.colors.cursor};
        border-radius: ${props.theme.radii.full};
      `;
    } else if (props.$state === CursorState.IMAGE) {
      return css`
        width: ${props.$extras.image?.width || "144px"};
        height: ${props.$extras.image?.height || "144px"};
        background-color: ${props.theme.colors.cursor};
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
