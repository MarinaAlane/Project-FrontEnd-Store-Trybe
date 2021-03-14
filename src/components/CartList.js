import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

export default class CartList extends Component {
  render() {
    const { items, total, changeQuantity, removeItem } = this.props;
    const formattedTotal = total.toFixed(2).replace('.', ',');
    return (
      <>
        { items.map((item, index) => (
          <CartItem
            key={ item.id }
            index={ index }
            item={ item }
            changeQuantity={ changeQuantity }
            removeItem={ removeItem }
          />))}
        <p>
          <strong>Valor Total da Compra:</strong>
          { ` R$ ${formattedTotal}` }
        </p>
      </>
    );
  }
}

CartList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  changeQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  total: PropTypes.number,
};

CartList.defaultProps = {
  total: 0,
};
