import React from 'react';
import * as apis from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.apiRequest = this.apiRequest.bind(this);
  }

  componentDidMount() {
    this.apiRequest();
  }

  async apiRequest() {
    const { getCategories } = apis;
    const result = await getCategories();
    this.setState({
      categories: [...result],
    });
  }

  render() {
    return (
      <div>
        <input className="App" type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {this.state.categories.map((categoria) => (<div> {categoria.name} </div>))}
      </div>
    );
  }
}

export default Home;
