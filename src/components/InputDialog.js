import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add as addInput, cancel as cancelInput } from "../actions/inputActions";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [state, setState] = useState({
    name: ''
  });

  const open = useSelector(state => state.input.open);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name] : event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addInput(state));
  }

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Input</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
          <Button onClick={() => dispatch(cancelInput())} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
