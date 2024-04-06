import React from "react";
import {Dialog, DialogContent,DialogActions,Button,DialogContentText,DialogTitle} from '@mui/material'
const ConfirmDeleteDialog = ({ open, handleClose, deleteHandler }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this group?
        </DialogContentText>
          </DialogContent>
          <DialogActions>
              <Button variant="outlined" onClick={handleClose}>No</Button>
              <Button onClick={deleteHandler} color="error" variant="contained">Yes</Button>
          </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
