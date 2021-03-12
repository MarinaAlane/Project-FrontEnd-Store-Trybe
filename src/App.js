import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Pages/Search';
import Carrinho from './Pages/Carrinho';
import SingleView from './Pages/SingleView';
import Checkout from './Pages/Checkout';
import NotFound from './Pages/NotFound';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.shoppingCartChange = this.shoppingCartChange.bind(this);

    this.state = {
      totalShoppingCart: [],
    };
  }

  shoppingCartChange(value) {
    const { totalShoppingCart } = this.state;
    if (totalShoppingCart.includes(value)) return;
    this.setState({ totalShoppingCart: [...totalShoppingCart, value] });
  }

  render() {
    const { totalShoppingCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Search totalCart={ this.shoppingCartChange } /> }
          />
          <Route
            path="/carrinho"
            render={ () => (
              <Carrinho
                totalCart={ totalShoppingCart }
              />) }
          />
          <Route
            path="/productDetails/:id"
            render={ (props) => (
              <SingleView
                totalCart={ this.shoppingCartChange }
                { ...props }
              />) }
          />
          <Route path="/checkout" component={ Checkout } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
