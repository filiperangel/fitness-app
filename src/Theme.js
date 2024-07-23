import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#92A3FD",
      alternative: "#9DCEFF",
    },
    secondary: {
      main: "#C58BF2",
      alternative: "#EEA4CE",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
});

export default theme;
