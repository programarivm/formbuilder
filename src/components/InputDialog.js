import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "actions/counterActions";
import { add as addInput, cancel as cancelInput } from "actions/inputActions";
import htmlTagTypes from 'constants/htmlTag/Types';
import htmlTagInputTypes from 'constants/htmlTag/input/Types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, MenuItem,
  TextField, Select } from '@material-ui/core';

export default function InputDialog() {
  const initialState = {
    label: null,
    placeholder: '',
    type: htmlTagTypes.INPUT,
    subtype: htmlTagInputTypes.TEXT
  };

  const [state, setState] = useState(initialState);

  const count = useSelector(state => state.counter.count);

  const open = useSelector(state => state.input.open);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = {
      ...state,
      order: count,
      html: `<label>${state.label}</label><input type="${state.subtype}" placeholder="${state.placeholder}" />`
    };
    dispatch(addInput(input));
    dispatch(increaseCount());
    setState(initialState);
  }

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Input</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <InputLabel>Type</InputLabel>
            <Select
              value={state.subtype}
              name="subtype"
              fullWidth
              required
              onChange={handleInputChange}
            >
              <MenuItem value="" disabled>
                Select a type
              </MenuItem>
              {Object.keys(htmlTagInputTypes).map((key, i) => (
                <MenuItem key={i} value={htmlTagInputTypes[key]}>
                  {key.charAt(0) + key.substring(1).toLowerCase()}
                </MenuItem>
              ))}
            </Select>
            <TextField
              autoFocus
              margin="dense"
              name="label"
              label="Label"
              type="text"
              fullWidth
              required
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="placeholder"
              label="Placeholder"
              type="text"
              fullWidth
              onChange={handleInputChange}
            />
            <DialogActions>
              <Button color="primary" type="submit">
                Add
              </Button>
              <Button onClick={() => dispatch(cancelInput())} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
