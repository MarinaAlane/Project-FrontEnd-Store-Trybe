import React, { Component } from 'react';
import * as api from '../services/api';

export default class ListCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };

    // this.getCategories = this.getCategories.bind(this);
  }

  async componentDidMount() {
    const listCategories = await api.getCategories();
    this.estado(listCategories);
    // this.setState({
    //   categories: listCategories,
    // });
  }

  estado(listaCat) {
    this.setState({
      categories: listaCat,
    });
  }

  render() {
    // this.getCategories();
    const { categories } = this.state;
    return (
      <div style={ { border: 'solid 1px #000', padding: '10px', margin: '10px', borderRadius: '8px', display: 'inline-block', float: 'left' } }>
        <h1>Categorias:</h1>
        {categories.map((catItem) => (
          <p data-testid="category" key={ catItem.id }>{catItem.name}</p>
        ))}
      </div>
    );
  }
}
