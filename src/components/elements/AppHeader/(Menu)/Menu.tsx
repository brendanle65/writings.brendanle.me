// import other
import { AppSocials, AppFavorites } from "@components/elements";
import { useAnimate } from "@hooks/useAnimate";
import { Hoverable } from "@components/other";
import { LOCAL_FAVORITES_MENU } from "@constants/local";

// import animations
import { enter, exit } from "./Menu.animate";

// import styled components
import * as Styled from "./Menu.styled";

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
        <AppFavorites size="large" favorites={LOCAL_FAVORITES_MENU} />
      </Styled.MenuLinks>

      <AppSocials as="footer" size="large" align="end" />

      <Styled.MenuBackground className="animate-menu-background" />
    </Styled.Menu>
  );
}
