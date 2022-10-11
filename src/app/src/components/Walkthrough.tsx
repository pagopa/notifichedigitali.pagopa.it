import { useMediaQuery, useTheme } from "@mui/material";
import { Walkthrough } from "@pagopa/mui-italia";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { GridProps } from "../models/components";

export default function WalkthroughComponent(props: GridProps) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Walkthrough
      title={isMobileDevice ? props.titlemobile || "" : props.title || ""}
      items={
        props.items?.map((item) => ({
          icon: item.image ? (
            <GatsbyImage
              image={getImage(item.image.localFile)!}
              alt={item.image.alternativeText}
            />
          ) : undefined,
          title: isMobileDevice ? item.titlemobile || "" : item.title || "",
          subtitle: item.body?.data?.body || "",
          isSequential: item.issequential ?? true,
        })) || []
      }
    />
  );
}
