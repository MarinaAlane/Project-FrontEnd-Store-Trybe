import { createContext } from 'react';

const InputContext = createContext({
  inputValue: '',
  selectedCategory: '',
  cartProducts: [],
  reviews: [],
  setInputValue: () => {},
  setSelectedCategory: () => {},
  addProductToCart: () => {},
  saveNewRaview: () => {},
});
export default InputContext;
