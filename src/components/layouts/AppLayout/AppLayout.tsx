// import types
import { ReactNode } from "react";

// import other
import { AppHeader, AppFooter } from "@components/elements";

// import styled components
import * as Styled from "./AppLayout.styled";

interface AppLayoutProps {
  children: ReactNode;
}

/**
 * Component that wraps the entire page, providing essential navigation elements (header and footer),
 * and centers the main content.
 *
 * @layout
 */
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <AppHeader />

      <Styled.Center>
        <Styled.Main>{children}</Styled.Main>

        <AppFooter />
      </Styled.Center>
    </>
  );
}
