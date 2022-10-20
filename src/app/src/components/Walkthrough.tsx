import { Walkthrough } from "@pagopa/mui-italia/dist/components/Walkthrough";
import * as React from "react";
import { GridProps } from "../models/components";
import { getTitle } from "../utils/components/formatter";
import Image from "./Image";

export default function WalkthroughComponent(props: GridProps) {
  return (
    <>
      <Walkthrough
        title={getTitle(props)}
        items={
          props.items?.map((item) => ({
            icon: item.image ? <Image {...item.image} /> : undefined,
            title: getTitle(item),
            subtitle: item.body?.data?.body || "",
            isSequential: item.issequential ? true : false,
          })) || []
        }
      />
    </>
  );
}
