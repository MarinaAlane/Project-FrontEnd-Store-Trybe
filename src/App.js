import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Carrinho from './components/Carrinho';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route exact path="/components/carrinho" component={ Carrinho } />
      </BrowserRouter>
    </div>
  );
}

export default App;
