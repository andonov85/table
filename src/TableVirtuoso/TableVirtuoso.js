import { TableVirtuoso } from 'react-virtuoso';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { cell, row } from './sxStyles';

const items = new Array(3000);
items.fill(null);

const cells = new Array(6);
cells.fill(null);

const TableComponents = {
  Scroller: React.forwardRef((props, ref) => {
    return <TableContainer component={Paper} {...props} ref={ref} />;
  }),
  Table: (props) => {
    console.log('table', props);
    return <Table {...props} style={{ borderCollapse: 'separate' }} />;
  },
  TableHead: TableHead,
  TableRow: TableRow,
  TableBody: React.forwardRef((props, ref) => {
    return <TableBody {...props} ref={ref} />;
  }),
};

export const TableVirtuosoComponent = () => {
  return (
    <TableVirtuoso
      style={{ height: '100vh' }}
      data={items}
      components={TableComponents}
      fixedHeaderContent={() => (
        <TableRow sx={row}>
          <TableCell sx={cell}>column 1</TableCell>
          <TableCell sx={cell}>column 2</TableCell>
          <TableCell sx={cell}>column 3</TableCell>
          <TableCell sx={cell}>column 4</TableCell>
          <TableCell sx={cell}>column 5</TableCell>
          <TableCell sx={cell}>column 6</TableCell>
        </TableRow>
      )}
      itemContent={(index, item) => (
        <>
          {cells.map((item, index) => {
            return <TableCell>{index}</TableCell>;
          })}
        </>
      )}
    />
  );
};
