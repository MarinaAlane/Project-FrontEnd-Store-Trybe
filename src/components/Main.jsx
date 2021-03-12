import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from './ProductList';

class Main extends React.Component {
  render() {
    const { productsFromQuery } = this.props;
    return (
      <main>
        <ProductsList productsFromQuery={ productsFromQuery } />
      </main>
    );
  }
}

Main.propTypes = {
  productsFromQuery: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
