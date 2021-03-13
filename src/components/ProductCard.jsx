import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { data } = this.props;
    const { title, thumbnail, price } = data;
    if (Object.keys(data).length) {
      return (
        <div data-testid="product">
          <h2>{ title }</h2>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}` }</p>
        </div>
      );
    }
    return <div />;
  }
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
