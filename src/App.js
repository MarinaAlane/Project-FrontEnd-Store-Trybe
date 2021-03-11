import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './services/Home';
import ShoppingCart from './services/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/shoppingcart" component={ ShoppingCart } />
    </BrowserRouter>
  );
}

export default App;
