import { createTheme } from "@mui/material/styles";
import {
  PRIMARY_COLOR_MAIN,
  PRIMARY_COLOR_ALTERNATIVE,
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR_MAIN,
  SECONDARY_COLOR_ALTERNATIVE,
  SECONDARY_TEXT_COLOR,
} from "./contants/colors";

import { DEFAULT_BUTTON_HEIGHT } from "./contants/sizes";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    button: {
      fontWeight: "bold",
      textTransform: "none",
      fontSize: "17px",
    },
  },
  palette: {
    primary: {
      main: PRIMARY_COLOR_MAIN,
      alternative: PRIMARY_COLOR_ALTERNATIVE,
      contrastText: PRIMARY_TEXT_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR_MAIN,
      alternative: SECONDARY_COLOR_ALTERNATIVE,
      contrastText: SECONDARY_TEXT_COLOR,
    },
    text: {
      primary: PRIMARY_TEXT_COLOR,
      secondary: SECONDARY_TEXT_COLOR,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          height: DEFAULT_BUTTON_HEIGHT,
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              background: `linear-gradient(45deg, ${theme.palette.primary.alternative}, ${theme.palette.primary.main})`,
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "secondary" && {
              background: `linear-gradient(45deg, ${theme.palette.secondary.alternative}, ${theme.palette.secondary.main})`,
            }),
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          height: DEFAULT_BUTTON_HEIGHT,
          width: DEFAULT_BUTTON_HEIGHT,
          borderRadius: "50%",
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              background: `linear-gradient(80deg, ${theme.palette.primary.alternative}, ${theme.palette.primary.main})`,
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "secondary" && {
              background: `linear-gradient(80deg, ${theme.palette.secondary.alternative}, ${theme.palette.secondary.main})`,
            }),
        }),
      },
    },
  },
});

export default theme;
