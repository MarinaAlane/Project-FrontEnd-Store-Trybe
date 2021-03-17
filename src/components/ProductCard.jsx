import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../componentStyles/ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { data } = this.props;
    const { title, thumbnail, price, id } = data;
    if (Object.keys(data).length) {
      return (
        <div data-testid="product" className="product-card">
          <Link
            to={ { pathname: `/productDetails/${id}`, state: { data } } }
            data-testid="product-detail-link"
          >
            <h2>{title}</h2>
          </Link>
          <div>
            <img src={ thumbnail } alt={ title } />
          </div>
          <div className="price">
            <p>{`R$ ${price}`}</p>
          </div>
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
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
