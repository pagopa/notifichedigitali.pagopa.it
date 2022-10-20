import { Link } from "@mui/material";
import * as React from "react";
import { LinkProps } from "../models/components";
import GridItem from "./GridItem";
import isBrowser from "../utils/browser";

export default function LinkComponent(props: LinkProps) {
  return (
    <Link
      href={props.externalurl}
      target={props.target}
      rel="noopener noreferrer"
      style={{ textDecoration: "none", cursor: "pointer" }}
      onClick={() => {
        const route = props.page?.slug || "";
        !props.externalurl && isBrowser && (window.location.href = "/" + route);
      }}
    >
      <GridItem {...{ image: props.image, ...props, navigable: true }} />
    </Link>
  );
}
