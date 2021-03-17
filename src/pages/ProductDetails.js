import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/ProductDetails.css';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
    this.putOnLocalStorage = this.putOnLocalStorage.bind(this);
    this.createForm = this.createForm.bind(this);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.updateState();
    this.getFromLocalStorage();
  }

  getFromLocalStorage() {
    if (localStorage.getItem('cartItems')) {
      const items = localStorage.getItem('cartItems');
      return JSON.parse(items);
    }
    return [];
  }

  putOnLocalStorage(product) {
    const products = [...this.getFromLocalStorage()];
    let status = true;
    products.forEach((item) => {
      if (item.id === product.id) {
        item.qtd += 1;
        status = false;
      }
    });
    if (status) {
      product = { ...product, qtd: 1 };
      products.push(product);
    }
    localStorage.setItem('cartItems', JSON.stringify(products));
  }

  updateState() {
    const { history: { location: { state } } } = this.props;
    this.setState({
      product: state,
    });
  }

  createForm() {
    return (
      <div>
        <span className="span-evaluation">Avaliações</span>
        <form className="container-form">
          <input type="email" placeholder="Email" />
          <textarea
            data-testid="product-detail-evaluation"
            rows="5"
            placeholder="Mensagem (opcional)"
          />
          <button className="btn-evaluation" type="submit">Avaliar</button>
        </form>
      </div>
    );
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src="cart-icon.png" alt="cart-icon" />
        </Link>
        <h1 data-testid="product-detail-name">{product.title}</h1>
        <button
          type="button"
          props={ product }
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.putOnLocalStorage(product) }
        >
          Adicionar ao carrinho
        </button>
        { this.createForm() }
      </div>
    );
  }
}

ProductDetails.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: {},
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
