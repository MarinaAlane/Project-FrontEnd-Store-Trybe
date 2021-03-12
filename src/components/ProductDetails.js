import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

require('./ProductDetails.css');

export default class ProductDetails extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { id, title, price, thumbnail, attributes } = state;
    const titleToHtml = `${title} - R$ ${price}`;
    return (
      <div className="content-product">
        <header className="header-product">
          <Link to="/">Voltar</Link>
          <CartIcon />
        </header>
        <div className="details-product">
          <section className="head-product">
            <p
              data-testid="product-detail-name"
              className="title-product"
            >
              <b>
                { titleToHtml }
              </b>
            </p>
            <img src={ thumbnail } alt={ title } />
          </section>
          <section className="body-product">
            <p><b>Especificações Técnicas</b></p>
            <ul>
              { attributes.map((attribute) => {
                const { name, value } = attribute;
                return (
                  <li
                    key={ `${id}-${name}` }
                  >
                    { name }
                    { `: ${value}` }
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      attributes: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string.isRequired),
      ),
    }),
  }).isRequired,
};
