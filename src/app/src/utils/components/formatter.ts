import { useMediaQuery, useTheme } from "@mui/material";

export const getTitle = (item: { titlemobile?: string; title?: string }) => {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobileDevice ? item.titlemobile || item.title || "" : item.title || "";
};
