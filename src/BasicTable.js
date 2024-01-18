import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Box } from '@mui/material';

import { Virtuoso } from 'react-virtuoso';

const items = new Array(1000);
items.fill('test');

const TableRowList = ({ position, style }) => {
  console.log(style);
  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
      style={style}
    >
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
        {position}
      </TableCell>
      <TableCell sx={{ width: '400px', minWidth: '400px' }}>
        {position}
      </TableCell>
      <TableCell sx={{ width: '400px', minWidth: '400px' }}>
        {position}
      </TableCell>
      <TableCell sx={{ width: '400px', minWidth: '400px' }}>
        {position}
      </TableCell>
      <TableCell sx={{ width: '400px', minWidth: '400px' }}>
        {position}
      </TableCell>
      <TableCell sx={{ width: '400px', minWidth: '400px' }}>
        {position}
      </TableCell>
      <TableCell sx={{ width: '400px', minWidth: '400px' }}>
        {position}
      </TableCell>
    </TableRow>
  );
};

const TableComponents = {
  Scroller: React.forwardRef((props, ref) => {
    console.log('tablecontainer', props);
    return <TableContainer component={Paper} {...props} ref={ref} />;
  }),
};

export default function BasicTable() {
  const outerRef = React.useRef(null);
  return (
    <>
      <div>TEST</div>

      <Table>
        <TableHead sx={{ zIndex: 2, position: 'sticky', top: 0 }}>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* <AutoSizer>
          {({ height, width }) => {
            return (
              <List
                height={1000}
                itemCount={items.length}
                itemSize={50}
                width={500}
                outerElementType={'tbody'}
                innerElementType={'div'}
                // outerRef={outerRef}
              >
                {({ style, index }) => (
                  <TableRowList position={index} style={style} key={index} />
                )}
              </List>
            );
          }}
        </AutoSizer> */}
          <Virtuoso
            style={{ height: '400px' }}
            totalCount={items.length}
            components={TableComponents}
            itemContent={(index) => (
              <TableRowList position={index} key={index} />
            )}
          />
          {/* </TableBody> */}
          {/* {items.map((item, index) => (
              <TableRowList position={index} key={index} />
            ))} */}
        </TableBody>
      </Table>
    </>
  );
}
