import "styled-components";
import "@mui/material/styles";
import type { ThemeType } from "styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
