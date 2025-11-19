import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const CenteredBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

export function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          {t("notFound.title")}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          {t("notFound.message")}
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/")}
          sx={{ mt: 2, px: 4 }}
        >
          {t("notFound.backHome")}
        </Button>
      </Paper>
    </CenteredBox>
  );
}
