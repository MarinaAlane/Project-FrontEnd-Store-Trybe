import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingCart from './components/shopping_cart/ShoppingCart';
import ButtonCart from './components/shopping_cart/ButtonCart';

function App() {
  return (
    <BrowserRouter>
      <ButtonCart />
      <Route path="/ShoppingCart" component={ ShoppingCart } />
    </BrowserRouter>
  );
}

export default App;
