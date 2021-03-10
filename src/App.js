import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import shoppingCart from './shoppingCart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/shoppingCart" component={ shoppingCart } />
          <Route path="/productdetails/:id" component={ ProductDetails } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
