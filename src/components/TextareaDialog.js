import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add as addTextarea, cancel as cancelTextarea } from "../actions/textareaActions";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function TextareaDialog() {
  const [state, setState] = useState({
    name: ''
  });

  const open = useSelector(state => state.textarea.open);

  const dispatch = useDispatch();

  const handleTextareaChange = (event) => {
    setState({
      ...state,
      [event.target.name] : event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addTextarea(state));
  }

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Textarea</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            onChange={handleTextareaChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
          <Button onClick={() => dispatch(cancelTextarea())} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
