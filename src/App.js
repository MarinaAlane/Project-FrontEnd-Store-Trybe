import React from 'react';
import logo from './logo.svg';
import './App.css';

import * as api from './services/api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        { api.getCategories().then((categories) => console.log(categories)) }

        { api.getProductsFromCategoryAndQuery(null, 'cinta').then((search) => console.log(search)) }
        { api.getProductsFromCategoryAndQuery('MLB1071').then((categoryID) => console.log(categoryID)) }
        { api.getProductsFromCategoryAndQuery("MLB1540", 'cinta').then((categories) => console.log(categories)) }
      </header>
    </div>
  );
}

export default App;
