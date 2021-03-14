import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import DetailedProduct from './pages/DetailedProduct';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route
            path="/detailed-product/:id"
            render={ (props) => <DetailedProduct { ...props } /> }
          />
          {/* <Route path="/" component={Home} /> */}
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
