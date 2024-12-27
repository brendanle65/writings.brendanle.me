// import libraries
import { ReactNode } from "react";

// import other
import { Cursor } from "@components/navigation";

// import styled components
import * as Styled from "./AppLayout.components";

interface AppLayoutProps {
  // The content to wrap this component with.
  children: ReactNode;
}

/**
 * Layout component that wraps every page,
 * providing the main header, footer, and a custom cursor.
 *
 * It also handles the initial splash page.
 *
 * @layout
 */
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Styled.Container>
      {children}
      <Cursor />
    </Styled.Container>
  );
}
