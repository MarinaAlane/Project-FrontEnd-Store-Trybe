import React from 'react';


class AddButton extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',//nome do item
      cont: 1,
    };
  }
  
  addItem = () => {
    const {product: {id, title, thumbnail, price} } = this.props;
    if (localStorage.getItem(id) === undefined) {
      this.setState({ id: id});
    } else {
      this.setState((anterior, _props) => ({
        cont: anterior.cont + 1
      }))
    }
    const productInfoLocalStorage = `${this.state.cont}||${title}||${thumbnail}||${price}`
    localStorage.setItem(id, productInfoLocalStorage);
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
