"use client";

import { useCallback, useState } from "react";

import WaterDropIcon from "@mui/icons-material/WaterDrop";
import Button from "@mui/material/Button";

import { DrinkDialog } from "./drink-dialog";

export function DrinkButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Button
        startIcon={<WaterDropIcon />}
        variant="contained"
        size="large"
        sx={{
          marginTop: "4rem",
        }}
        onClick={handleOpen}>
        Drink
      </Button>

      <DrinkDialog open={open} onClose={handleClose} />
    </>
  );
}
