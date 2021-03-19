import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import saveProduct from '../services/functions';

class DetailedProduct extends React.Component {
  render() {
    const { location } = this.props;
    const { state: { array } } = location;
    console.log(this.props, location);
    const { title, thumbnail, price } = array;

    return (
      <div>
        <header>
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fas fa-shopping-cart" />
          </Link>
        </header>
        <main>
          <h2 data-testid="product-detail-name">
            { title }
          </h2>
          <div className="product-detail-content">
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => saveProduct(array) }
            >
              Adicionar ao carrinho
            </button>
          </div>
          <div className="product-detail-rating">
            <h2>Avaliações</h2>
            <div className="product-detail-form">
              <p>
              <input type="email" placeholder="Email" />
              <input type="radio" name="star" id=""/>1
              <input type="radio" name="star" id=""/>2
              <input type="radio" name="star" id=""/>3
              <input type="radio" name="star" id=""/>4
              <input type="radio" name="star" id=""/>5
              </p>
              <p>
                <textarea data-testid="product-detail-evaluation" cols="30" rows="10"></textarea>
              </p>
              <button type="button">Avaliar</button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

DetailedProduct.propTypes = {
  array: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;

export default DetailedProduct;
