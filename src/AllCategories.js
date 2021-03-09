import React from 'react';
import * as api from './services/api';

class AllCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      allCategories: []
    }
  }
    
  componentDidMount() { 
    this.fetchCategory(); 
  }

  async fetchCategory() {
    const gCategories = await api.getCategories().then(item => item);
    this.setState({
      allCategories: gCategories,
    });
  };

  render() {
    return (
      <ul>
        {this.state.allCategories.map(({ id , name }) =>
          <li key={id} data-testid="category" >{name}</li>
        )}
      </ul>
    );
  }
}

export default AllCategories;