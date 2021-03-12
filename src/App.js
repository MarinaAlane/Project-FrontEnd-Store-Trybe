import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
// import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ ProductList } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
      <Route path="/product-details" component={ ProductDetails } />
    </BrowserRouter>
  );
}

export default App;
