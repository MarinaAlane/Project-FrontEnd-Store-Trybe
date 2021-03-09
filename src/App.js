import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import './App.css';


import * as api from './services/api';

function App() {
  api.getProductsFromCategoryAndQuery();
  return (
    <BrowserRouter>
      <Route path="/" component={ ProductList } />
    </BrowserRouter>
  );
}

export default App;
