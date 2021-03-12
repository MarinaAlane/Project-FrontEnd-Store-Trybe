import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShortProduct.css';

class ShortProduct extends Component {
  constructor(props) {
    super(props);

    this.saveStorage = this.saveStorage.bind(this);
  }

  saveStorage(id, title, thumbnail, price) {
    localStorage.setItem(id, JSON.stringify({
      title,
      thumbnail,
      price,
    }));
  }

  render() {
    const { id, title, thumbnail, price } = this.props;

    return (
      <div data-testid="product" className="products">
        <Link
          to={ `/product/${id}/` }
          data-testid="product-detail-link"
          onClick={ this.saveStorage(id, title, thumbnail, price) }
        >
          <div>
            <p className="products-title">{ title }</p>
            <img className="products-image" src={ thumbnail } alt={ title } />
            <p className="products-price">{ price }</p>
          </div>
        </Link>
      </div>
    );
  }
}

ShortProduct.propTypes = ({
  id: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default ShortProduct;
