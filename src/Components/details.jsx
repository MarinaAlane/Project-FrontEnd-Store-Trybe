import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaReply, FaCartPlus } from 'react-icons/fa';
import dataCart from '../services/dataCart';

class Details extends Component {
  constructor(props) {
    super(props);
    this.handlerState = this.handlerState.bind(this);
  }

  handlerState(products) {
    dataCart.push(products);
  }

  formStructure() {
    return (
      <form>
        <div>
          <input type="email" placeholder="E-mail" required />
          <select required>
            <option value="5">
              5
            </option>
            <option value="4">
              4
            </option>
            <option value="3">
              3
            </option>
            <option value="2">
              2
            </option>
            <option value="1">
              1
            </option>
          </select>
        </div>
        <div>
          <textarea rows="5" cols="30" data-testid="product-detail-evaluation" />
        </div>
      </form>
    );
  }

  render() {
    const { location: { state: { products } } } = this.props;
    return (
      <div>
        <header>
          <Link to="/cart" data-testid="shopping-cart-button">
            <FaShoppingCart />
          </Link>
          <Link to="/">
            <FaReply />
          </Link>
        </header>
        <main>
          <aside className="leftAside">
            <p
              data-testid="product-detail-name"
            >
              {`${products.title} - R$ ${products.price}`}
            </p>
            <img src={ products.thumbnail } alt="img" />
          </aside>
          <ul className="rightAside">
            <li> Especificações Técnicas</li>
            <li>lorem ipsum dolor sit amet, consectetur adipis</li>
          </ul>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.handlerState(products) }
          >
            <FaCartPlus />
          </button>
        </main>
        {this.formStructure()}
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      products: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
