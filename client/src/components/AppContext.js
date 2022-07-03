import React, { useState } from 'react';
import Axios from 'axios';

const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [storesList, setStoresList] = useState([]);
  const [itemsList, setItemsList] = useState([]);
  const [selectStores, setSelectStores] = useState(1);
  const [selectedGoods, setSelectedGoods] = useState(null);

  const getStores = () => {
    Axios.get('http://localhost:3001/stores')
      .then((response) => {
        setStoresList(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getItems = () => {
    Axios.get('http://localhost:3001/items')
      .then((response) => {
        setItemsList(response.data);
      })
      .catch((err) => console.log(err));
  };

  const value = {
    storesList,
    setStoresList,
    itemsList,
    setItemsList,
    getStores,
    getItems,
    selectStores,
    setSelectStores,
    selectedGoods,
    setSelectedGoods,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextProvider, AppContext };
