import React from 'react';
import SearchLogo from './search_logo.svg';

class QueryButton extends React.Component {
  constructor(props) {
    super(props);
    this.displayList = this.displayList.bind(this);
  }
  displayList() {
    /* montar a lista */
    /* ch */
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
