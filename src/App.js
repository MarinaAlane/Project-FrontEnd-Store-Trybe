import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

import * as api from './services/api';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/" component={Home} /> */}
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>

      {/* { api.getCategories().then((categories) => console.log(categories)) } */}

      {/* { api.getProductsFromCategoryAndQuery(null, 'cinta').then((search) => console.log(search)) } */}
      {/* { api.getProductsFromCategoryAndQuery('MLB1071').then((categoryID) => console.log(categoryID)) } */}
      {/* { api.getProductsFromCategoryAndQuery("MLB1540", 'cinta').then((categories) => console.log(categories)) } */}
    </div>
  );
}

export default App;
