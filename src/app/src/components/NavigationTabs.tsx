import { Box, Tab, Tabs } from "@mui/material";
import * as React from "react";
import { NavigationTabsProps } from "../models/components";
import isBrowser from "../utils/browser";

export default function NavigationTabs({
  items,
}: {
  items: Array<NavigationTabsProps>;
}) {
  const [value, setValue] = React.useState(
    isBrowser ? window.location.pathname.split("/")[1] : ""
  );

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    isBrowser ? (window.location.href = "/" + newValue) : "";
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="tabs navigation">
        {items.map((item, index) => (
          <Tab
            label={item.title}
            key={index}
            value={item.title?.toLowerCase()}
          />
        ))}
      </Tabs>
    </Box>
  );
}
