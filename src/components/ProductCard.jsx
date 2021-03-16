import React from 'react';
import PropTypes from 'prop-types';
import '../componentStyles/ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { data } = this.props;
    const { title, thumbnail, price } = data;
    if (Object.keys(data).length) {
      return (
        <div data-testid="product" className="product-card">
          <h2>{title}</h2>
          <div>
            <img src={ thumbnail } alt={ title } />
          </div>
          <p>{`R$ ${price}`}</p>
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
