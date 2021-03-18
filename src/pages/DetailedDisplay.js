import React from 'react';
import * as Api from '../services/api';

class DetailedDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      product: {},
    };
  }

  componentDidMount() {
    const { id } = this.state;
    Api.getProductsFromCategoryAndQuery();
  }

  render() {
    console.log(this.state.product);
    return (
      <p>{ this.state.id }</p>
    );
  }
}

export default DetailedDisplay;
