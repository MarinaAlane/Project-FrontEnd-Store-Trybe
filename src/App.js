import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/homePage';
import EmptyCart from './Components/emptyCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/emptyCart" component={ EmptyCart } />
    </BrowserRouter>
  );
}

export default App;

// retirei o Componente itemList já que não estávamos mais o utilizando
