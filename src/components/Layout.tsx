import { ReactNode } from "react";
import { Box, Container } from "@mui/material";

function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
