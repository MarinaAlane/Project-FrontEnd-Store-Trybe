import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShopCart from './components/ShopCart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route path="/" component={ SearchBar } />
          <Route path="/ShopCart" component={ ShopCart } />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
