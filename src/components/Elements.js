import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount } from "../actions/counterActions";
import { del as deleteInput } from "../actions/inputActions";
import { del as deleteTextarea } from "../actions/textareaActions";
import { del as deleteSelect } from "../actions/selectActions";
import htmlTagTypes from '../constants/htmlTag/Types';
import { Card, CardActions, CardContent, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Elements() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const state = useSelector(state => state);

  const elems = [
    ...state.input.items,
    ...state.select.items,
    ...state.textarea.items
  ]
  .sort((a, b) => (a.order - b.order))
  .map((elem, i) => {
    elem.order = i;
    return elem;
  });

  const handleEdit = (event, elem) => {
    event.preventDefault();
    // TODO ...
    console.log('TODO ...');
  }

  const handleDelete = (event, elem) => {
    event.preventDefault();
    switch (elem.type) {
      case htmlTagTypes.INPUT:
        dispatch(deleteInput(elem.order));
        break;
      case htmlTagTypes.TEXTAREA:
        dispatch(deleteTextarea(elem.order));
        break;
      case htmlTagTypes.SELECT:
        dispatch(deleteSelect(elem.order));
        break;
      default:
        break;
    }

    dispatch(decreaseCount());
  }

  return (
    <React.Fragment>
      {elems.map((elem, i) => (
        <Card key={i}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {elem.label}
            </Typography>
            <Typography color="textSecondary">
              <code>&lt;{elem.type.toLowerCase()}&gt;</code>
            </Typography>
            <Typography color="textSecondary">
              {elem.placeholder}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              aria-label="edit"
              className={classes.margin}
              onClick={(e) => handleEdit(e, elem)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              onClick={(e) => handleDelete(e, elem)}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </React.Fragment>
  );
}
