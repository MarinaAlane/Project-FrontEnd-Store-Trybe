import React from 'react';
import CreateCard from './CreateCartCard';

class RenderToCart extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   cont: '',
    //   title: '',
    //   thumbnail: '',
    //   price: '',
    // };
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  getLocalStorage() {
    const storageArray = Object.values(localStorage);
    const itens = storageArray.map((item) => item.split('||'));
    return itens;
  }

  render() {
    const cartItensArray = this.getLocalStorage();
    return (
      <div className="card-container">
        {cartItensArray.map((array) => {
          const productItem = {
            quant: Number(array[0]),
            title: array[1],
            thumbnail: array[2],
            price: Number(array[3]),
          };
          return (
            <div className="card" key={ productItem.thumbnail }>
              <CreateCard product={ productItem } />
            </div>);
        })}
      </div>
    );
  }
}
export default RenderToCart;
