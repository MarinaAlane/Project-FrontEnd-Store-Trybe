import React from 'react';

class shoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCartIdList: [],
      shoppingCartList: [],
    };

    this.getShoppingCartItems = this.getShoppingCartItems.bind(this);
    this.getProductsById = this.getProductsById.bind(this);
  }

  componentDidMount() {
    this.getShoppingCartItems();
  }

  getShoppingCartItems() {
    if (sessionStorage.shoppingCart) {
      const items = JSON.parse(sessionStorage.shoppingCart);
      this.setState({
        shoppingCartIdList: items,
      }, () => {
        this.getProductsById();
      });
    }
  }

  getProductsById() {
    const { shoppingCartIdList } = this.state;
    shoppingCartIdList.forEach(async (id) => {
      const endpoint = `https://api.mercadolibre.com/items/${id}`;
      const response = await fetch(endpoint);
      const responseObj = await response.json();
      this.setState(({ shoppingCartList }) => ({
        shoppingCartList: [...shoppingCartList, responseObj],
      }));
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
    const { shoppingCartList } = this.state;
    return shoppingCartList
      .map(({ title, id }) => (
        <div key={ id }>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p data-testid="shopping-cart-product-quantity">1</p>
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
