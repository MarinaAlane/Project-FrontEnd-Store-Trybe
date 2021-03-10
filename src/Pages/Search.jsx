import React from 'react';
import * as api from '../services/api';
import CardList from '../Components/CardList';
import ListCategories from '../Components/ListCategories';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.getCatAndQuery = this.getCatAndQuery.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
    this.renderCard = this.renderCard.bind(this);
    this.getCategoriesApi = this.getCategoriesApi.bind(this);

    this.state = {
      categories: [],
      products: [],
      searchText: '',
      cardList: false,
      digite: true,
    };
  }

  componentDidMount() {
    this.getCategoriesApi();
  }

  getCategoriesApi() {
    api.getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      });
  }

  getCatAndQuery(value) {
    api.getProductsFromCategoryAndQuery('MLB1403', value)
      .then(({ results }) => {
        this.setState({
          products: results,
          cardList: true,
        });
      });
  }

  searchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  renderCard() {
    const { searchText } = this.state;
    this.getCatAndQuery(searchText);
    this.setState({
      digite: false,
    });
  }

  render() {
    const { searchText, products, cardList, digite, categories } = this.state;

    return (
      <div className="main" data-testid="home-initial-message">
        <section className="section-category">
          Categorias:
          { categories.map((category) => <ListCategories key={ category.id } category={ category } /> ) }
        </section>
        <section>
        <div>
          <label htmlFor="searchtext">
            <input
              type="text"
              id="searchText"
              name="searchText"
              value={ searchText }
              onChange={ this.searchTextChange }
              data-testid="query-input"
            />
          </label>
          <input
            type="button"
            data-testid="query-button"
            value="Buscar"
            onClick={ this.renderCard }
          />
        </div>
        { digite && <p>Digite algum termo de pesquisa ou escolha uma categoria.</p> }
        { cardList && <CardList products={ products } /> }
        </section>
      </div>
    );
  }
}

export default Search;
