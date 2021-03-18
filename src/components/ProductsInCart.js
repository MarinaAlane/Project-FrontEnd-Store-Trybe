import React from 'react';
import CartProduct from './CartProduct';

import cart from '../services/cart';

class ProductsInCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0,
    };

    this.handleClickAddItem = this.handleClickAddItem.bind(this);
    this.handleClickSubtractsItem = this.handleClickSubtractsItem.bind(this);
  }

  componentDidMount() {
    const productsInStorage = cart.getProdutsInStorage();
    this.setState({
      products: productsInStorage,
    });
  }

  handleClickAddItem(product) {
    const { products } = this.state;
    const productsCopy = products;

    productsCopy.forEach((currentProduct) => {
      if (currentProduct.product.id === product.product.id) {
        currentProduct.quantity += 1;
      }
    });
    this.setState({ products: productsCopy });
    this.calculatesTotalToPay();
  }

  handleClickSubtractsItem(productParam) {
    const { products } = this.state;
    const productsCopy = products;

    productsCopy.forEach((currentProduct) => {
      if (currentProduct.product.id === productParam.product.id) {
        if (currentProduct.quantity > 0) {
          currentProduct.quantity -= 1;
        }
      }
    });
    this.setState({ products: productsCopy });
    this.calculatesTotalToPay();
  }

  calculatesTotalToPay() {
    const { products } = this.state;
    // console.log('calculatesTotalToPay', products);
    const calculateTotal = products.reduce((accumulator, currentProduct) => {
      accumulator += currentProduct.product.price * currentProduct.quantity;
      return accumulator;
    }, 0);
    // console.log('Total: ', calculateTotal);
    this.setState({ total: calculateTotal });
  }

  render() {
    const { products } = this.state;
    const { total } = this.state;
    const productsList = products.map((product) => {
      return (
        <CartProduct
          key={ product.id }
          product={ product }
          addItem={ this.handleClickAddItem }
          subtractItem={ this.handleClickSubtractsItem }
        />
      );
    });
    return (
      <div>
        <div>
          {productsList}
        </div>
        <p>
          Valor Total da Compra:
          <span>{ `R$ ${total}` }</span>
        </p>
        <button type="button">Finalizar Compra</button>
      </div>
    );
  }
}

export default ProductsInCart;
