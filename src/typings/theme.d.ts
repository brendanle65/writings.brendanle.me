// import libraries
import "styled-components";

// import other
import { BaseTheme } from "@constants/themes";

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {
    colors: {
      body: string;
      text: {
        500: string;
        1000: string;
      };
      divider: string;
    };
  }
}
