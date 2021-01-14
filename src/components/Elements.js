import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, tag, name) {
  return { id, tag, name };
}

const rows = [
  createData(0, '<input>', 'username'),
  createData(1, '<input>', 'email'),
  createData(3, '<select>', 'browser'),
  createData(2, '<textarea>', 'comments'),
];

export default function Elements() {
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell><code>{row.tag}</code></TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
