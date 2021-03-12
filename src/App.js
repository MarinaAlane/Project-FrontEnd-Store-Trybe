import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart';
import SearchField from './Components/SearchField';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route exact path="/" component={ SearchField } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
