import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShopCart from './components/ShopCart';
import ListCategories from './components/ListCategories';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={ SearchBar } />
          <Route path="/shopping-cart" component={ ShopCart } />
        </Switch>
        <ListCategories />
      </div>
    </BrowserRouter>
  );
}

export default App;
