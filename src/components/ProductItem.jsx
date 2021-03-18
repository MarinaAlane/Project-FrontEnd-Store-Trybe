import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    const { title, image, price, id } = this.props;
    this.state = {
      title,
      image,
      price,
      id,
    };
  }
  render() {
    const { title, image, price, id } = this.state;
    return (
      <Link
        to={ `/product-details/${id}?title=${title}&image=${image}&price=${price}` }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <p>{ title }</p>
          <img src={ image } alt="product" />
          <p>{ price }</p>
        </div>
      </Link>
    );
  }
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
