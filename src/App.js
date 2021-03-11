import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ (props) => <Home { ...props } /> } />
          <Route path="/shopping-cart" render={ (props) => <Cart { ...props } /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
