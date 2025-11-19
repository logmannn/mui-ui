import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        {t("home.title")}
      </Typography>
    </Box>
  );
}

export default Home;
