import React, { Component } from 'react';
import StateContext from '../../components/StateContext';
import * as api from '../../services/api';

class CartProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: [],
      productId: [],
    };
    this.fetchAds = this.fetchAds.bind(this);
  }

  componentDidUpdate() {
    const { cartProducts: stateProducts } = this.state;
    const { cartproducts: contextProducts } = this.context;
    if (stateProducts !== contextProducts) this.fetchAds(contextProducts);
    console.log(contextProducts);
  }

  async fetchAds(productId) {
    if (productId) {
      productId.forEach((id) => {
        api.getProductByID(id)
          .then((product) => this.setState((prevState) => ({
            cartProducts: [...prevState.cartProducts, product] }
          )));
      });
    }
  }

  render() {
    const { cartProducts, productId } = this.state;
    return (
      <StateContext.Consumer>
        {() => {
          cartProducts.map(({ title, thumbnail, price, id }) => (
            <div key={ id }>
              <p>{title}</p>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
            </div>
          ));
        }}
      </StateContext.Consumer>
    );
  }
}

CartProducts.contextType = StateContext;

export default CartProducts;
