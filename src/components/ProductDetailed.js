import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonCart from './shopping_cart/ButtonCart';
import ArrowBack from './shopping_cart/logo_arrow_back.svg';
import * as marketAPI from '../services/api';
import PropTypes from 'prop-types';


class ProductDetailed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };

    this.getProductFromAPI = this.getProductFromAPI.bind(this);
  }

  componentDidMount() {
    this.getProductFromAPI();
  }

  getProductFromAPI() {
    const { id } = this.props.match.params;
    marketAPI.getProductFromID(id)
      .then((product) => {
        this.setState({ product });
      });
  }

  render() {
    const { product } = this.state;
    return (
      <section>
        <Link to="/">
          <img src={ ArrowBack } alt="logo arrow back" />
        </Link>
        <Link to="/ShoppingCart">
          <ButtonCart />
        </Link>
        return (
        <section data-testid="product-detail-name">
          <h3>{ product.title }</h3>
          <img src={ product.thumbnail } alt="Imagem do Produto" />
          <p>{ product.price }</p>
        </section>
      </section>
    );
  }
}

ProductCard.propTypes = {
  math: PropTypes.string,
};

export default ProductDetailed;
