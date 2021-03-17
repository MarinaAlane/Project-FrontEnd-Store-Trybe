import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from './ProductList';
import '../componentStyles/Main.css';

class Main extends React.Component {
  render() {
    const { productsFromQuery, isFetchingFromQuery, addProductToCart } = this.props;
    if (productsFromQuery.length <= 0) {
      return (
        <main className="not-found-msg">
          <p>
            Nenhum produto foi encontrado
          </p>
        </main>
      );
    }
    if (isFetchingFromQuery) {
      return (
        <main className="main">
          <ProductsList
            productsFromQuery={ productsFromQuery }
            addProductToCart={ addProductToCart }
          />
        </main>
      );
    }
    return <div />;
  }
}

Main.propTypes = {
  productsFromQuery: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetchingFromQuery: PropTypes.bool.isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default Main;
