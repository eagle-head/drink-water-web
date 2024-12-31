"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

const dataWaterIntakes = [
  { id: 1, volume: 200, time: "11:26:31 AM" },
  { id: 2, volume: 100, time: "11:26:30 AM" },
  { id: 3, volume: 250, time: "11:26:26 AM" },
  { id: 4, volume: 200, time: "11:26:24 AM" },
  { id: 5, volume: 100, time: "11:26:22 AM" },
];

export default function History() {
  return (
    <List sx={{ width: "100%", maxWidth: 480, mx: "auto" }}>
      {dataWaterIntakes.map(entry => (
        <ListItem
          key={entry.id}
          divider
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" color="primary" sx={{ marginRight: "0.25rem" }}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" color="error">
                <DeleteIcon />
              </IconButton>
            </>
          }>
          <ListItemAvatar sx={{ minWidth: "2.25rem" }}>
            <WaterDropIcon color="primary" />
          </ListItemAvatar>
          <ListItemText primary={`${entry.volume} ml`} secondary={entry.time} />
        </ListItem>
      ))}
    </List>
  );
}
