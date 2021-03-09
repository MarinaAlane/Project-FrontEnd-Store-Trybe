import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ SearchBar } />
      <Route path='/shopping-cart' component={ ShoppingCart } />
    </BrowserRouter>
  );
}

export default App;
