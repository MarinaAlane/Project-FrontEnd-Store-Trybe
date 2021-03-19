import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaReply, FaCartPlus } from 'react-icons/fa';
import dataCart from '../services/dataCart';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: dataCart.array,
      cartCounter: props.location.state.cartCounter,
    };
    this.handlerState = this.handlerState.bind(this);
  }

  handlerState(products) {
    const { array, cartCounter } = this.state;
    const { title, price, thumbnail, id } = products;
    if (array.some((productItem) => products.id === productItem.id)) {
      array.forEach((productItem) => {
        if (productItem.id === products.id) {
          productItem.quantity += 1;
          this.setState({ cartCounter: cartCounter + 1 });
        }
      });
    } else {
      dataCart.array.push({ title, price, thumbnail, id, quantity: 1 });

      this.setState({ cartCounter: cartCounter + 1 });
    }
  }

  render() {
    const { location: { state: { products } } } = this.props;
    const { cartCounter } = this.state;
    return (
      <div>
        <header>
          <Link to="/cart" data-testid="shopping-cart-button">
            <FaShoppingCart />
          </Link>
          <p data-testid="shopping-cart-size">{ cartCounter }</p>
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
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      products: PropTypes.string,
      cartCounter: PropTypes.number,
    }),
  }).isRequired,
};

export default Details;
