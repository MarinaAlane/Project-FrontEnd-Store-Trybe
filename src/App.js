import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import Detalhes from './components/Detalhes';
<<<<<<< HEAD
import Checkout from './components/Checkout';
=======
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };

    this.addToCart = this.addToCart.bind(this);
<<<<<<< HEAD
=======
    this.removeItem = this.removeItem.bind(this);
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
  }

  addToCart(product) {
    const { cartItems } = this.state;
<<<<<<< HEAD
    this.setState({
      cartItems: [...cartItems, product],
    });
=======
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
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
  }

  render() {
    const { cartItems } = this.state;
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route
              path="/carrinho"
<<<<<<< HEAD
              render={ () => <Carrinho products={ cartItems } /> }
            />
            <Route
              path="/checkout"
              render={ () => <Checkout products={ cartItems } /> }
=======
              render={ () => (<Carrinho
                products={ cartItems }
                removeProduct={ this.removeItem }
              />) }
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
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
