import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingCart from './components/shopping_cart/ShoppingCart';
import ButtonCart from './components/shopping_cart/ButtonCart';
import ProductList from './ProductList';

function App() {
  return (
    <BrowserRouter>
      <ProductList />
      <ButtonCart />
      <Route path="/ShoppingCart" component={ ShoppingCart } />
    </BrowserRouter>
  );
}

export default App;
