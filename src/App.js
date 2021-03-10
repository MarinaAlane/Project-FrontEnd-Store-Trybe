import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import ProductsShowcase from './Pages/ProductsShowcase';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  api.getProductsFromCategoryAndQuery('MLB923744806', 'livro').then((categories) => { console.log(categories); });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsShowcase } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
