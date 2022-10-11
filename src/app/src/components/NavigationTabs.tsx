import { Box, Tab, Tabs } from "@mui/material";
import * as React from "react";
import { NavigationTabsProps } from "../models/components";

export default function NavigationTabs({
  items,
}: {
  items: Array<NavigationTabsProps>;
}) {
  const [value, setValue] = React.useState(
    window.location.pathname.split("/")[1]
  );

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    window.location.href = "/" + newValue;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs navigation"
        >
          {items.map((item, index) => (
            <Tab label={item.title} key={index} value={item.title} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
