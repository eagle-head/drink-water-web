"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";

export default function Settings() {
  const [enableAlarms, setEnableAlarms] = useState(true);

  const handleToggleAlarms = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = event.target.checked;

    setEnableAlarms(prev => {
      if (prev === newState) {
        return prev;
      }
      return newState;
    });
  };

  const handleAlarmSettingsClick = () => {
    // Placeholder para abrir o pop-up ou dialog no futuro
    console.log("Alarm settings clicked");
  };

  return (
    <Box width="100%" maxWidth={480} mx="auto" pt={2}>
      <List>
        <ListItemButton>
          <ListItemText primary="Units" secondary="ml" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="Goal" secondary="2000 ml" />
        </ListItemButton>
        <Divider />
        <ListItem>
          <ListItemText primary="Enable alarms" />
          <Switch checked={enableAlarms} onChange={handleToggleAlarms} color="primary" />
        </ListItem>
        <Divider />
        <ListItemButton onClick={handleAlarmSettingsClick} disabled={!enableAlarms}>
          <ListItemText primary="Alarm settings" secondary="08:00 .. 22:00 (each 90 min)" />
        </ListItemButton>
      </List>
    </Box>
  );
}
