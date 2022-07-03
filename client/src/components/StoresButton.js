import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { AppContext } from './AppContext';

const GoodsCard = (props) => {
  const { setSelectStores } = useContext(AppContext);

  const { name, id } = props;

  return (
    <Button variant='outlined' size='large' onClick={() => setSelectStores(id)}>
      {name}
    </Button>
  );
};

export default GoodsCard;
