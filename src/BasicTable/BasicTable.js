import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useInView } from 'react-intersection-observer';
import { cell, row } from './sxStyles';

const defaultItems = new Array(20).fill(null);
const nextItems = new Array(5).fill(null);

const TableRowList = React.forwardRef(({ position }, ref) => {
  return (
    <TableRow ref={ref} sx={row}>
      <TableCell sx={cell}>{position}</TableCell>
      <TableCell sx={cell}>{position}</TableCell>
      <TableCell sx={cell}>{position}</TableCell>
      <TableCell sx={cell}>{position}</TableCell>
      <TableCell sx={cell}>{position}</TableCell>
      <TableCell sx={cell}>{position}</TableCell>
    </TableRow>
  );
});

const BasicTable = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const [items, setItems] = React.useState(defaultItems);

  React.useEffect(() => {
    if (inView) {
      setItems((prevItems) => [...prevItems, ...nextItems]);
    }
  }, [inView])
  

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
        {items.map((item, index, arr) => {
          if (index !== arr.length - 1)
            return <TableRowList position={index} key={index} />;

          // We are observing only the last row element.
          // So when it enters the viewport, inView becames 'true',
          // then we add 5 more elements to the end of the items array.
          return <TableRowList ref={ref} position={index} key={index} />;
        })}
      </TableBody>
    </Table>
  );
};
export default BasicTable;
