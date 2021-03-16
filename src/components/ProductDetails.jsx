import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { incrementProduct } from '../services/dataservices';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.productRender = this.productRender.bind(this);
  }

  productRender() {
    const { location } = this.props;
    const { state } = location;
    const { title, image, price, productId } = state;
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Carrinho</Link>
        <div data-testid="product-detail-name">
          {title}
        </div>
        <div data-testid="shopping-cart-product-name">
          <h1>{ title }</h1>
          <img src={ image } alt={ title } />
          <p>{ price }</p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => {
              incrementProduct({ title, image, price, productId, quantity: 1 });
            } }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }

  loading() {
    return <div> loading </div>;
  }

  render() {
    return (
      <div>
        {this.productRender()}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.string,
      productId: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
