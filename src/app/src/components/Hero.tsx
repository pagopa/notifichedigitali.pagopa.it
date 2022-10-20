import { Typography } from "@mui/material";
import { Hero } from "@pagopa/mui-italia/dist/components/Hero";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import { HeroProps } from "../models/components";
import { getTitle } from "../utils/components/formatter";
import getConfig from "../utils/config/config";
import { getSrc } from "gatsby-plugin-image";
import isBrowser from "../utils/browser";

export default function HeroComponent(props: HeroProps) {
  const appConfig = getConfig();

  return (
    isBrowser && (
      <Hero
        title={getTitle(props)}
        subtitle={
          <Typography variant="body2" component="div" sx={{ color: "white" }}>
            <ReactMarkdown>{props.body?.data?.body || ""}</ReactMarkdown>
          </Typography>
        }
        inverse={props.imageposition === "left"}
        background={props.images?.[1]?.url}
        {...(props.images
          ? {
              image: `${
                getSrc(props.images[0].localFile) || props.images[0].url
              }`,
              type: "image",
              altText: "",
            }
          : {
              type: "text",
            })}
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
                ? (window.location.href = props.buttons?.[1].page?.slug)
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
