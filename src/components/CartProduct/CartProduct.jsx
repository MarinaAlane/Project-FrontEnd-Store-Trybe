import React, { Component } from 'react';
import { number, string, shape } from 'prop-types';
import InputContext from '../InputContext';
import IncrementDecrementButton from '../IncrementDecrementButton';

class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityItems: 1,
    };
    this.incrementOnClick = this.incrementOnClick.bind(this);
    this.incrementOnClick = this.incrementOnClick.bind(this);
  }

  incrementOnClick(value) {
    this.setState((prevState) => ({ quantityItems: prevState.quantityItems + value }));
  }

  decrementOnClick() {
    const { quantityItems } = this.state;
    if (quantityItems > 0) {
      this.setState((prevState) => ({ quantityItems: prevState.quantityItems - 1 }));
    }
  }

  render() {
    const { info } = this.props;
    const { title, thumbnail, price, quantity } = info;
    const { quantityItems } = this.state;
    const result = price * quantityItems;
    return (
      <InputContext.Consumer>
        {
          () => (
            <section>
              <p data-testid="shopping-cart-product-name">{title}</p>
              <img src={ thumbnail } alt={ title } />
              <p>{Math.round(result * 100) / 100}</p>
              <p data-testid="shopping-cart-product-quantity">{ quantityItems }</p>
              <IncrementDecrementButton
                increaseOnClick={ () => this.incrementOnClick(quantity) }
                decreaseOnClick={ () => this.decrementOnClick() }
              />
            </section>
          )
        }
      </InputContext.Consumer>
    );
  }
}

CartProduct.contextType = InputContext;

CartProduct.propTypes = {
  info: shape({
    price: number,
    thumbnail: string,
    id: string,
    title: string,
  }),
}.isRequired;

export default CartProduct;
