import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardItem extends Component {
  render() {
    const { item, handleCart } = this.props;
    const { title, price, thumbnail, id } = item;
    return (
      <div data-testid="product">
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { item },
          } }
          data-testid="product-detail-link "
        >
          <h4>{ title }</h4>
          <p>{ price }</p>
          <img src={ thumbnail } alt={ title } />
        </Link>
        <button
          type="button"
          onClick={ () => handleCart(item) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

CardItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }),
  handleCart: PropTypes.func,
}.isRequired;

export default CardItem;
