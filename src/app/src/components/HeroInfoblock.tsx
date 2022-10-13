import { Alert, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { HeroProps, HeroVariant } from "../models/components";
import { getTitle } from "../utils/components/formatter";
import HeroComponent from "./Hero";
import InfoblockComponent from "./Infoblock";

export default function HeroInfoblock(props: HeroProps) {
  const theme = useTheme();
  const variant = props.extra?.variant;
  const alert = props.extra?.alert;

  if (alert) {
    return (
      <Alert
        severity={alert.severity}
        variant={alert.variant}
        sx={{
          borderLeftColor: theme.palette.info.main + " !important",
          borderLeft: "4px solid",
          alignItems: "center",
        }}
      >
        <Typography
          variant="sidenav"
          component="div"
          textAlign="left"
          whiteSpace="normal"
        >
          {getTitle(props)}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          textAlign="left"
          whiteSpace="normal"
        >
          {props?.body?.data?.body}
        </Typography>
      </Alert>
    );
  }
  return variant === HeroVariant.WHITE ? (
    <InfoblockComponent {...props} />
  ) : (
    <HeroComponent {...props} />
  );
}
