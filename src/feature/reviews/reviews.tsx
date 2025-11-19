import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export function Reviews() {
  const { t } = useTranslation();

  return (
    <Box
      height="75vh"
      sx={{
        background:
          "linear-gradient(135deg, rgb(210, 87, 25) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <Stack direction="row" spacing={2} height="100%">
        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
          height="100%"
          display="flex"
        >
          <Typography variant="h2">{t("reviews.title")}</Typography>
        </Box>
        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
          height="100%"
          display="flex"
        >
          <Typography variant="body1">{t("reviews.description")}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
