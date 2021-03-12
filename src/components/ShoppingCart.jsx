import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.fetchIds = this.fetchIds.bind(this);
    this.startFetchIds = this.startFetchIds.bind(this);

    this.state = {
      storageFetchJson: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.startFetchIds();
  }

  async fetchIds(id) {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}?include_attributes=all`);
    const json = await response.json();
    const arrayIds = JSON.parse(localStorage.getItem('productId'));
    const filteredQuantity = arrayIds.filter(
      (currentValue) => currentValue === id,
    ).length;
    console.log(filteredQuantity);
    json.count = filteredQuantity;
    console.log(json);
    this.setState((previousState) => ({
      storageFetchJson: [...previousState.storageFetchJson, json],
      loading: false,
    }));
    return json;
  }

  startFetchIds() {
    const arrayIds = JSON.parse(localStorage.getItem('productId'));
    arrayIds.map((currentValue) => this.fetchIds(currentValue));
  }

  render() {
    const { storageFetchJson, loading } = this.state;
    if (
      localStorage.productId === '[]') {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    if (loading === true) { return <p>Carregando...</p>; }
    const map = storageFetchJson.map((currentValue) => (
      <div key={ currentValue.id }>
        <p data-testid="shopping-cart-product-name">{currentValue.title}</p>
        <p>{currentValue.price}</p>
        <p>
          Quantidade:
          {currentValue.count}
        </p>
      </div>
    ));
    return (<div>{ map }</div>);
  }
}

export default ShoppingCart;
