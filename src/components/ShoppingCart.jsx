import React from 'react';
import RenderCarts from './RenderCart';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      objStorage: [],
    };
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const array = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      if (localStorage.key(index) !== 'query') {
        const jsonProduct = window.localStorage.getItem(localStorage.key(index));
        const productObj = JSON.parse(jsonProduct);
        array.push({ name: productObj.title, value: productObj.value });
      }
    }
    this.setState({
      objStorage: array,
    });
  }

  render() {
    const { objStorage } = this.state;
    if (localStorage.length <= 1) {
      return (<h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>);
    }
    return (
      <div>
        { objStorage.map((element) => (
          <RenderCarts
            key={ element.name }
            name={ element.name }
            quantity={ element.value }
          />
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
