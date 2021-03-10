import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Pages/Search';
import Carrinho from './Pages/Carrinho';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route path="/carrinho" component={ Carrinho } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
