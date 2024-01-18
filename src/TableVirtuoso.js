import { TableVirtuoso } from 'react-virtuoso';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const items = new Array(10000);
items.fill('test');

const cells = new Array(6);
cells.fill('test');

const TableComponents = {
  Scroller: React.forwardRef((props, ref) => {
    console.log('tablecontainer', props);
    return (
      <TableContainer
        component={Paper}
        {...props}
        ref={ref}
        sx={{ '-webkit-overflow-scrolling': 'auto' }}
      />
    );
  }),
  Table: (props) => {
    console.log('table', props);
    return <Table {...props} style={{ borderCollapse: 'separate' }} />;
  },
  TableHead: TableHead,
  TableRow: TableRow,
  TableBody: React.forwardRef((props, ref) => {
    console.log('tableBody', props);
    return (
      <TableBody
        {...props}
        ref={ref}
        sx={{
          '& .MuiTableCell-root:first-child': {
            position: 'sticky',
            left: 0,
            zIndex: 1,
            backgroundColor: 'red',
            '&:first-child tr td': {
              backgroundColor: 'red',
            },
          },
        }}
      />
    );
  }),
};

export default function TableVirtuosoTest() {
  return (
    <TableVirtuoso
      style={{ height: '100vh' }}
      data={items}
      components={TableComponents}
      fixedHeaderContent={() => (
        <TableRow>
          <TableCell
            sx={{
              width: '400px',
              minWidth: '400px',
              position: 'sticky',
              left: 0,
              zIndex: 1,
              backgroundColor: 'red',
            }}
          >
            Name
          </TableCell>
          <TableCell sx={{ width: '400px', minWidth: '400px' }}>
            Description
          </TableCell>
          <TableCell sx={{ width: '400px', minWidth: '400px' }}>
            Description
          </TableCell>
          <TableCell sx={{ width: '400px', minWidth: '400px' }}>
            Description
          </TableCell>
          <TableCell sx={{ width: '400px', minWidth: '400px' }}>
            Description
          </TableCell>
          <TableCell sx={{ width: '400px', minWidth: '400px' }}>
            Description
          </TableCell>
        </TableRow>
      )}
      itemContent={(index, item) => (
        <>
          {cells.map((item, index) => {
            return <TableCell sx={{}}>{item}</TableCell>;
          })}
        </>
      )}
    />
  );
}
