import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DetailedProduct extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { location } = this.props;
    const { state: { array } } = location;
    const { title, thumbnail, price } = array;
    return (
      <div>
        <header>
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fas fa-shopping-cart" />
          </Link>
        </header>
        <main>
          <h2 data-testid="product-detail-name">
            { title }
          </h2>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </main>
      </div>
    );
  }
}

DetailedProduct.propTypes = {
  array: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;

export default DetailedProduct;
