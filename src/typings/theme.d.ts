// import libraries
import "styled-components";

// import other
import { ThemeType } from "@constants/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
