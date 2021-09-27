import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 720,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
