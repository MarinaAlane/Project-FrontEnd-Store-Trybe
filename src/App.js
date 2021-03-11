import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';

function App() {
  { getCategories() }
  { getProductsFromCategoryAndQuery("MLB1648", "I7") }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
