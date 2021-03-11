import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShortProduct.css';

class ShortProduct extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product" className="products">
        <p className="products-title">{ title }</p>
        <img className="products-image" src={ thumbnail } alt={ title } />
        <p className="products-price">{ price }</p>
      </div>
    );
  }
}
 
ShortProduct.propTypes = ({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default ShortProduct;
