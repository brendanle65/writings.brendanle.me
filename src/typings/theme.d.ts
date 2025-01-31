// import types
import { JSX, ReactNode } from "react";
import { ThemeType } from "@constants/theme";

// import libraries
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}

  // Utility type for custom React components to be compatible with styled components when inheriting/wrapping
  // e.g. styled(MyCustomComponent)``;
  export interface InheritStyledProps {
    children?: ReactNode;

    className?: string;

    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  }
}
