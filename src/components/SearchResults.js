import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingMsg from './LoadingMsg';
import ProductCard from './ProductCard';

export default class SearchResults extends Component {
  render() {
    const { results, loading } = this.props;

    return (
      <div>
        { loading
          ? <LoadingMsg />
          : results.map(({ title, thumbnail, price, id }) => (
            <ProductCard
              key={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />
          ))}
      </div>
    );
  }
}

SearchResults.propTypes = {
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};
