import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.onDetails = this.onDetails.bind(this);
  }

  onDetails(product) {
    console.log(product);
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div className="product" data-testid="product">
        <Link
          to={ { pathname: '/product-details', state: { product } } }
          data-testid="product-detail-link"
        >
          DETALHES
        </Link>
        <p>{ title }</p>
        <img src={ thumbnail } alt="imagem do produto" />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
