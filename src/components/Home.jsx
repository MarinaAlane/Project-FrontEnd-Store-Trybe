import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Button from './Button';
import Card from './Card';

class Home extends Component {
  constructor() {
    super();

    this.activateButton = this.activateButton.bind(this);

    this.state = {
      loading: true,
      productsContent: [],
      inputValue: '',
    };
  }

  async activateButton() {
    const { inputValue } = this.state;
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`);
    const json = await response.json();
    this.setState({
      productsContent: json,
      loading: false,
    });
    return json;
  }

  render() {
    const { inputValue, productsContent, loading } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="pesquisar" data-testid="home-initial-message">
            <input
              name="pesquisar"
              type="text"
              data-testid="query-input"
              onChange={ (event) => {
                this.setState({
                  inputValue: event.target.value,
                });
              } }
            />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <Button activateButton={ this.activateButton } />
        </form>
        <Link to="/shopping-cart" data-testid="shopping-cart-button"> Cart </Link>
        <CategoriesList />
        <Card productsContent={ productsContent } loading={ loading } />
      </div>
    );
  }
}

export default Home;
