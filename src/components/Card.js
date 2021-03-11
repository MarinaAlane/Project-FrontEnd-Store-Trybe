import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (!itemsInCart) localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    // console.log(itemsInCart);
    else {
      const itemsToAdd = [...itemsInCart, product];
      localStorage.setItem('NoMasterCart', JSON.stringify(itemsToAdd));
    }
  }

  render() {
    const { product, testid } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <h4 data-testid={ testid }>{ title }</h4>
        <img src={ thumbnail } alt="pictyre" />
        <p>
          R$:
          { price }
        </p>
        <div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => this.handleClick(product) }
          >
            Adicionar
          </button>
          <Link
            data-testid="product-detail-link"
            key={ id }
            to={ { pathname: `/product/${id}`, state: { product } } }
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default Card;
