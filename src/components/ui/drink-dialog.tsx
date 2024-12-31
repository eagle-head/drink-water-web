"use client";

import { ChangeEventHandler, useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

interface DrinkDialogProps {
  open: boolean;
  onClose: () => void;
}

export function DrinkDialog({ open, onClose }: DrinkDialogProps) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit() {
    console.log("Input Value: ", inputValue);
    handleClose();
  }

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = event => {
    const newValue = event.target.value.trim();
    setInputValue(prevState => (newValue !== prevState ? newValue : prevState));
  };

  function handleClose() {
    onClose();
    setInputValue("");
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title" aria-describedby="dialog-description">
      <DialogTitle id="dialog-title">Enter Value</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          Please enter the amount of water you drank (in ml).
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="water-intake"
          label="Water (ml)"
          type="number"
          fullWidth
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
