import * as React from "react";
import { GridProps, GridVariant } from "../models/components";
import Grid from "./Grid";
import Walkthrough from "./Walkthrough";

export default function GridWalk(props: GridProps) {
  const getBlock = React.useCallback(() => {
    return props.variant === GridVariant.WALK ? (
      <Walkthrough {...props} />
    ) : (
      <Grid {...props} />
    );
  }, []);

  return <>{getBlock()}</>;
}
