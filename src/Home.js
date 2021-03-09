import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="Digite" data-testid="home-initial-message">
          <input />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </section>
    );
  }
}

export default Home;
