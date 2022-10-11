import { useMediaQuery, useTheme } from "@mui/material";
import * as React from "react";
import { GridProps, GridVariant } from "../models/components";
import Grid from "./Grid";
import Walkthrough from "./Walkthrough";

export default function GridWalk(props: GridProps) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const getBlock = React.useCallback(() => {
    return props.variant === GridVariant.WALK ? (
      <Walkthrough {...props} />
    ) : (
      <Grid {...props} />
    );
  }, []);

  return <>{getBlock()}</>;
}
