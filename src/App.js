import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Home from "./pages/onboarding/home/Home";
import theme from "./Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
