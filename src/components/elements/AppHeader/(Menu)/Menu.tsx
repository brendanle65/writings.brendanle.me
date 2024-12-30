// import other
import { AppSocials, AppFavorites } from "@components/elements";
import { useAnimate } from "@hooks/useAnimate";
import { Hoverable } from "@components/other";
import { DUMMY_FAVORITES } from "@constants/dummy";

// import animations
import { enter, exit } from "./Menu.animate";

// import styled components
import * as Styled from "./Menu.styled";

const FAVORITES = [
  {
    text: "About The Writer",
    href: "/",
    font: "eb_garamond",
  },
  ...DUMMY_FAVORITES,
];

interface MenuProps {
  // Function to call to close the menu
  close: () => void;
}

/**
 * On mobile, renders a toggable navigation menu listing socials and important links.
 *
 * @component
 * @private
 */
export function Menu({ close }: MenuProps) {
  const scope = useAnimate({ enter, exit });

  return (
    <Styled.Menu ref={scope}>
      <Styled.MenuHeader>
        <Styled.ThemeButton className="animate-cycle-button" />

        <Hoverable as={Styled.CloseMenuButton} onClick={close} className="animate-close-button">
          close
        </Hoverable>
      </Styled.MenuHeader>

      <Styled.MenuLinks>
        <AppFavorites size="large" favorites={FAVORITES} />
      </Styled.MenuLinks>

      <AppSocials as="footer" size="large" />

      <Styled.MenuBackground className="animate-menu-background" />
    </Styled.Menu>
  );
}
