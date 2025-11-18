import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import styled from "styled-components";

const CenteredBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

function NotFound() {
  const navigate = useNavigate();

  return (
    <CenteredBox>
      <Paper
        elevation={3}
        sx={{
          p: 6,
          textAlign: "center",
          borderRadius: 3,
          maxWidth: 500,
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: 100,
            color: "error.main",
            mb: 2,
          }}
        />
        <Typography variant="h1" component="h1" gutterBottom fontWeight={700}>
          404
        </Typography>
        <Typography variant="h5" gutterBottom color="text.secondary">
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          paragraph
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/")}
          sx={{ mt: 2, px: 4 }}
        >
          Go Home
        </Button>
      </Paper>
    </CenteredBox>
  );
}

export default NotFound;
