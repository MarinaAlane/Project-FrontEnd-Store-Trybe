import React from 'react';
import ListOfCategories from './ListOfCategories';
import { getCategories } from '../services/api';

class InitialPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.getApiCategories = this.getApiCategories.bind(this);
  }

  componentDidMount() {
    this.getApiCategories();
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

  render() {
    const { categories } = this.state;
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          Categorias:
          { categories.map((category, index) => (
            <ListOfCategories key={ index } category={ category } />
          ))} 
        </div>
      </div>
    );
  }
}

export default InitialPage;
