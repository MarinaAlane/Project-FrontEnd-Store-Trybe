import React from 'react';
import PropTypes from 'prop-types';

class ProductsCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <img src={ product.thumbnail } alt={ `Imagem da ${product.title}` } />
        <p>{ product.title }</p>
        <p>{ product.price }</p>
        <button type="button">ADICIONAR AO CARRINHO</button>

      </div>
    );
  }
}

ProductsCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,

}.isRequired;

export default ProductsCard;
