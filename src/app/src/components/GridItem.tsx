import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { GridItemProps } from "../models/components";
import ReactMarkdown from "react-markdown";
export default function GridItem(
  props: GridItemProps & { navigable?: boolean; displayBody?: boolean }
) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
    >
      {props.image && (
        <Box sx={{ pb: 1 }}>
          <GatsbyImage
            image={getImage(props.image.localFile)!}
            alt={props.image.alternativeText}
          />
        </Box>
      )}
      <Typography
        variant="sidenav"
        component={"div"}
        sx={{
          color: props.navigable
            ? theme.palette.primary.main
            : theme.palette.text.primary,
        }}
      >
        {isMobileDevice ? props.titlemobile : props.title}
      </Typography>
      {props.displayBody && (
        <Typography variant="body2" component="div">
          <ReactMarkdown>{props.body?.data?.body || ""}</ReactMarkdown>
        </Typography>
      )}
    </Box>
  );
}
