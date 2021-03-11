import React from 'react';
import Loading from './Loading';
import * as api from '../services/api';

class ListOfCategories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((response) => this.setState({ categories: response }));
  }

  render() {
    const { categories } = this.state;
    if (categories === 0) return <Loading />;
    return (
      <div>
        <p>Categorias:</p>
        {categories
          .map((elem) => <p data-testid="category" key={ elem.id }>{ elem.name }</p>)}
      </div>
    );
  }
}

export default ListOfCategories;
