import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.getProductFromCard = this.getProductFromCard.bind(this);
    this.state = {
      productState: {},
      shoppingCart: [],
    };
  }

  getProductFromCard(event, product) {
    if (event.target.className === 'shopping-card') {
      this.setState({
        productState: product,
      }, () => this.addToCart());
    }
    this.setState({ productState: product });
  }

  addToCart() {
    const { shoppingCart, productState } = this.state;
    this.setState({ shoppingCart: [...shoppingCart, productState] });
  }

  render() {
    const { shoppingCart, productState } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Route>
            <Switch>
              <Route
                exact
                path="/"
                render={ (props) => (
                  <ProductList
                    { ...props }
                    getProductFromCard={ this.getProductFromCard }
                  />) }
              />
              <Route
                path="/shopping-cart"
                render={ (props) => (
                  <ShoppingCart { ...props } shoppingCart={ shoppingCart } />) }
              />
              <Route
                path="/product-details"
                render={ (props) => (
                  <ProductDetails { ...props } product={ productState } />) }
              />
            </Switch>
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
