import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Detalhes extends React.Component {
  render() {
    const { addToCart, location: { state: { detalhes: { id, price, thumbnail, title,
    } } } } = this.props;
    return (
      <div data-testid="product" key={ id }>
        <Link data-testid="shopping-cart-button" to="/carrinho">
          <i className="fas fa-shopping-cart" />
        </Link>
        <h4 data-testid="product-detail-name">{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart({ title, thumbnail, price, id }) }
        >
          Adicionar ao carrinho
        </button>
        <form>
          <div>
            <p> Avaliação </p>
            <input type="radio" />
            1
            <input type="radio" />
            2
            <input type="radio" />
            3
            <input type="radio" />
            4
            <input type="radio" />
            5
          </div>
          <div>
            <textarea data-testid="product-detail-evaluation" cols="30" rows="5" maxLength="1000"> </textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default Detalhes;

Detalhes.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      detalhes: PropTypes.shape({
        id: PropTypes.string,
        price: PropTypes.string,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
}.isRequired;
