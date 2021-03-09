import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
// import fetchAPI from './services/api';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ ProductList } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
    </BrowserRouter>
  );
}

export default App;
