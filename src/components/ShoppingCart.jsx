import React from 'react';
import { Link } from 'react-router-dom';
import ProductsAtCart from '../services/data';
//  import { incrementProduct } from '../services/dataservices';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: ProductsAtCart,
    };
    this.emptyMessage = this.emptyMessage.bind(this);
    this.renderCardItem = this.renderCardItem.bind(this);
    this.subtractQuantity = this.subtractQuantity.bind(this);
  }

  emptyMessage() {
    return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
  }

  subtractQuantity() {
    const { products } = this.state;
    const { quantity } = products;
    if (quantity < 1) {
      this.setState({
        [quantity]: 0,
      });
    } else {
      this.setState((state) => (
        { [quantity]: state.quantity - 1 }
      ));
    }
  }

  renderCardItem() {
    const { products } = this.state;
    return products.map(({ image, title, price, id, quantity }) => (
      <div data-testid="shopping-cart-product-name" key={ id }>
        <img src={ image } alt={ title } />
        <h1>{ title }</h1>
        <p>{ price }</p>
        <p>
          Valor total:
          { price * quantity }
        </p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.subtractQuantity }
          >
            -
          </button>
          { quantity }
        </p>
      </div>
    ));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Link to="/">Voltar</Link>
        <div>
          { ProductsAtCart.length === 0 ? this.emptyMessage() : this.renderCardItem() }
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
