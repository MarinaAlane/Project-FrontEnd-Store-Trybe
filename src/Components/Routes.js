import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import ShoppingCart from './ShoppingCart';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ App } />
        <Route path='/ShoppingCart' component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;