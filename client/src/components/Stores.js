import React, { useContext } from 'react';
import { AppBar, Container, Toolbar, Box } from '@mui/material';

import StoresButton from './StoresButton';
import { AppContext } from './AppContext';

const Stores = () => {
  const { getStores, storesList } = useContext(AppContext);

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl' className='content'>
          <Toolbar disableGutters>
            <Box>
              {getStores()}
              {storesList.map((val, key) => (
                <StoresButton key={val.id} name={val.name} id={val.id} />
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Stores;
