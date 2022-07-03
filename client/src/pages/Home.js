import React from 'react';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

import Goods from '../components/Goods';
import Stores from '../components/Stores';

const Home = () => {
  return (
    <>
      <Container className='top'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3} md={2} lg={2}>
            <Stores />
          </Grid>
          <Grid item xs={12} sm={9} md={10} lg={10}>
            <Goods />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
