import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { AppBar, Container, Toolbar, Box } from '@mui/material';

import GoodsCard from './GoodsCard';
import { AppContext } from './AppContext';

const Goods = () => {
  const { getItems, itemsList, selectStores, setSelectedGoods } =
    useContext(AppContext);

  const setSelectedGoodsHanler = (val) => () => {
    setSelectedGoods(val);
  };

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl' className='content goods'>
          <Toolbar disableGutters>
            <Box>
              {getItems()}
              <Grid container spacing={2}>
                {itemsList.map(
                  (val, key) =>
                    val.id_s === selectStores && (
                      <GoodsCard
                        key={val.id_i}
                        name={val.name_i}
                        price={val.price_i}
                        img={val.img_i}
                        onClick={setSelectedGoodsHanler(val)}
                      />
                    )
                )}
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Goods;
