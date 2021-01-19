import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
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

export default function Elements() {
  const classes = useStyles();

  const state = useSelector(state => state);

  const elems = [
    ...state.input.items,
    ...state.select.items,
    ...state.textarea.items
  ];

  return (
    <React.Fragment>
      <Title>Form Elements</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tag</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {elems.map((row, i) => (
            <TableRow key={i}>
              <TableCell>
                <code>&lt;{row.type.toLowerCase()}&gt;</code>
              </TableCell>
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell>
                <IconButton aria-label="delete" className={classes.margin}>
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
