import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "actions/counterActions";
import { add as addInput, cancel as cancelInput } from "actions/inputActions";
import htmlTagTypes from 'constants/htmlTag/Types';
import htmlTagInputTypes from 'constants/htmlTag/input/Types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

import InputForm from 'components/Dialog/Form/Input';

export default function Input() {
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
            <InputForm state={state} />
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
