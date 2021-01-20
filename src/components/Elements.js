import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount } from "../actions/counterActions";
import { del as deleteInput } from "../actions/inputActions";
import { del as deleteTextarea } from "../actions/textareaActions";
import { del as deleteSelect } from "../actions/selectActions";
import htmlTagTypes from '../constants/htmlTagTypes';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const del = (dispatch, elem) => {
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
}

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

  return (
    <React.Fragment>
      <Title>Form Elements</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Tag</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {elems.map((elem, i) => (
            <TableRow key={i}>
              <TableCell>
                {elem.label}
              </TableCell>
              <TableCell>
                <code>&lt;{elem.type.toLowerCase()}&gt;</code>
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  className={classes.margin}
                  onClick={() => {
                    del(dispatch, elem);
                    dispatch(decreaseCount());
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
