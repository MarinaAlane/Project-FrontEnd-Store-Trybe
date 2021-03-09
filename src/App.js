import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchField from './Components/SearchField';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ SearchField } />
    </BrowserRouter>
  );
}

export default App;
