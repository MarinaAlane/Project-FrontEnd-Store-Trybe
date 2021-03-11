import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route path="/cartPage" component={ CartPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
