import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-item" data-testid="product">
        <h4>{product.title}</h4>
        <img alt={ `${product.title}` } src={ product.thumbnail } />
        <p>{ product.price }</p>
        <br />
        {/* utilizei a explicação aqui ->https://ui.dev/react-router-v4-pass-props-to-link/<-
          para passar product pelo Link */}
        <button type="button" className="details-button">
          <Link
            to={ {
              pathname: `/product/${product.id}`,
              state: { details: product },
            } }
            data-testid="product-detail-link"
          >
            Detalhes
          </Link>
        </button>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductItem;
