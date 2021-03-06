import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "actions/counterActions";
import { add as addTextarea, cancel as cancelTextarea } from "actions/textareaActions";
import htmlTagTypes from 'constants/htmlTag/Types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

export default function Textarea() {
  const initialState = {
    label: null,
    placeholder: '',
    type: htmlTagTypes.TEXTAREA
  };

  const [state, setState] = useState(initialState);

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
      html: `<label>${state.label}</label><textarea placeholder="${state.placeholder}"></textarea>`
    };
    dispatch(addTextarea(textarea));
    dispatch(increaseCount());
    setState(initialState);
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
