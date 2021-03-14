import React from 'react';
import { Link } from 'react-router-dom';
import CartDisplay from './CartDisplay';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storage: 'ShoppingCart',
      products: [],
      totalValue: 0,
    };

    this.deleteProduct = this.deleteProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.subProduct = this.subProduct.bind(this);
    this.createCart = this.createCart.bind(this);
  }

  deleteProduct({ target: { id } }) {
    const { storage, products, totalValue } = this.state;
    const cart = JSON.parse(localStorage.getItem(storage));
    let arrayCart = cart.filter((product) => product.id !== id);

    if (arrayCart.length === 0) {
      localStorage.removeItem(storage);
    } else {
      localStorage.setItem(storage, JSON.stringify(arrayCart));
    }

    arrayCart = products.find((product) => product.id === id);
    const total = totalValue - arrayCart.totalPrice;
    arrayCart = products.filter((product) => product.id !== id);

    this.setState({
      products: arrayCart,
      totalValue: total,
    });
  }

  addProduct({ target: { id } }) {
    const { storage, products, totalValue } = this.state;
    const cart = JSON.parse(localStorage.getItem(storage));
    const search = cart.find((product) => product.id === id);
    const index = cart.indexOf(search);
    cart[index].amount += 1;
    localStorage.setItem(storage, JSON.stringify(cart));
    products[index].amount = cart[index].amount;
    let total = totalValue;
    total += products[index].price;
    products[index].totalPrice += products[index].price;
    this.setState({
      products,
      totalValue: total,
    });
  }

  subProduct({ target: { id } }) {
    const { storage, products, totalValue } = this.state;
    const cart = JSON.parse(localStorage.getItem(storage));
    const search = cart.find((product) => product.id === id);
    const index = cart.indexOf(search);
    cart[index].amount -= 1;
    if (cart[index].amount >= 1) {
      localStorage.setItem(storage, JSON.stringify(cart));
      products[index].amount = cart[index].amount;
      let total = totalValue;
      total -= products[index].price;
      products[index].totalPrice -= products[index].price;
      this.setState({
        products,
        totalValue: total,
      });
    }
  }

  createCart(cart) {
    const returnArray = [];
    let totalPrice = 0;
    let totalValue = 0;
    cart.forEach((product) => {
      const { id, amount } = product;
      const { title, price, thumbnail } = JSON.parse(localStorage.getItem(id));
      totalPrice = price * amount;
      returnArray.push({
        id,
        title,
        price,
        thumbnail,
        amount,
        totalPrice,
      });
      totalValue += totalPrice;
    });

    const { products } = this.state;

    if (products.length === 0) {
      this.setState({
        products: returnArray,
        totalValue,
      });
    }
  }

  render() {
    const { storage } = this.state;
    if (localStorage.getItem(storage) === null) {
      return (
        <div>
          <Link to="/">Pagina inicial</Link>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    const cart = JSON.parse(localStorage.getItem(storage));

    // const cart = [{ id: 'MLB1032103542', amount: 2 },
    // { id: 'MLB1685154117', amount: 2 }, { id: 'MLB1733624658', amount: 2 },
    // { id: 'MLB1047677718', amount: 2 }, { id: 'MLB1484415350', amount: 2 }];
    // localStorage.setItem(storage, JSON.stringify(cart));

    this.createCart(cart);
    const { products, totalValue } = this.state;
    return (
      <div>
        <Link to="/">Pagina inicial</Link>
        <p>Carrinho de Compras</p>
        {products.map((product) => (
          <CartDisplay
            key={ product.id }
            id={ product.id }
            remove={ this.deleteProduct }
            thumbnail={ product.thumbnail }
            title={ product.title }
            subtract={ this.subProduct }
            amount={ product.amount }
            add={ this.addProduct }
            totalPrice={ product.totalPrice }
          />
        ))}
        <span> Valor Total da Compra: R$ </span>
        <span>{ totalValue }</span>
        <div>
          <button type="button">Finalizar Compra</button>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
