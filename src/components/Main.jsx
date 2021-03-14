import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from './ProductList';

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
        <main>
          <ProductsList productsFromQuery={ productsFromQuery } />
        </main>
      );
    }
    return <div />;
  }
}

Main.propTypes = {
  productsFromQuery: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
