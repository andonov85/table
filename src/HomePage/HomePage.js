import { Box } from '@mui/material';
import { Menu } from '../Menu/Menu';
import { boxStyles } from './sxStyles';

export const HomePage = () => {
  return (
    <>
      <Menu />
      <Box sx={boxStyles}>Home page</Box>
    </>
  );
};
