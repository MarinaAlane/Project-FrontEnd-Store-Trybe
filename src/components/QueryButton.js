import React from 'react';
import SearchLogo from './search_logo.svg';
import * as marketAPI from '../services/api';

class QueryButton extends React.Component {
  constructor(props) {
    super(props);
    this.displayList = this.displayList.bind(this);
  }
  displayList() {
    /* montar a lista */
    /* chamar o ProductCard para cada item recebido da Api */

    
    /* Fazer a requisição na API */
    /* filtrar a requsição pelo que foi digitado QUERY */

    console.log('ok')
  }
  render () {
    return(
    <section>
      <img src={ SearchLogo } alt="Query button" onClick= {this.displayList } data-testid="query-button" />
    </section>    
    );
  }
}

export default QueryButton;
