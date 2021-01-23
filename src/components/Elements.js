import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount } from "../actions/counterActions";
import { del as deleteInput } from "../actions/inputActions";
import { del as deleteTextarea } from "../actions/textareaActions";
import { del as deleteSelect } from "../actions/selectActions";
import htmlTagTypes from '../constants/htmlTag/Types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

  const handleDelete = (event, elem) => {
    event.preventDefault()
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
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tag</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Placeholder</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {elems.map((elem, i) => (
            <TableRow key={i}>
              <TableCell>
                <code>&lt;{elem.type.toLowerCase()}&gt;</code>
              </TableCell>
              <TableCell>
                {elem.label}
              </TableCell>
              <TableCell>
                {elem.placeholder}
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  className={classes.margin}
                  onClick={(e) => handleDelete(e, elem)}
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
