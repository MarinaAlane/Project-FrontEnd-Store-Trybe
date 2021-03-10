import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from './services/api';
import Categories from './Categories';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.getCategoriesApi = this.getCategoriesApi.bind(this);
  }

  componentDidMount() {
    this.getCategoriesApi();
  }

  async getCategoriesApi() {
    const arrayCategories = await getCategories();
    this.setState({
      categories: arrayCategories,
    });
  }

  render() {
    console.log(this.state);
    const message = (
      <h5
        data-testid="home-initial-message"
        className="defaultMessage"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h5>
    );
    const { categories } = this.state;
    return (
      <div>
        <input type="text" className="searchInput" />
        { message }
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
          className="button-link"
        >
          Botão
        </Link>
        {
          categories.map(({ id, name }) => (
            <Categories key={ id } name={ name } id={ id } />))
        }
      </div>
    );
  }
}
export default Home;
