import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const GoodsCard = (props) => {
  const { name, price, img, onClick } = props;

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card
        sx={{
          height: '100%',
        }}
      >
        <CardMedia
          image={img}
          component='img'
          alt={name}
          title={name}
          sx={{ height: 220 }}
        />
        <CardContent>
          <Typography variant='h6' component='h3'>
            {name}
          </Typography>
          <Typography variant='body1'>Price: $ {price}.</Typography>
        </CardContent>
        <CardActions>
          <Button variant='text' onClick={onClick}>
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsCard;
