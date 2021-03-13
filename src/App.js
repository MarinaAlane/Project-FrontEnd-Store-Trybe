import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import InitialPage from './pages/InitialPage';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ InitialPage } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route exact path="/" component={ ProductList } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
