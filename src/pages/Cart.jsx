import React from 'react';
import ProductCart from '../components/ProductCart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.renderCart = this.renderCart.bind(this);
    this.compareID = this.compareID.bind(this);
    this.captureProduct = this.captureProduct.bind(this);
    this.verifySameProduct = this.verifySameProduct.bind(this);
  }

  componentDidMount() {
    this.captureProduct();
  }

  compareID(index, id) {
    let quantity = 1;
    for (let newIndex = index + 1; newIndex <= localStorage.length; newIndex += 1) {
      const regexID = `"id":"${id}"`;
      const gottenNextStr = localStorage.getItem(`itemProduct${newIndex}`);
      if (gottenNextStr.match(regexID)) quantity += 1;
    }
    return quantity;
  }

  verifySameProduct(gottenItemObj, quantity) {
    const { products } = this.state;
    const currentState = products;
    let repeatedProduct = true;
    if (products.length > 0) {
      repeatedProduct = products.some((eachProduct) => (
        gottenItemObj.id === eachProduct.id
      ));
    }
    if (products.length < 1 || repeatedProduct === false) {
      currentState.push({
        id: gottenItemObj.id,
        title: gottenItemObj.title,
        price: gottenItemObj.price,
        thumbnail: gottenItemObj.thumbnail,
        quantity,
      });
      this.setState({ products: currentState });
    }
  }

  captureProduct() {
    for (let index = 1; index <= localStorage.length; index += 1) {
      const gottenItemObj = JSON.parse(localStorage.getItem(`itemProduct${index}`));
      const quantity = this.compareID(index, gottenItemObj.id);
      this.verifySameProduct(gottenItemObj, quantity);
    }
  }

  renderCart(products) {
    return (
      <>
        {products.map((eachProduct) => (
          <ProductCart key={ eachProduct.id } eachProduct={ eachProduct } />
        ))}
      </>
    );
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        { products.length < 1 ? (
          <div data-testid="shopping-cart-empty-message">
            <p>Seu carrinho está vazio</p>
          </div>) : this.renderCart(products) }
        <button type="button">Finalizar Compra</button>
      </div>
    );
  }
}

export default Cart;
