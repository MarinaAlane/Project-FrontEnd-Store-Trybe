import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <section className="products-container">
        { product.length !== 0
          ? product.map(({ id, title, thumbnail, price }) => (
            <div key={ id } className="product-card" data-testid="product">
              <span>{title}</span>
              <img src={ thumbnail } alt={ title } />
              <p>{`R$ ${price}`}</p>
            </div>))
          : (
            <h1>
              Produto nao encontrado.
            </h1>)}
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
};

ProductCard.defaultProps = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
};

export default ProductCard;
