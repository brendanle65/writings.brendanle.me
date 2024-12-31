// import libraries
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// import other
import { CursorState } from "@contexts/CursorContext";
import { Hoverable } from "@components/other";
import { Menu } from "./(Menu)/Menu";

// import styled components
import * as Styled from "./AppHeader.styled";

/**
 * The main header attached to the top of each page, displaying the logo and link to about me.
 *
 * @component
 */
export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const open = () => setIsMenuOpen(true);
  const close = () => setIsMenuOpen(false);

  return (
    <>
      <header>
        <Styled.Nav>
          <Styled.Logo>Brendan's Writings</Styled.Logo>

          <Hoverable as={Styled.OpenMenuButton} onClick={open}>
            menu
          </Hoverable>
          <Hoverable as={Styled.AboutLink} href="/writings/about-the-writer" $cursorState={CursorState.HEADSHOT}>
            about the writer
          </Hoverable>
        </Styled.Nav>
      </header>

      <AnimatePresence mode="wait">{isMenuOpen && <Menu close={close} />}</AnimatePresence>

      <Styled.PinnedThemeButton />
    </>
  );
}
