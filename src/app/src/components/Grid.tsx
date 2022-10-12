import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Showcase } from "@pagopa/mui-italia";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import { GridProps } from "../models/components";
import getConfig from "../utils/config/config";

export default function Grid(props: GridProps) {
  const theme = useTheme();
  const appConfig = getConfig();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Showcase
      title={isMobileDevice ? props.titlemobile || "" : props.title || ""}
      items={
        props.items?.map((item) => ({
          icon: item.image ? (
            item.image?.localFile?.extension === "svg" ? (
              <img
                src={`${appConfig.STRAPI_API_URL}${item.image?.url}`}
                alt={item.image?.alternativeText}
                style={{ width: "64px", height: "64px" }}
              />
            ) : (
              <GatsbyImage
                image={getImage(item.image.localFile)!}
                alt={item.image.alternativeText}
              />
            )
          ) : undefined,
          title: isMobileDevice ? item.titlemobile || "" : item.title || "",
          subtitle: (
            <Typography variant="body2" component="div">
              <ReactMarkdown>{item.body?.data?.body || ""}</ReactMarkdown>
            </Typography>
          ),
        })) || []
      }
    />
  );
}
