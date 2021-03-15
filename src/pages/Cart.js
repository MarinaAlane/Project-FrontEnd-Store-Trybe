import '../components/styles/style.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const arrow = ('https://cdn.iconscout.com/icon/free/png-512/reply-all-1578267-1341736.png');
    const cart = ('https://www.pinclipart.com/picdir/big/10-108329_cart-clip-art-at-clker-com-vector-shopping.png');
    if (cartProducts.length > 0) {
      return (
        <div>
          <Link to="/"><img src={ arrow } alt="arrow" className="button" /></Link>
          <div>
            <img src={ cart } alt="cart" className="button" />
            <span><strong> Carrinho de Compras</strong></span>
          </div>
          <h3 data-testid="shopping-cart-product-quantity">
            Você possui
            { ` ${cartProducts.length} ` }
            itens no carrinho
          </h3>
          <Link to="/checkout">
            <button type="button" data-testid="checkout-products">
              Finalizar Compra
            </button>
          </Link>
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
      <div>
        <Link to="/">
          <img src={ arrow } alt="arrow" className="button" />
        </Link>
        <div>
          <img
            src={ cart }
            alt="cart"
            className="button"
          />
          <span><strong> Carrinho de Compras</strong></span>
        </div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <img src="https://www.downloadclipart.net/medium/box-transparent-background.png" alt="box" />
      </div>
    );
  }
}

export default Cart;
