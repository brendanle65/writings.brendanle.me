// import libraries
import "styled-components";

// import other
import { Theme } from "@constants/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
