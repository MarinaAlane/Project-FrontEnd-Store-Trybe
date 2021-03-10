import React from 'react';

//requisito 2

class Home extends React.Component {
  render () {
    return (
      <div>
        <input className='App' type='text' />
        <p data-testid='home-initial-message'>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
