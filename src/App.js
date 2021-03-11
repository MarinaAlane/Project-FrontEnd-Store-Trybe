import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import * as api from './services/api';
import Home from './Components/homePage';
import Cart from './Components/cart';
import Details from './Components/details';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
        <Route path="/details/:id" component={ Details } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
