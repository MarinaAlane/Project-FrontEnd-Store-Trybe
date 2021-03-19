import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateCartCard extends Component {
  constructor() {
    super();
    this.state = {
      cont: '',
      // total: false,
    };

    this.addItem = this.addItem.bind(this);
    this.subItem = this.subItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.getLocal = this.getLocal.bind(this);
  }

  componentDidMount() {
    this.getLocal();
  }

  async getLocal() {
    const { product: { id } } = this.props;
    const reqProduct = await localStorage.getItem(id).split('||');
    this.setState({
      cont: reqProduct[0],
    });
  }

  async addItem() {
    const { product: { id, title, thumbnail, price } } = this.props;
    const reqProduct = await localStorage.getItem(id).split('||');

    const plusOne = Number(reqProduct[0]) + 1;
    this.setState({
      cont: Number(plusOne),
    });

    const { cont } = this.state;
    const productInfoLocalStorage = `${cont}||${title}||${thumbnail}||${price}||${id}`;
    localStorage.setItem(id, productInfoLocalStorage);
  }

  async subItem() {
    const { product: { id, title, thumbnail, price } } = this.props;
    const reqProduct = await localStorage.getItem(id).split('||');

    if (reqProduct[0] > '0') {
      const MinusOne = Number(reqProduct[0]) - 1;
      this.setState({
        cont: Number(MinusOne),
      });
    }

    const { cont } = this.state;
    const productInfoLocalStorage = `${cont}||${title}||${thumbnail}||${price}||${id}`;
    localStorage.setItem(id, productInfoLocalStorage);
  }

  async removeItem() {
    const { product: { id } } = this.props;
    localStorage.removeItem(id);
    this.setState({
      // total: true,
    });
  }

  renderButton(label, dataTest, func) {
    return (
      <button
        onClick={ func }
        type="submit"
        data-testid={ dataTest }
      >
        { label }
      </button>
    );
  }

  render() {
    const { product: { title, thumbnail, price } } = this.props;
    const { cont } = this.state;
    return (
      <div data-testid="product">
        <h3
          data-testid="shopping-cart-product-name"
          className="card-title"
        >
          { title }
        </h3>

        <div className="image">
          <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        </div>

        <p>{ `R$ ${price}` }</p>

        <div>
          <p data-testid="shopping-cart-product-quantity">{ cont }</p>

          { this.renderButton('+', 'product-increase-quantity', this.addItem) }

          { this.renderButton('-', 'product-decrease-quantity', this.subItem) }

          <p>{ `Total: R$ ${price * cont}` }</p>

          { this.renderButton('X', 'unused', this.removeItem) }
          <br />
          { this.renderButton('Finalizar compra', 'unused', () => { }) }
        </div>
      </div>
    );
  }
}

CreateCartCard.propTypes = {
  product: PropTypes.shape({
    quant: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default CreateCartCard;
