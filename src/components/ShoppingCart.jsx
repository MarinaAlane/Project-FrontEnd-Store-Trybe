import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { state } = location;
    this.state = {
      listOfProducts: [...state],
    };
    this.increaseProductQuantity = this.increaseProductQuantity.bind(this);
    this.decreaseProductQuantity = this.decreaseProductQuantity.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.renderEmptyCart = this.renderEmptyCart.bind(this);
  }

  increaseProductQuantity(id) {
    const { listOfProducts } = this.state;
    const item = listOfProducts.find((product) => product.id === id);
    console.log(item);
  }

  decreaseProductQuantity() {
    console.log('clicou');
  }

  deleteProduct() {
    console.log('clicou');
  }

  renderEmptyCart() {
    return (
      <section>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </section>
    );
  }

  // COLOCAR O PRECO TOTAL E O PRECO POR ITEM...

  render() {
    const { listOfProducts } = this.state;
    const emptyCart = this.renderEmptyCart();
    if (listOfProducts.length === 0) return emptyCart;
    return (
      <div>
        {
          listOfProducts.map(({ title, thumbnail, quantity, id }) => (
            <div key={ id }>
              <button
                type="button"
                onClick={ this.deleteProduct }
              >
                X
              </button>
              <img
                src={ thumbnail }
                alt={ `foto ${title}` }
              />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <div>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.increaseProductQuantity(id) }
                >
                  +
                </button>
                <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ this.decreaseProductQuantity }
                >
                  -
                </button>
                <p>Preço do produto: </p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
};

export default ShoppingCart;
