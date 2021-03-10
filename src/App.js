import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AsideCategoriesList from './components/AsideCategoriesList';
import ProductList from './ProductList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
      <AsideCategoriesList />
    </div>
  );
}

export default App;
