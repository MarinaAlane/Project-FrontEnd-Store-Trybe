import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductsList';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      productsInput: '',
      categoriesInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() { this.fetchCategories(); }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  mapCategory() {
    const { categories, categoriesInput } = this.state;
    return categories.map(
      ({ id, name }) => (
        <label key={ id } data-testid="category" htmlFor={ id }>
          <input
            type="checkbox"
            name="categoriesInput"
            id={ id }
            onChange={ this.handleChange }
            value={ name }
            checked={ categoriesInput === name }
          />
          { name }
        </label>
      ),
    );
  }

  render() {
    const { productsInput, categoriesInput } = this.state;
    return (
      <div>
        <aside>
          <div>
            { this.mapCategory() }
          </div>
        </aside>
        <Link to="/shoppingCart">
          <button type="button" data-testid="shopping-cart-button">ShoppingCart</button>
        </Link>

        <input
          type="text"
          placeholder="Digite aqui"
          value={ productsInput }
          onChange={ this.handleChange }
          data-testid="query-input"
          name="productsInput"
        />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <ProductList query={ productsInput } categories={ categoriesInput } />

      </div>
    );
  }
}

export default Home;
