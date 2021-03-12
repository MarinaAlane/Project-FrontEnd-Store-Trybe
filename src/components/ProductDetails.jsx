import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductsAtCart from '../services/data';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.productRender = this.productRender.bind(this);
  }

  productRender() {
    const { location } = this.props;
    console.log(location);
    const { state } = location;
    const { title, image, price } = state;
    return (
      <div>
        <Link to="/shopping-cart">Carrinho</Link>
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
            onClick={
              () => ProductsAtCart.push({ title, image, price })
            }
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
    const { productDetail } = this.state;
    console.log(this.props);
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
    }),
  }).isRequired,
};

export default ProductDetails;
