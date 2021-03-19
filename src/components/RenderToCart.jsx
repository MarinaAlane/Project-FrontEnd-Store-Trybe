import React from 'react';
import CreateCartCard from './CreateCartCard';

class RenderToCart extends React.Component {
  constructor() {
    super();

    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  getLocalStorage() {
    const storageArray = Object.values(localStorage).filter((value) => value[0] !== '{');
    const itens = storageArray.map((item) => item.split('||'));
    // console.log(itens);
    return itens;
  }

  render() {
    const cartItensArray = this.getLocalStorage();
    return (
      <div className="card-container">
        {cartItensArray.map((array, i) => {
          const productItem = {
            quant: Number(array[0]),
            title: array[1],
            thumbnail: array[2],
            price: Number(array[3]),
            id: array[4],
          };
          return (
            <div className="card" key={ i }>
              <CreateCartCard product={ productItem } />
            </div>);
        })}
      </div>
    );
  }
}
export default RenderToCart;
