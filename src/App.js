import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import InitialPage from './pages/InitialPage';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './components/checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ InitialPage } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route path="/checkout" component= { Checkout } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
