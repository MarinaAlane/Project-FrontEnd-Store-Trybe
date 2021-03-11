import React from 'react';


class AddButton extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',//nome do item
    };
  }
  
  
  addItem = () => {
    const {product: {id, title, thumbnail, price} } = this.props;
    const storage = id.parse(localStorage.getItem(''));
    this.setState({ id: storage});
    console.log(title);
  }
  render() {
    return (
      <div>
        <button onClick={this.addItem} type="submit" data-testid="product-add-to-cart">
          Adiciona ao carrinho
        </button>
      </div>
    );
  }
}

export default AddButton;
