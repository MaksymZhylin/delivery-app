import React from 'react';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

import Form from '../components/Form';
import SelectedProducts from '../components/SelectedProducts';

const Cart = () => {
  return (
    <>
      <Container className='top'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3} md={2} lg={2}>
            <Form />
          </Grid>
          <Grid item xs={12} sm={9} md={10} lg={10}>
            <SelectedProducts />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
