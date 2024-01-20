import React from 'react';
import { Box, Button, Menu as MUiMenu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        Menu
      </Button>
      <MUiMenu
        id='simple-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to={'/'}>HomePage</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={'/table'}>TablePage</Link>
        </MenuItem>
      </MUiMenu>
    </Box>
  );
};
