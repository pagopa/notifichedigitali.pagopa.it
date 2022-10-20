import { Typography } from "@mui/material";
import { Infoblock } from "@pagopa/mui-italia";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import altIcon from "../images/altIcon.png";
import { HeroProps } from "../models/components";
import { getTitle } from "../utils/components/formatter";
import getConfig from "../utils/config/config";
import { getSrc } from "gatsby-plugin-image";
import isBrowser from "../utils/browser";

export default function InfoblockComponent(props: HeroProps) {
  const appConfig = getConfig();
  const getImageAspectRatio = () =>
    (props.images?.[0].localFile?.childImageSharp?.original?.height as Number) >
    (props.images?.[0].localFile?.childImageSharp?.original?.width as Number)
      ? "9/16"
      : "4/3";

  return (
    isBrowser && (
      <Infoblock
        title={getTitle(props)}
        content={
          <Typography variant="body2" component="div">
            <ReactMarkdown>{props.body?.data?.body || ""}</ReactMarkdown>
          </Typography>
        }
        inverse={props.imageposition === "left"}
        imageShadow={false}
        aspectRatio={getImageAspectRatio()}
        image={
          `${getSrc(props.images[0].localFile) || props.images?.[0].url}` ||
          altIcon
        }
        ctaPrimary={
          props.buttons?.[0] && {
            label: props.buttons[0].title || "",
            title: props.buttons[0].title || "",
            onClick: () => {
              props.buttons && props.buttons[0].page?.slug
                ? (window.location.href = props.buttons[0].page?.slug)
                : window
                    .open(
                      props.buttons?.[0].externalurl,
                      props.buttons?.[0].target
                    )
                    ?.focus();
            },
          }
        }
        ctaSecondary={
          props.buttons?.[1] && {
            label: props.buttons[1].title || "",
            title: props.buttons[1].title || "",
            onClick: () => {
              props.buttons && props.buttons[1].page?.slug
                ? (window.location.href = props.buttons[1].page?.slug)
                : window
                    .open(
                      props.buttons?.[1].externalurl,
                      props.buttons?.[1].target
                    )
                    ?.focus();
            },
          }
        }
      />
    )
  );
}
