import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    const { title, image, price } = this.props;
    this.state = {
      title,
      image,
      price,
    };
  }
  render() {
    const { title, image, price } = this.state;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ image } alt="product" />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductItem.defaultProps = {
  title: '',
  image: '',
  price: 0,
};

ProductItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};