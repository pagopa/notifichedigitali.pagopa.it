import { Alert, Typography, useMediaQuery, useTheme } from "@mui/material";
import * as React from "react";
import {
  AlertSeverity,
  AlertVariant,
  HeroProps,
  HeroVariant,
} from "../models/components";
import HeroComponent from "./Hero";
import InfoblockComponent from "./Infoblock";

export default function HeroInfoblock(props: HeroProps) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const variant = props.extra?.variant;
  const alert = props.extra?.alert;

  const getBlock = React.useCallback(
    ({
      variant,
      alert,
      children,
    }: {
      variant?: HeroVariant;
      alert?: { severity: AlertSeverity; variant: AlertVariant };
      children?: HeroProps;
    }) => {
      if (alert) {
        return (
          <Alert
            severity={alert.severity}
            variant={alert.variant}
            sx={{
              my: 2,
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
              {isMobileDevice ? children?.titlemobile : children?.title}
            </Typography>
            <Typography
              variant="body2"
              component="div"
              textAlign="left"
              whiteSpace="normal"
            >
              {children?.body.data.body}
            </Typography>
          </Alert>
        );
      }
      return variant === HeroVariant.WHITE ? (
        <InfoblockComponent {...props} />
      ) : (
        <HeroComponent {...props} />
      );
    },
    []
  );

  return <>{getBlock({ variant, alert, children: props })}</>;
}
