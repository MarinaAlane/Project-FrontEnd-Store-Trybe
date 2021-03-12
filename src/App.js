import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import Detalhes from './components/Detalhes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    const { cartItems } = this.state;
    this.setState({
      cartItems: [...cartItems, product],
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route
              path="/carrinho"
              render={ () => <Carrinho products={ cartItems } /> }
            />
            <Route path="/:id/detalhes" component={ Detalhes } />
            <Route
              exact
              path="/"
              render={ () => <Home addToCart={ this.addToCart } /> }
            />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
