import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.fetchIds = this.fetchIds.bind(this);
    this.startFetchIds = this.startFetchIds.bind(this);
    this.configState = this.configState.bind(this);

    this.state = {
      storageFetchJson: [],
      loading: true,
      compare: [],
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
    json.count = filteredQuantity;

    this.configState(json, id);
  }

  configState(object, id) {
    const { compare } = this.state;
    const compareIncludes = compare.includes(id);

    if (compareIncludes === false) {
      this.setState((previousState) => ({
        storageFetchJson: [...previousState.storageFetchJson, object],
        loading: false,
        compare: [...previousState.compare, id],
      }));
    }
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
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {currentValue.count}
        </p>
      </div>
    ));
    return (<div>{ map }</div>);
  }
}

export default ShoppingCart;
