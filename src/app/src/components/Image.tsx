import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { StrapiImage } from "../models/components";
import getConfig from "../utils/config/config";

export default function Image(props: StrapiImage) {
  const appConfig = getConfig();

  return (
    <>
      {props.localFile?.extension === "svg" ? (
        <img
          src={`${props.url}`}
          alt={props.alternativeText}
          style={{ width: "64px", height: "64px" }}
        />
      ) : (
        <GatsbyImage
          image={getImage(props.localFile)!}
          alt={props.alternativeText}
        />
      )}
    </>
  );
}
