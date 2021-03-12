import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path="/shopping-cart" render={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
