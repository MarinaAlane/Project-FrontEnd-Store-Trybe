import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, addProductsToCart } = this.props;
    // (category_id: categoryId) - code review SantosDiv
    const { id, title, thumbnail, price, category_id: categoryId } = product;
    return (
      <div data-testid="product-detail-link">
        <Link to={ `product/${categoryId}/${id}` }>
          <h2 data-testid="product">{ title }</h2>
          <img src={ thumbnail } alt="Imagen do produto" />
          <p>
            R$
            { price }
          </p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addProductsToCart(product) }
          id={ id }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
