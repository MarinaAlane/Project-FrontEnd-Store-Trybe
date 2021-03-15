import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InitialPage from './components/InitialPage';
import ShoppingCart from './components/ShoppingCart';
import FullProduct from './components/FullProduct';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addProductToCart = this.addProductToCart.bind(this);

    this.state = {
      cartProducts: [],
    };
  }

  addProductToCart(newProduct) {
    const { id } = newProduct;
    const storage = 'ShoppingCart';
    let cart = [];
    if (localStorage.getItem(storage) != null) {
      cart = JSON.parse(localStorage.getItem(storage));
    }
    cart.push({ id, quantity: 1 });
    localStorage.setItem(storage, JSON.stringify(cart));
    // const { cartProducts } = this.state;
    // this.setState({
    //   cartProducts: [...cartProducts, newProduct],
    // });
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <InitialPage addProductToCart={ this.addProductToCart } /> }
            />
            <Route
              exact
              path="/cart"
              render={ () => <ShoppingCart cartProducts={ cartProducts } /> }
            />
            <Route
              path="/product/:id/"
              render={ (props) => (<FullProduct
                { ...props }
                addProductToCart={ this.addProductToCart }
              />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
