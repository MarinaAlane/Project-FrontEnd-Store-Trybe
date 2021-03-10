import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import ShoppingCart from './components/ShoppingCart';
import ItemDetails from './components/ItemDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/details/:id" component={ ItemDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
