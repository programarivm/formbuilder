import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../actions/counterActions";
import { add as addInput, cancel as cancelInput } from "../actions/inputActions";
import htmlTagTypes from '../constants/htmlTag/Types';
import htmlTagInputTypes from '../constants/htmlTag/input/Types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function InputDialog() {
  const [state, setState] = useState({
    label: null,
    order: null,
    placeholder: null,
    type: htmlTagTypes.INPUT,
    subtype: null
  });

  const count = useSelector(state => state.counter.count);

  const open = useSelector(state => state.input.open);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setState({
      ...state,
      order: count,
      [event.target.name] : event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addInput(state));
    dispatch(increaseCount());
  }

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Input</DialogTitle>
        <DialogContent>
          <InputLabel>Type</InputLabel>
          <Select
            name="subtype"
            fullWidth
            onChange={handleInputChange}
          >
            {Object.keys(htmlTagInputTypes).map((key, i) => (
              <MenuItem key={i} value={key}>{key.charAt(0) + key.substring(1).toLowerCase()}</MenuItem>
            ))}
          </Select>
          <TextField
            autoFocus
            margin="dense"
            name="label"
            label="Label"
            type="text"
            fullWidth
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
