import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Navigation } from "../components/navigation/navigation";
import { Reviews } from "../feature/reviews/reviews";

export function Home() {
  const { t } = useTranslation();

  return (
    <Box>
      <Navigation>
        <Button variant="contained" color="primary" data-testid="home-button">
          {t("navigation.home")}
        </Button>
      </Navigation>
      <Reviews />
    </Box>
  );
}
