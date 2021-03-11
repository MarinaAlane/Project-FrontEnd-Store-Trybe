import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemCard from './ItemCard';

class SearchResult extends Component {
  render() {
    const { result } = this.props;
    if (result.length !== 0) {
      return (
        <section className="flex-result">
          {result.map(({ id, title, thumbnail, price }) => (
            <ItemCard
              key={ id }
              id={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />
          ))}
        </section>
      );
    }
    return <div>Vazio</div>;
  }
}

SearchResult.propTypes = {
  result: PropTypes.arrayOf(Object).isRequired,
};

export default SearchResult;
