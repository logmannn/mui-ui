import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import AppRoutes from "./routes";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
