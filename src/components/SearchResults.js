import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingMsg from './LoadingMsg';
import ProductCard from './ProductCard';

require('./SearchResults.css');

export default class SearchResults extends Component {
  mapProducts(products) {
    return products.map(({ title, thumbnail, price, id, attributes }) => {
      attributes = attributes.map(({ name, value_name: value }) => {
        const obj = {
          name,
          value,
        };
        return obj;
      });

      return {
        id,
        title,
        thumbnail,
        price,
        attributes,
      };
    });
  }

  render() {
    const { results, loading } = this.props;
    const products = this.mapProducts(results);

    return (
      <div className="list">
        { loading
          ? <LoadingMsg />
          : products.map(({ title, thumbnail, price, id, attributes }) => (
            <ProductCard
              key={ id }
              id={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
              attributes={ attributes }
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
