import React, { useContext, useState } from 'react';
import SelectGoodsCard from './SelectGoodsCard';

import { AppContext } from './AppContext';

const SelectedProducts = () => {
  const { selectedGoods } = useContext(AppContext);
  const [selectedAllGoods, setSelectedAllGoods] = useState(null);

  return (
    <>
      {selectedGoods ? (
        <SelectGoodsCard
          key={selectedGoods.id_i}
          name={selectedGoods.name_i}
          price={selectedGoods.price_i}
          img={selectedGoods.img_i}
        />
      ) : (
        <h1>Cart is clear</h1>
      )}
    </>
  );
};

export default SelectedProducts;
