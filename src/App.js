import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route path="/cart" component={ ShoppingCart } />
        </Switch>
      </Router>
    );
  }
}

export default App;
