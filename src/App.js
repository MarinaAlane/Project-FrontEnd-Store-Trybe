import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import Detalhes from './components/Detalhes';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/components/carrinho" component={ Carrinho } />
          <Route exact path="/components/detalhes" component={ Detalhes } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
