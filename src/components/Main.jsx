import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from './ProductList';
import './Main.css';

class Main extends React.Component {
  render() {
    const { productsFromQuery, isFetchingFromQuery } = this.props;
    if (productsFromQuery.length <= 0) {
      return (
        <main>
          <p>
            Nenhum produto foi encontrado
          </p>
        </main>
      );
    }
    if (isFetchingFromQuery) {
      return (
        <main className="main">
          <ProductsList productsFromQuery={ productsFromQuery } />
        </main>
      );
    }
    return <div />;
  }
}

Main.propTypes = {
  productsFromQuery: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetchingFromQuery: PropTypes.bool.isRequired,
};

export default Main;
