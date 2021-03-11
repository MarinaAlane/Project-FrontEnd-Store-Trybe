import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TiArrowBackOutline, TiShoppingCart } from 'react-icons/ti';
import * as api from '../services/api';
import Loading from '../Components/Loading/Loading';
import Cart from '../services/Data';
import './ProductDetails.css';
import ButtonsCardDetails from '../Components/ButtonsCardDetails/ButtonsCardDetails';
import AvaliationForm from '../Components/AvaliationForm/AvaliationForm';

export default class ProductDetails extends Component {
  constructor(state) {
    super(state);
    this.addCartItem = this.addCartItem.bind(this);
    this.state = {
      product: {},
      loading: true,
    };
  }

  async componentDidMount() {
    console.log(this.props);
    const { match } = this.props;
    const { category, id } = match.params;
    const { location } = this.props;
    const { search } = location;
    const query = search.slice(1);
    const product = await api.getProductsFromCategoryAndQuery(category, query);
    const selectedProduct = product.results
      .find((value) => value.id === id);
    this.addProductOnState(selectedProduct);
  }

  addProductOnState(selectedProduct) {
    this.setState({ product: selectedProduct, loading: false });
  }

  addCartItem(product) {
    const check = Cart.some((value) => value.title === product.title);
    if (check) {
      Cart.forEach((cartItem) => {
        if (cartItem.title === product.title) {
          cartItem.quantity += 1;
        }
      });
    } else {
      const add = document.querySelector('.numberToAdd');
      const { title, thumbnail, price } = product;
      Cart.push({
        title,
        thumbnail,
        price,
        quantity: add.value,
      });
    }
  }

  render() {
    const { product, loading } = this.state;
    const { title, price } = product;
    if (loading) return <Loading />;
    return (
      <div>
        <div className="headerLinks">
          <Link to="/" className="linkShoppingCart">
            <div><TiArrowBackOutline /></div>
          </Link>
          <Link
            className="linkShoppingCart"
            to="/ShoppingCart"
            data-testid="shopping-cart-button"
          >
            <div><TiShoppingCart /></div>
          </Link>
        </div>
        <div data-testid="product-detail-name">
          <div data-testid="product">
            <div className="titleDetails">
              { `${title} - ` }
              { price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
            </div>
            <div className="productContanerDetail">
              <img src={ product.thumbnail } alt={ `foto-${product.title}` } />
            </div>
          </div>
        </div>
        <div className="buttonsCardDetails">
          <ButtonsCardDetails product={ product } />
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.addCartItem(product) }
          >
            Adicionar ao carinho
          </button>
        </div>
        <AvaliationForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.objectOf({
    params: PropTypes.objectOf({
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
