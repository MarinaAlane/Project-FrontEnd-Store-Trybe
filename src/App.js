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
    this.removeItem = this.removeItem.bind(this);
  }

  addToCart(product) {
    const { cartItems } = this.state;
    if (cartItems.length > 0) {
      return cartItems.every(({ id }) => id !== product.id)
        && this.setState({ cartItems: [...cartItems, product] });
    }
    this.setState({ cartItems: [...cartItems, product] });
  }

  removeItem(itemTitle) {
    const { cartItems } = this.state;
    const item = cartItems.find(({ title }) => title === itemTitle);
    cartItems.splice(cartItems.indexOf(item), 1);
    this.setState({ cartItems });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route
              path="/carrinho"
              render={ () => (<Carrinho
                products={ cartItems }
                removeProduct={ this.removeItem }
              />) }
            />
            <Route
              path="/:id/detalhes"
              render={ (props) => <Detalhes { ...props } addToCart={ this.addToCart } /> }
            />
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
