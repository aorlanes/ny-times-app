"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
    black: Palette["primary"];
  }
  interface PaletteOptions {
    white: PaletteOptions["primary"];
    black: PaletteOptions["primary"];
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    white: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1010,
      xl: 1350,
    },
  },
  palette: {
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#000000",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "white",
            borderRadius: 50,
          },
        },
        {
          props: { variant: "outlined" || "text" },
          style: {
            borderRadius: 50,
          },
        },
      ],
    },
  },
});

export default theme;
