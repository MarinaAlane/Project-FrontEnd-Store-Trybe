// // fetch api
// // api.map => <itemCard>

// import React, { Component } from 'react';
// import * as api from '../services/api';
// import ItemCard from './itemCard';

// class ItemList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itemList: [],
//     };
//   }

//   componentDidMount() {
//     const { searchText } = this.props;
//     api
//       .getProductsFromCategoryAndQuery('', searchText)
//       .then((list) => this.setState({ itemList: list }));
//   }
//   // as duas requisições da api estão funcionando, problema esta na passagem de props ou key pro map
//   // alterado para somente 1 requisição conforme requisito

//   render() {
//     const { itemList } = this.state;
//     console.log(itemList);
//     return (
//       <div>
//         {itemList.length < 1 ? <p>Nenhum produto foi encontrado</p>
//           : itemList.map((item) => (
//             <ItemCard key={ item.id } itemList={ item } />))}
//       </div>
//     );
//   }
// }

// export default ItemList;

//  retirado console.log
// map não tem key e sim valores das props, definir key para o map
