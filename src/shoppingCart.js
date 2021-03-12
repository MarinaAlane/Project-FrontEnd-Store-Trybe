import React from 'react';
import { Link } from 'react-router-dom';

class shoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCartIdList: [],
      quantity: {},
      totalValue: 0,
    };

    this.getShoppingCartItems = this.getShoppingCartItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateQuantities = this.updateQuantities.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.renderTotalValue = this.renderTotalValue.bind(this);
  }

  componentDidMount() {
    this.getShoppingCartItems();
  }

  getShoppingCartItems() {
    if (sessionStorage.shoppingCart) {
      const items = JSON.parse(sessionStorage.shoppingCart);
      items.forEach((item) => {
        this.setState(({ shoppingCartIdList }) => ({
          shoppingCartIdList: [...shoppingCartIdList, item],
        }), () => {
          this.updateQuantities();
        });
      });
    }
  }

  updateQuantities() {
    const { shoppingCartIdList } = this.state;
    shoppingCartIdList.forEach(({ id }) => {
      this.setState(({ quantity }) => ({
        quantity: {
          ...quantity,
          [id]: 1,
        },
      }), () => {
        this.renderTotalValue();
      });
    });
  }

  addItem(id) {
    this.setState((state) => ({
      quantity: {
        ...state.quantity,
        [id]: state.quantity[id] + 1,
      },
    }), () => {
      this.renderTotalValue();
    });
  }

  removeItem(id) {
    this.setState((state) => ({
      quantity: {
        ...state.quantity,
        [id]: state.quantity[id] - 1,
      },
    }), () => {
      this.renderTotalValue();
    });
  }

  removeFromCart(id) {
    const { shoppingCartIdList } = this.state;
    const listWithoutProduct = shoppingCartIdList
      .filter((product) => product.id !== id && product);
    this.setState({
      shoppingCartIdList: listWithoutProduct,
    }, () => {
      this.renderTotalValue();
      sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCartIdList));
    });
  }

  renderEmptyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  renderCartItems() {
    const { shoppingCartIdList, quantity } = this.state;
    return shoppingCartIdList
      .map(({ title, id }) => (
        <div key={ id } id={ id }>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p
            data-testid="shopping-cart-product-quantity"
          >
            { quantity[id] }
          </p>
          <button
            type="button"
            onClick={ () => this.addItem(id) }
            data-testid="product-increase-quantity"
          >
            +
          </button>
          <button
            type="button"
            onClick={ () => this.removeItem(id) }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <button type="button" onClick={ () => this.removeFromCart(id) }>X</button>

        </div>
      ));
  }

  renderTotalValue() {
    const { shoppingCartIdList, quantity } = this.state;
    const value = shoppingCartIdList
      .reduce((acc, curr) => (
        acc + (parseInt(curr.price, 10) * parseInt(quantity[curr.id], 10))
      ), 0);
    this.setState({
      totalValue: value,
    });
  }

  render() {
    const { shoppingCartIdList, totalValue } = this.state;
    return (
      <div>
        {shoppingCartIdList.length > 0 ? this.renderCartItems() : this.renderEmptyCart()}
        <h3>
          Valor total: R$
          { totalValue }
        </h3>
        <Link to={ { pathname: '/checkout', state: { ...this.state } } }>
          <button
            type="button"
            data-testid="checkout-products"
          >
            Finalize sua Compra
          </button>
        </Link>
      </div>
    );
  }
}

export default shoppingCart;
