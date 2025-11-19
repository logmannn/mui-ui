import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import AppRoutes from "./routes";
import "./i18n/config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
