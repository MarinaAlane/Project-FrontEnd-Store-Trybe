import React from 'react';
import ListOfCategories from './ListOfCategories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ListOfCategories />
      </div>
    );
  }
}

export default Home;
