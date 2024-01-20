import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { cell, row } from './sxStyles';

const items = new Array(10000);
items.fill(null);

const TableRowList = ({ position }) => {
  return (
    <TableRow sx={row}>
      <TableCell sx={cell}>{position}</TableCell>
      <TableCell sx={cell}>{position}</TableCell>
      <TableCell sx={cell}>{position}</TableCell>
      <TableCell sx={cell}>{position}</TableCell>
      <TableCell sx={cell}>{position}</TableCell>
      <TableCell sx={cell}>{position}</TableCell>
    </TableRow>
  );
};

const BasicTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Column 1</TableCell>
          <TableCell>Column 2</TableCell>
          <TableCell>Column 3</TableCell>
          <TableCell>Column 4</TableCell>
          <TableCell>Column 5</TableCell>
          <TableCell>Column 6</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item, index) => (
          <TableRowList position={index} key={index} />
        ))}
      </TableBody>
    </Table>
  );
};
export default BasicTable;
