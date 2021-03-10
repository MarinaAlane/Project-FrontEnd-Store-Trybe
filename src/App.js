import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
// import * as api from './services/api';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
//  api.getCategories().then((categories) => console.log(categories));
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
