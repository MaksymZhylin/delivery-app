import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar className='navcontent'>
        <div className='navlinks'>
          <Link to='/' className='link'>
            Home
          </Link>
          <Link to='/cart' className='link'>
            Shoping Cart
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
