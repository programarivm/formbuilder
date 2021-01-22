import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../actions/counterActions";
import { add as addSelect, cancel as cancelSelect } from "../actions/selectActions";
import htmlTagTypes from '../constants/htmlTag/Types';
import Button from '@material-ui/core/Button';
import ChipInput from 'material-ui-chip-input';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SelectDialog() {
  const [state, setState] = useState({
    label: null,
    order: null,
    placeholder: null,
    options: [],
    type: htmlTagTypes.SELECT
  });

  const count = useSelector(state => state.counter.count);

  const open = useSelector(state => state.select.open);

  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    setState({
      ...state,
      order: count,
      [event.target.name] : event.target.value
    });
  }

  const handleAddChip = (chip) => {
    setState({
      ...state,
      order: count,
      options: [...state.options, chip]
    });
  }

  const handleDeleteChip = (chip) => {
    setState({
      ...state,
      order: count,
      options: state.options.filter(item => item !== chip)
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addSelect(state));
    dispatch(increaseCount());
  }

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Select</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="label"
            label="Label"
            type="text"
            fullWidth
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
            value={state.options}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip, i) => handleDeleteChip(chip, i)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
          <Button onClick={() => dispatch(cancelSelect())} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
