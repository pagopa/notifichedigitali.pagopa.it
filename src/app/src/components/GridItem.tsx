import { Box, Typography, useTheme } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import { GridItemProps } from "../models/components";
import { getTitle } from "../utils/components/formatter";
export default function GridItem(
  props: GridItemProps & { navigable?: boolean; displayBody?: boolean }
) {
  const theme = useTheme();

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
        {getTitle(props)}
      </Typography>
      {props.displayBody && (
        <Typography variant="body2" component="div">
          <ReactMarkdown>{props.body?.data?.body || ""}</ReactMarkdown>
        </Typography>
      )}
    </Box>
  );
}
