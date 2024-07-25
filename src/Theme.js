import { createTheme } from "@mui/material/styles";
import {
  PRIMARY_COLOR_MAIN,
  PRIMARY_COLOR_ALTERNATIVE,
  SECONDARY_COLOR_MAIN,
  SECONDARY_COLOR_ALTERNATIVE,
} from "./contants/colors";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    button: {
      fontWeight: "bold",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: PRIMARY_COLOR_MAIN,
      alternative: PRIMARY_COLOR_ALTERNATIVE,
      contrastText: "#FFF",
    },
    secondary: {
      main: SECONDARY_COLOR_MAIN,
      alternative: SECONDARY_COLOR_ALTERNATIVE,
      contrastText: "#FFF",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
});

export default theme;
