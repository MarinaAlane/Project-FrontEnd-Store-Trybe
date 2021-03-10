import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class ProductList extends React.Component {
  render() {
    const { categories } = this.props;

    return (
      <section>
        <Categories categories={ categories } />
        <input
          type="text"
        />
        <Link to="/cart" data-testid="shopping-cart-button">
          <button type="button">cart</button>
        </Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

ProductList.propTypes = {
  categories: PropTypes.arrayOf.isRequired,
};

export default ProductList;
