import { Typography } from "@mui/material";
import { Showcase } from "@pagopa/mui-italia/dist/components/Showcase";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import { GridProps } from "../models/components";
import { getTitle } from "../utils/components/formatter";
import Image from "./Image";

export default function Grid(props: GridProps) {
  return (
    <Showcase
      title={getTitle(props)}
      items={
        props.items?.map((item) => ({
          icon: item.image ? <Image {...item.image} /> : undefined,
          title: getTitle(item),
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
