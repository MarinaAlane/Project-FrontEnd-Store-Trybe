import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <>
        <header>
          <input type="text" />
        </header>

        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </>
    );
  }
}

export default Home;
