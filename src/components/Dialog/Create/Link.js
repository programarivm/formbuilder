import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancel as cancelLink } from "actions/linkActions";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

export default function Link() {
  const [state, setState] = useState();
  const open = useSelector(state => state.link.open);
  const dispatch = useDispatch();

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Soon available!</DialogTitle>
        <DialogContent>
          <p>Please be patient and stay tuned.</p>
          <DialogActions>
            <Button onClick={() => dispatch(cancelLink())} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
