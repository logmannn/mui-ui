import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { RocketLaunch } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export function Navigation({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "secondary.main" }}
    >
      <Toolbar>
        <Button
          startIcon={<RocketLaunch />}
          variant="text"
          data-testid="app-name-button"
          sx={{ color: "white" }}
        >
          {t("common.appName")}
        </Button>
        <Box flex={1} />
        <Box>{children}</Box>
      </Toolbar>
    </AppBar>
  );
}
