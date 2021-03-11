import React from 'react';

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
    const teste = localStorage;
    const storageArray = Object.values(localStorage);
    const item = storageArray.map((item) => console.log(item.split('||')))
    
  }
  render() {
    return(
      <div>
        <button onClick={this.getLocalStorage}>ddddddd</button>
        {/* <p>{teste}</p> */}
      </div>
    );
  }
}
export default RenderToCart;