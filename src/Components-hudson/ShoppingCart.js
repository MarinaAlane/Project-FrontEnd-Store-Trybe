import React from  'react';


class ShoppingCart extends React.Component {
  render() {
    const { list } = this.pros;
    if (list.lengt === 0) return <h1>Carinho Vázio</h1>;
    return(
      <ol>
        {list.map((item, index) => <li key={index} >{item}</li>)}
      </ol>
    );
  }
}