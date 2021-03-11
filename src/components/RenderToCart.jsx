import React from 'react';
import CreateCard from './CreateCard';

class RenderToCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cont:'',
      title:'',
      thumbnail:'',
      price:'',
    }
  }

  getLocalStorage = () => {
    const storageArray = Object.values(localStorage);
    const item = storageArray.map((item) => item.split('||'));
    return item; 
  }


  render() {
    const cartItensArray = this.getLocalStorage();
    return(
      <div>
        {cartItensArray.map((array, i) => {
          const productItem = { title: array[1], thumbnail: array[2], price: array[3] };
          <CreateCard key={ i } product={ productItem } />
        })}
      </div>
    );
  }
}
export default RenderToCart;