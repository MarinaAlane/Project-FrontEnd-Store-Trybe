import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import SearchBar from './SearchBar';
import ShopCart from './ShopCart';

class Content extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route exact path="/shopping-cart" component={ ShopCart } />
        </Switch>
      </main>
    );
  }
}

export default Content;
