import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "actions/counterActions";
import { add as addSelect, cancel as cancelSelect } from "actions/selectActions";
import htmlTagTypes from 'constants/htmlTag/Types';
import ChipInput from 'material-ui-chip-input';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

export default function Select() {
  const initialState = {
    label: null,
    placeholder: 'Select an option',
    options: [],
    type: htmlTagTypes.SELECT
  };

  const [state, setState] = useState(initialState);

  const count = useSelector(state => state.counter.count);

  const open = useSelector(state => state.select.open);

  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    setState({
      ...state,
      [event.target.name] : event.target.value
    });
  }

  const handleAddChip = (chip) => {
    setState({
      ...state,
      options: [...state.options, chip]
    });
  }

  const handleDeleteChip = (chip) => {
    setState({
      ...state,
      options: state.options.filter(item => item !== chip)
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const options = (state.options).map(option => `<option>${option}</option>`).join('');
    const select = {
      ...state,
      order: count,
      html: `<label>${state.label}</label><select><option disabled selected>${state.placeholder}</option>${options}</select>`
    };
    dispatch(addSelect(select));
    dispatch(increaseCount());
    setState(initialState);
  }

  const handleCancel = (event) => {
    event.preventDefault();
    dispatch(cancelSelect());
    setState(initialState);
  }

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Select</DialogTitle>
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
              onChange={handleSelectChange}
            />
            <TextField
              margin="dense"
              name="placeholder"
              label="Placeholder"
              type="text"
              fullWidth
              onChange={handleSelectChange}
            />
            <ChipInput
              label="Options"
              fullWidth
              required={state.options.length > 0 ? false : true}
              value={state.options}
              onAdd={(chip) => handleAddChip(chip)}
              onDelete={(chip, i) => handleDeleteChip(chip, i)}
            />
            <DialogActions>
              <Button color="primary" type="submit">
                Add
              </Button>
              <Button onClick={handleCancel} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
