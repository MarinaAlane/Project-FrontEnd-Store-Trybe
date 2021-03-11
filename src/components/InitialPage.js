/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import ListOfCategories from './ListOfCategories';
import { getCategories } from '../services/api';
import ListProducts from './ListProducts';

class InitialPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      butttonClicked: false,
      query: '',
      categories: [],
    };

    this.getApiCategories = this.getApiCategories.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getApiCategories();
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      query: value,
    });
  }

  async getApiCategories() {
    this.setState(
      async () => {
        const getApiCategories = await getCategories();
        this.setState({
          categories: getApiCategories,
        });
      },
    );
  }

  buttonClick() {
    this.setState({
      butttonClicked: true,
    });
  }

  render() {
    const { categories, butttonClicked, query } = this.state;
    return (
      <div className="list-products">
        <input
          data-testid="query-input"
          type="text"
          name="queryText"
          value={ query }
          onChange={ this.handleChange }
        />

        <button
          data-testid="query-button"
          type="button"
          onClick={ this.buttonClick }
        >
          Pesquisar
        </button>
        { butttonClicked ? <ListProducts categoryId="" query={ query } />
          : <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>}
        <div>
          Categorias:
          { categories.map((category, index) => (
            <ListOfCategories key={ index } category={ category.name } />
          ))}
        </div>
      </div>
    );
  }
}

export default InitialPage;
