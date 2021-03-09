import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { loading, productsContent } = this.props;
    if (loading === true) return <span>Loading...</span>;
    const map = productsContent.map((currentValue) => <h1>{currentValue.title}</h1>);
    return (
      <div>
        {map}
      </div>);
  }
}

export default Card;
