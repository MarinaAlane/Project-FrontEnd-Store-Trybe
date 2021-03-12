import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCart from '../components/AddToCart';
import CartButton from '../components/CartButton';
import ProductsEvaluation from '../components/ProductsEvaluation';

class ItemDetails extends Component {
  render() {
    const { location: { state: { result } } } = this.props;
    const { title, thumbnail, price, id } = result;
    return (
      <main>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <div>
          <p>{ price }</p>
          <p>detalhes do item</p>
        </div>
        <AddToCart testId="product-detail-add-to-cart" itemCart={ result } />
        <CartButton />
        <ProductsEvaluation itemId={ id } />
      </main>
    );
  }
}

ItemDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      result: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,

};

export default ItemDetails;
