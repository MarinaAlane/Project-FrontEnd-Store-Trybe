import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { array, saveProduct } = this.props;
    const { title, price, thumbnail, id } = array;

    return (
      <div data-testid="product">
        <Link
          to={ {
            pathname: `detailed-product/${id}`,
            state: { array },
          } }
          data-testid="product-detail-link"
        >
          <img src={ thumbnail } alt={ title } />
          <h2 data-testid="shopping-cart-product-name">{title}</h2>
          <p>{price}</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => saveProduct(array) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  saveProduct: PropTypes.func,
  array: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }),
}.isRequired;

export default Product;
