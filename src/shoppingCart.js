import React from 'react';

class shoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCartIdList: [],
      updatedValue: {},
    };

    this.getShoppingCartItems = this.getShoppingCartItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateQuantities = this.updateQuantities.bind(this);
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
      this.setState(({ updatedValue }) => ({
        updatedValue: {
          ...updatedValue,
          [id]: 1,
        },
      }));
    });
  }

  addItem(id) {
    this.setState((state) => ({
      updatedValue: {
        ...state.updatedValue,
        [id]: state.updatedValue[id] + 1,
      },
    }));
  }

  removeItem(id) {
    this.setState((state) => ({
      updatedValue: {
        ...state.updatedValue,
        [id]: state.updatedValue[id] - 1,
      },
    }));
  }

  renderEmptyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  renderCartItems() {
    const { shoppingCartIdList, updatedValue } = this.state;
    return shoppingCartIdList
      .map(({ title, id }) => (
        <div key={ id }>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p
            data-testid="shopping-cart-product-quantity"
          >
            { updatedValue[id] }
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

        </div>
      ));
  }

  render() {
    const { shoppingCartIdList } = this.state;
    return (
      <div>
        {shoppingCartIdList.length > 0 ? this.renderCartItems() : this.renderEmptyCart()}
      </div>
    );
  }
}

export default shoppingCart;
