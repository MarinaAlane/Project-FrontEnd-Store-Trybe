import React from 'react';
import './App.css';
import * as api from './services/api';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductsShowcase from './components/ProductsShowcase';

function App() {
  api.getCategories().then((categories) => { console.log(categories); });
  return (
    <div>
      {}
    </div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsShowcase } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
