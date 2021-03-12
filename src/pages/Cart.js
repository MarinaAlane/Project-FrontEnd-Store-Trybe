import React, { Component } from 'react';
import Card from '../components/Card';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [],
    };
  }

  componentDidMount() {
    this.getProdutsInLocalStorage();
  }

  getProdutsInLocalStorage() {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (itemsInCart) {
      this.setState({
        cartProducts: [...itemsInCart],
      });
    }
  }

  render() {
    const { cartProducts } = this.state;
    if (cartProducts.length > 0) {
      return (
        <div>
          <h3 data-testid="shopping-cart-product-quantity">
            Você possui
            { ` ${cartProducts.length} ` }
            itens no carrinho
          </h3>
          {cartProducts.map((product) => (
            <Card
              key={ product }
              product={ product }
              testid="shopping-cart-product-name"
            />
          ))}
        </div>
      );
    }

    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

export default Cart;
