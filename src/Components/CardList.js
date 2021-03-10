import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Card.css';

class CardList extends React.Component {
  render() {
    const { products } = this.props;

    if (!products || products.length === 0) {
      return <p>Nenhum produto foi encontrado</p>;
    }

    return (
      <div className="container-card">
        {products.map((product, index) => <Card key={ index } product={ product } />)}
      </div>
    );
  }
}

CardList.propTypes = {
  products: PropTypes.objectOf().isRequired,
};

export default CardList;
