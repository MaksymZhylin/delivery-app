import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import NoMatchPage from './pages/NoMatchPage';
import Home from './pages/Home';
import Cart from './pages/Cart';

import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />

        <Route element={<NoMatchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
