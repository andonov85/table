import { Suspense, lazy } from 'react';
import { Box } from '@mui/material';

import { boxStyles } from './sxStyles';
import { Menu } from '../Menu/Menu';
import { TableVirtuosoComponent } from '../TableVirtuoso/TableVirtuoso';
import BasicTable from '../BasicTable/BasicTable';

export const TablePage = () => {
  const LazyBasicTable = lazy(() => import('../BasicTable/BasicTable'));

  return (
    <>
      <Menu />
      <Box sx={boxStyles}>JUST HEADER</Box>
      <Box sx={boxStyles}>Some another content</Box>

      <BasicTable />

      {/* <Suspense fallback={<Box sx={boxStyles}>Loading...</Box>}>
        <LazyBasicTable />
      </Suspense> */}
      {/* <TableVirtuosoComponent /> */}
    </>
  );
};
