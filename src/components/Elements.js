import React from "react";
import { useSelector } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

export default function Elements() {
  const state = useSelector(state => state);

  return (
    <React.Fragment>
      <Title>Form Elements</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tag</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.input.items.map((row, i) => (
            <TableRow key={i}>
              <TableCell><code>&lt;input&gt;</code></TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
          {state.select.items.map((row, i) => (
            <TableRow key={i}>
              <TableCell><code>&lt;select&gt;</code></TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
          {state.textarea.items.map((row, i) => (
            <TableRow key={i}>
              <TableCell><code>&lt;textarea&gt;</code></TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
