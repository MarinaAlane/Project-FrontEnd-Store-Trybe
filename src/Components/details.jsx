import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faReply } from '@fortawesome/free-solid-svg-icons';

class Details extends Component {
  render() {
    const { location: { state: { products } } } = this.props;
    return (
      <div>
        <header>
          <Link to="/emptyCart" data-testid="shopping-cart-button">
            <FontAwesomeIcon icon={ faShoppingCart } />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={ faReply } />
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
            <li>lorem ipsum dolor sit amet, consectetur adipis</li>
            <li>lorem ipsum dolor sit amet, consectetur adipis</li>
            <li>lorem ipsum dolor sit amet, consectetur adipis</li>
            <li>lorem ipsum dolor sit amet, consectetur adipis</li>
            <li>lorem ipsum dolor sit amet, consectetur adipis</li>
          </ul>
        </main>
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
