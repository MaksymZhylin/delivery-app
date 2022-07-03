import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const SelectGoodsCard = (props) => {
  const { name, price, img, onClick } = props;
  const [totalBill, setTotalBill] = useState(1);
  const [priceGood, setPriceGood] = useState(price);

  return (
    <>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          image={img}
          component='img'
          alt={name}
          title={name}
          sx={{ width: 220 }}
        />
        <CardContent>
          <Typography variant='h6' component='h3'>
            {name}
          </Typography>
          <Typography variant='body1'>Price: $ {priceGood}.</Typography>
          <TextField
            type='number'
            name='totalBill'
            label='Total Bill'
            variant='filled'
            value={totalBill}
            onChange={(event) => {
              setTotalBill(event.target.value);
              setPriceGood(price * totalBill);
            }}
          />
          <h3>All Price: {totalBill}!</h3>
        </CardContent>
      </Card>
    </>
  );
};

export default SelectGoodsCard;
