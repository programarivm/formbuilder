import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "actions/counterActions";
import { add as addTextarea, cancel as cancelTextarea } from "actions/textareaActions";
import htmlTagTypes from 'constants/htmlTag/Types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function TextareaDialog() {
  const [state, setState] = useState({
    label: null,
    placeholder: '',
    type: htmlTagTypes.TEXTAREA
  });

  const count = useSelector(state => state.counter.count);

  const open = useSelector(state => state.textarea.open);

  const dispatch = useDispatch();

  const handleTextareaChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const textarea = {
      ...state,
      order: count,
      html: `<label>${state.label}</label><textarea placeholder="${state.placeholder}" />`
    };
    dispatch(addTextarea(textarea));
    dispatch(increaseCount());
  }

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Textarea</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              name="label"
              label="Label"
              type="text"
              fullWidth
              required
              onChange={handleTextareaChange}
            />
            <TextField
              margin="dense"
              name="placeholder"
              label="Placeholder"
              type="text"
              fullWidth
              onChange={handleTextareaChange}
            />
            <DialogActions>
              <Button color="primary" type="submit">
                Add
              </Button>
              <Button onClick={() => dispatch(cancelTextarea())} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
