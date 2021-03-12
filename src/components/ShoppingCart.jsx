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
  }

  render() {
    const { listOfProducts } = this.state;
    if (listOfProducts.length === 0) {
      return (
        <section>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </section>
      );
    }
    return (
      <div>
        {
          listOfProducts.map(({ title, thumbnail, quantity, id }) => (
            <div key={ id }>
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <img
                src={ thumbnail }
                alt={ `foto ${title}` }
              />
              <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
            </div>
          ))
        }
        {/*  O QUE PRECISA RENDERIZA
         DESESTRUTURAR O LISTOFPRODUCTS
         RENDERIZAR */}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.string.isRequired,
};

export default ShoppingCart;
