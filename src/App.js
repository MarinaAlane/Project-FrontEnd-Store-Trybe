import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import * as api from './services/api';
import Home from './Components/homePage';
import EmptyCart from './Components/emptyCart';
import ItemList from './Components/itemList';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/emptyCart" component={ EmptyCart } />
      <Route path="/inputQuery" component={ ItemList } />
    </BrowserRouter>
  );
}

export default App;
