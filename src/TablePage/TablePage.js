import { Box } from '@mui/material';

import { boxStyles } from './sxStyles';
import { BasicTable } from '../BasicTable/BasicTable';
import { Menu } from '../Menu/Menu';
import { TableVirtuosoComponent } from '../TableVirtuoso/TableVirtuoso';

export const TablePage = () => {
  return (
    <>
      <Menu />
      <Box sx={boxStyles}>JUST HEADER</Box>
      <Box sx={boxStyles}>Some another content</Box>
      {/* <BasicTable /> */}
      <TableVirtuosoComponent />
    </>
  );
};
