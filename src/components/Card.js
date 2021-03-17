import './styles/style.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { disableButton: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (!itemsInCart) {
      product = { ...product, quantityToOrder: 1 };
      localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    } else {
      const indexOfProduct = itemsInCart.findIndex((item) => item.id === product.id);
      // console.log(indexOfProduct);
      if (indexOfProduct >= 0) {
        itemsInCart[indexOfProduct].quantityToOrder += 1;
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsInCart));
      } else {
        product = { ...product, quantityToOrder: 1 };
        const itemsToAdd = [...itemsInCart, product];
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsToAdd));
      }
    }
    const { quantityToOrder, available_quantity: availableQuantity } = product;
    if (quantityToOrder >= availableQuantity) this.setState({ disableButton: true });
  }

  render() {
    const { product, testid } = this.props;
    const { disableButton } = this.state;
    const { title, thumbnail, price, id } = product;
    // if (quantityToOrder >= availableQuantity) disableButton = true;
    return (
      <div data-testid="product">
        <h4 data-testid={ testid }>{ title }</h4>
        <img className="imgProduct" src={ thumbnail } alt="pictyre" />
        <p>
          R$:
          { price }
        </p>
        <div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => this.handleClick(product) }
            disabled={ disableButton }
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
  }),
  testid: PropTypes.string,
}.isRequired;

export default Card;
