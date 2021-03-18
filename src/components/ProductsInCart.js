import React from 'react';
import CartProduct from './CartProduct';

const productObject = [
  {
    id: '1',
    title: 'xablau',
    thumbnail: 'https://via.placeholder.com/80',
    quantity: 0,
    price: 3.75,
  },
  {
    id: '2',
    title: 'roteador',
    thumbnail: 'https://via.placeholder.com/80',
    quantity: 0,
    price: 83.25,
  }
];

class ProductsInCart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      products: productObject,
    };

    this.handleClickAddItem = this.handleClickAddItem.bind(this);
    this.handleClickSubtractsItem = this.handleClickSubtractsItem.bind(this);
  }

/*  componentDidMount() {
    this.getProducts();
    console.log('componentDidMount');
  }

  getProducts() {
    this.setState(() => ({ products: productObject }));
    // console.log(productObject);
    console.log(this.state);
  } */ 

  handleClickAddItem(product) {
    const productsCopy = this.state.products.forEach((currentProduct) => {
      if (currentProduct.id === product.id ) {
        currentProduct.quantity += 1;
      }
    });
    
    this.setState({ products: productsCopy });
    this.calculatesTotalToPay();
    console.log('Adiciona item!');
  }

  handleClickSubtractsItem(product) {
    // const { products } = this.state;
    /* if (products.quantity > 0) {
      this.setState({
        products: {
          quantity: quantity - 1,
        },
      });
    }
    calculatesTotalToPay(); */
    console.log('Remove item!');
  }

  calculatesTotalToPay() {
    const { products } = this.state;
    const calculateTotal = products.reduce((accumulator, currentProduct) => currentProduct.price * currentProduct.quantity, 0);
    console.log(calculateTotal);
  }

  render() {
    const { products, total} = this.state;
    const productsList = products.map((product) => {
      return (
        <CartProduct
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
