import './styles/style.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { disableButton: false };

    this.handleAddClick = this.handleAddClick.bind(this);
    this.cartActionButtons = this.cartActionButtons.bind(this);
    this.cardButtons = this.cardButtons.bind(this);
  }

  // componentDidMount() {
  //   this.disableButtons();
  // }

  handleAddClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (!itemsInCart) {
      product = { ...product, quantityToOrder: 1 };
      localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    } else {
      const indexOfProduct = itemsInCart.findIndex((item) => item.id === product.id);
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

  handleSubClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (!itemsInCart) {
      product = { ...product, quantityToOrder: 1 };
      localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    } else {
      const indexOfProduct = itemsInCart.findIndex((item) => item.id === product.id);
      if (indexOfProduct >= 0) {
        itemsInCart[indexOfProduct].quantityToOrder -= 1;
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

  handleDeleteClick(id) {
    const { onClick } = this.props;
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    const indexOfProduct = itemsInCart.findIndex((item) => item.id === id);
    itemsInCart.splice(indexOfProduct, 1);
    localStorage.setItem('NoMasterCart', JSON.stringify(itemsInCart));
    onClick();
  }

  cartActionButtons(id) {
    const { product } = this.props;
    const { available_quantity: availableQuantity, quantityToOrder } = product;
    return (
      <div>
        <button type="button" onClick={ () => this.handleDeleteClick(id) }>X</button>
        <button
          type="button"
          onClick={ this.handleSubClick(product) }
          disabled={ quantityToOrder === 1 }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          onClick={ () => this.handleAddClick(product) }
          disabled={ availableQuantity <= quantityToOrder }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    );
  }

  // disableButtons() {
  //   const { product } = this.props;
  //   if (product.quantityToOrder >= product.availableQuantity) {
  //     this.setState({ disableButton: true });
  //   }
  // }

  cardButtons() {
    const { product } = this.props;
    const { id } = product;
    const { disableButton } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.handleAddClick(product) }
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
    );
  }

  render() {
    const { product, testid, inCart } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <h4 data-testid={ testid }>{ title }</h4>
        <img className="imgProduct" src={ thumbnail } alt="pictyre" />
        <p>
          R$:
          { price }
        </p>
        {inCart && this.cartActionButtons(id) }
        {!inCart && this.cardButtons() }
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
