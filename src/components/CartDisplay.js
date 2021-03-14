import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import deleteIcon from '../images/delete.png';
import plusIcon from '../images/plus.png';
import minusIcon from '../images/minus.png';

class CartDisplay extends Component {
  render() {
    const { id, remove, thumbnail, title, subtract, amount, add,
      totalPrice } = this.props;
    return (
      <div key={ id }>
        <Link to="/cart" onClick={ remove }>
          <img src={ deleteIcon } width="30px" alt="delete" id={ id } />
        </Link>
        <img src={ thumbnail } width="100px" alt={ title } />
        <span>{ title }</span>
        <Link to="/cart" onClick={ subtract } data-testid="product-decrease-quantity">
          <img src={ minusIcon } width="30px" alt="Subtrai" id={ id } />
        </Link>
        <span>{ amount }</span>
        <Link to="/cart" onClick={ add } data-testid="product-increase-quantity">
          <img src={ plusIcon } width="30px" alt="Soma" id={ id } />
        </Link>
        <span>R$</span>
        <span>{ totalPrice }</span>
      </div>
    );
  }
}

CartDisplay.propTypes = ({
  id: PropTypes.string,
  remove: PropTypes.func,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  subtract: PropTypes.func,
  amount: PropTypes.number,
  add: PropTypes.func,
  totalPrice: PropTypes.number,
}).isRequired;

export default CartDisplay;
