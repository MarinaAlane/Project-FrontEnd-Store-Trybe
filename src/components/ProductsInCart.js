import React from 'react';
import CartProduct from './CartProduct';

import cart from '../services/cart';

class ProductsInCart extends React.Component {
  constructor(props) {
    super();
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
    let productsCopy = this.state.products;
    
    productsCopy.forEach((currentProduct) => {
      if (currentProduct.product.id === product.product.id ) {
        currentProduct.quantity += 1;
      }
    });
    this.setState({ products: productsCopy });
    this.calculatesTotalToPay();
    console.log('Adiciona item!');
  }

  handleClickSubtractsItem(productParam) {
    let productsCopy = this.state.products;
    
    productsCopy.forEach((currentProduct) => {
      // let { product, quantity } = currentProduct;
      /* console.log('product: ', product.id);
      console.log('quantity: ', quantity); */
      if (currentProduct.product.id === productParam.product.id) {
        if (currentProduct.quantity > 0) {
          currentProduct.quantity -= 1;
          // console.log('Quantity: ', quantity);
        }
        // console.log('Product: ', product.product.id);
      }
    });
    // console.log('quantity: ', currentProduct.quantity);
    // console.log('quantity:', productsCopy[0].quantity);
    this.setState({ products: productsCopy });
    this.calculatesTotalToPay();
    console.log('Remove item!');
  }

  calculatesTotalToPay() {
    const { products } = this.state;
    console.log('calculatesTotalToPay', products);
    const calculateTotal = products.reduce((accumulator, currentProduct) => {
      return accumulator += currentProduct.product.price * currentProduct.quantity;
    }, 0);
    console.log('Total: ', calculateTotal);
    this.setState({ total: calculateTotal });
  }

  render() {
    const { products } = this.state;
    let { total } = this.state;
    const productsList = products.map((product) => {
      return (
        <CartProduct
          key={ product.id }
          product= { product }
          addItem={ this.handleClickAddItem }
          subtractItem={ this.handleClickSubtractsItem }
        />
      );
    });
    return(
      <div>
        <div>
          {productsList}
        </div>
        <p>Valor Total da Compra: <span>{ `R$ ${total}` }</span></p>
        <button>Finalizar Compra</button>
      </div>
    );
  }
}

export default ProductsInCart;
