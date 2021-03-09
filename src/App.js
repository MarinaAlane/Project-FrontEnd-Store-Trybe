import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductsShowcase from './components/ProductsShowcase';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsShowcase } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
