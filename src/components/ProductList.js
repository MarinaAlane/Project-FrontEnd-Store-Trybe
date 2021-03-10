import React from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const responseCategorie = await Api.getCategories();

    this.setState({ categories: responseCategorie });
  }

  render() {
    const { categories } = this.state;

    return (
      <main>
        <nav>
          <input type="text" />
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </nav>
        <aside>
          <span>Categorias:</span>
          {categories.map((category) => (
            <div key={ category.id }>
              <label
                data-testid="category"
                htmlFor={ `${category.name}-checkbox` }
              >
                <input id={ `${category.name}-checkbox` } type="checkbox" />
                { category.name }
              </label>
            </div>
          ))}
        </aside>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    );
  }
}

export default ProductList;
